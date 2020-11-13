import React from "react";

export default class BookSearch extends React.Component {
  render() {
    return (
      <div className="results">
        <form className="search_form">
          <input type="text" name="search" id="search" placeholder="Search" />
          <button className="search_button">search</button>
        </form>
      </div>
    );
  }
}

//add onclick event to book search > store method in app.js > method will set state?
