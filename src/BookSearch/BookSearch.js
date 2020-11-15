import React from "react";

export default class BookSearch extends React.Component {
  render() {
    return (
      <form className="search_form">
        <input
          type="text"
          //   value={this.state.results.q}
          id="search"
          placeholder="Search"
        />
        <button onClick={this.props.searchButton} className="search_button">
          search
        </button>
      </form>
    );
  }
}

//add onclick event to book search > store method in app.js > method will set state?
