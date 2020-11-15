import React from "react";
import BookResult from "./BookResult/BookResult";
import BookSearch from "./BookSearch/BookSearch";

export default class App extends React.Component {
  //state object with one property
  state = {
    results: [],
    q: "",
    printType: "ebook",
  };

  searchButton = (e) => {
    e.preventDefault();
    let url = `https://www.googleapis.com/books/v1/volumes?q=${this.state.q}&key=AIzaSyBw8AstDk2a8m-jyiTnZrMx9Lp76oefGWk`;

    fetch(url)
      .then((res) => res.json())
      .then((res) => this.setState({ results: res.items }));
  };
  updateState = (key, value) => {
    this.setState(//update q to search box value);
  };
  //items.volumeInfo
  render() {
    return (
      <div className="app">
        <h1> Book Search </h1>
        <BookResult />
        <BookSearch
          {...this.state}
          book_results={this.state.results}
          searchButton={this.searchButton}
          updateState={this.updateState}
        />
      </div>
    );
  }
}
