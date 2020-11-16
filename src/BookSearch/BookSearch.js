import React from "react";
import "./BookSearch.css";
export default function BookSearch(props) {
  const { q, printType, filter } = props;

  return (
    <form onSubmit={(event) => props.search(event)}>
      <p>
        <input
          type="text"
          value={q}
          onChange={(e) => props.updateState("q", e.target.value)}
        />{" "}
      </p>
      <p>
        {" "}
        <label>Type</label>
        <select
          value={printType}
          onChange={(e) => props.updateState("printType", e.target.value)}
        >
          <option value="all">All</option>
          <option value="books">Books</option>
          <option value="ebook">Ebook</option>
        </select>
        <label>Filter</label>
        <select
          value={filter}
          onChange={(e) => props.updateState("filter", e.target.value)}
        >
          <option value="">None</option>
          <option value="partial">Partial</option>
          <option value="full">Full</option>
          <option value="free-ebooks">Free eBooks</option>
          <option value="paid-ebooks">Paid eBooks</option>
        </select>
      </p>
      <p>
        <button className="search_button">search</button>
      </p>
    </form>
  );
}
