# Book Finder App

## Description

Book Finder is a straight forward app designed to help you discover your next favorite read effortlessly. Enter a book's title, and let the app find the information for you!

## Features

- **Search Books**: Find books by title.
- **UX/UI**: For the User Interface and Experience, I've aimed for a cleaner, simple, and user-friendly design, drawing inspiration from Google Search.
- **Fetch Book Data**: Retrieve book data using the Fetch API from the Open Library Search API.
- **Display Information**: View detailed information about each book, including title, author, published year, language, edition, publisher, and location.

## Technologies Used

- **React**: For building the user interface.

- **TypeScript**: To add static type checking to the JavaScript code, improving maintainability and catching errors early.

- **Lazy-Loading**: lazy loaded Table component, it defers the loading of components until they are actually needed.

- **useCallback**: Implemented useCallback hook to memoize the fetchBooks function and prevent re-creation on every render.

- **Conditional rendering**: I implemented conditional rendering to dynamically display the search results and the table component based on the state.

- **Jest**: For testing the React components to ensure they work as intended, execute the unit tests using the command "npm test".

- **React Testing Library**: To facilitate testing React components with a focus on user interactions.

- **CSS Modules**: For styling the components with scoped CSS, ensuring styles don't leak across components.

### Installation

Follow these steps to set up and run the project locally:

1. **Clone the repository**:
   ```sh
   git clone https://github.com/prashanT9432/book-finder.git
   cd book-finder
   ```

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from "eslint-plugin-react";

export default tseslint.config({
  // Set the react version
  settings: { react: { version: "18.3" } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs["jsx-runtime"].rules,
  },
});
```
