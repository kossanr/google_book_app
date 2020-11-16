import React from "react";

export default function BookDetail(props) {
  const { bookResults } = props;

  return (
    <div className="results">
      <ul>{bookResults}</ul>
    </div>
  );
}
