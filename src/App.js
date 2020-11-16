import React from "react";
import BookResult from "./BookResult/BookResult";
import BookSearch from "./BookSearch/BookSearch";
import "./App.css";

export default class App extends React.Component {
  //state object with one property
  state = {
    results: [],
    q: "Harry Potter",
    printType: "all",
    filter: " ",
  };
  updateState = (key, value) => {
    this.setState({ [key]: value });
  };
  search = (e) => {
    e.preventDefault();
    let url = `https://www.googleapis.com/books/v1/volumes?q=${this.state.q}&key=AIzaSyBw8AstDk2a8m-jyiTnZrMx9Lp76oefGWk`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => this.setState({ results: data.items }));
  };

  render() {
    return (
      <div className="app">
        <h1> Book Search </h1>

        <BookSearch
          {...this.state}
          search={this.search}
          updateState={this.updateState}
        />
        <BookResult {...this.state} />
      </div>
    );
  }
}
