import React from "react";
// import BookResult from "./BookResult/BookResult";
import BookSearch from "./BookSearch/BookSearch";

export default class App extends React.Component {
  render() {
    return (
      <div className="app">
        <h1> Book Search </h1>
        {/* <BookResult /> */}
        <BookSearch />
      </div>
    );
  }
}
