import React from "react";
import BookResult from "./BookResult/BookResult";
import BookSearch from "./BookSearch/BookSearch";

export default class App extends React.Component {
  //state object with one property
  state = {
    results: [],
    q: "Narnia",
    printType: "ebook",
  };
  $$;
  searchButton = (e) => {
    e.preventDefault();
    let url = `https://www.googleapis.com/books/v1/volumes?q=${this.state.q}&printType=${this.state.printType}&key=AIzaSyDTtouIvkduVS-q2VLpHz_bNTIR--on-cI`;

    fetch(url)
      .then((res) => res.json())
      .then((res) => console.log("It worked!!!!"));
  };

  render() {
    return (
      <div className="app">
        <h1> Book Search </h1>
        <BookResult />
        <BookSearch
          book_results={this.state.results}
          searchButton={this.searchButton}
        />
      </div>
    );
  }
}
