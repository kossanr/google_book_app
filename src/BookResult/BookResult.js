import React from "react";
import BookDetail from "../BookDetail/BookDetail";

export default function BookSearch(props) {
  const { results } = props;
  const bookResults = results.map((book, index) => (
    <li key={index}>{book.volumeInfo.title}</li>
  ));
  return (
    <div className="results">
      <ul>
        <BookDetail bookResults={bookResults} />
      </ul>
    </div>
  );
}
