import React from "react";

export default class BookSearch extends React.Component {
  render() {
    return (
      //needs onChange Handler
      <form
        onSubmit={(event) => this.props.searchButton(event)}
        className="search_form"
      >
        <input
          type="text"
          value={this.props.q}
          id="search"
          placeholder="Search"
          onChange={(e) => this.props.updateState("q", e.target.value)}
        />
        <button className="search_button">search</button>
      </form>
    );
  }
}

//add onclick event to book search > store method in app.js > method will set state?
