import React, { useCallback, useState, Suspense } from 'react';
import '../App.css';
import { useEffect } from 'react';
//Lazy loading table component
const LazyTable = React.lazy(() => import('./Table'));

const Home = () => {
  // Define the type for Book
  type Book = {
    title: string;
    author_name: string[];
    publish_year: number[];
    language: string[];
    edition_count: number;
    publisher?: string;
    publish_place?: string;
  };
  // requried hooks
  const [apiData, setApiData] = useState<Book[]>([]);
  const [selected, setSelected] = useState(false);
  const [selectedData, setSelectedData] = useState<Book | null>(null);
  const [filterData, setFilterData] = useState<Book[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [searchValue, setSearchValue] = useState<string>('');

  // useCallback hook to memoize the fetchBooks function and prevent re-creation on every render
  const fetchBooks = useCallback(() => {
    // Fetch data from the Open Library API based on the book title
    fetch(`https://openlibrary.org/search.json?title={bookTitle}`)
      .then((res) => {
        // Check the response
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((res) => {
        // Check if there are no results found and set the error message
        if (res.docs.length === 0) {
          setErrorMessage('No results found');
        } else {
          setApiData(res.docs);
        }
        setLoading(false);
      })
      .catch((error) => {
        // Set error message in case of any network or fetch errors
        setErrorMessage(`${error} or failed to fetch data`);
        setLoading(false);
      });
  }, []);
  // useEffect hook to call fetchBooks
  useEffect(() => {
    fetchBooks();
  }, []);

  // Handle input change for searchValue
  const handleChange = (e: any) => {
    const filterBook = apiData.filter((book: any) =>
      book.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setSearchValue(e.target.value);
    setFilterData(filterBook);
    setSelected(false);

    if (e.target.value === '') {
      setFilterData([]);
    }
    apiData.filter((ele: any) => {
      if (
        !ele.title.toLowerCase().includes(e.target.value.toLowerCase()) &&
        searchValue.length > 0 &&
        filterBook.length == 0
      ) {
        setErrorMessage('No results found');
      } else {
        setErrorMessage('');
      }
    });
  };
  // Handle selection of a book from the filtered list
  const handleSelect = (book: Book) => {
    setSelected(true);
    setSelectedData(book);
    setSearchValue('');
    setFilterData([]);
  };
  return (
    <div className="main">
      <header>
        Book <span>Finder</span>
      </header>
      <b>
        Discover your next favorite read effortlessly with our straight forward
        Book Finder app <span>!</span>
      </b>
      <input
        type="text"
        placeholder="search book"
        value={searchValue}
        onChange={handleChange}
      ></input>
      <div className="result">
        {loading && <p>Loading...</p>}
        {errorMessage && <p>{errorMessage}</p>}
        {filterData.length > 0 && (
          <ul style={{ listStyle: 'none' }}>
            {filterData.map((book, id) => (
              <li onClick={() => handleSelect(book)} key={id}>
                <p>{book.title}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
      <section className={selected ? 'card' : 'hidden'}>
        {selected && selectedData && (
          <Suspense fallback={<div>Loading...</div>}>
            <LazyTable book={selectedData} />
          </Suspense>
        )}
      </section>
    </div>
  );
};

export default Home;
