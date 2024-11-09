import React from 'react';
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

const Table = ({ book }: { book: Book }) => {
  return (
    <div className="book-table">
      <h2>Book Information</h2>
      <hr />
      <table>
        <tbody>
          <tr>
            <th>Title&nbsp;</th>
            <td>{book.title}</td>
          </tr>
          <tr>
            <th>Author&nbsp;</th>
            <td>{book.author_name[0]}</td>
          </tr>
          <tr>
            <th>Published&nbsp;</th>
            <td>{book.publish_year[0]}</td>
          </tr>
          <tr>
            <th>Language&nbsp;</th>
            <td>{book.language}</td>
          </tr>
          <tr>
            <th>Edition&nbsp;</th>
            <td>{book.edition_count}</td>
          </tr>
          <tr>
            <th>Publisher&nbsp;</th>
            <td>{book.publisher ? book.publisher : '-'}</td>
          </tr>
          <tr>
            <th>Location&nbsp;</th>
            <td>{book.publish_place ? book.publish_place : '-'}</td>
          </tr>
        </tbody>
      </table>
      <hr />
      <p className="description">
        Delve into the captivating world crafted by {book.author_name[0]}, where
        every page offers a blend of emotions. Published by {book.publisher} in{' '}
        {book.publish_year[0]}, this {book.language} edition is a must-read for
        enthusiasts.
      </p>
    </div>
  );
};

export default Table;
