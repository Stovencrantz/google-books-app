import React, { useState, useEffect } from "react";

export default function ResultsListItem() {

    const [ book, setBook ] = useState(props.book)

  useEffect(() => {
    console.log(
        book
      );
  }, [])
  return (
    <li className="list-group-item">
      <div className="row">
        <h1 className="text-left">title</h1>
        <h2 className="text-left">publisher</h2>
        <h3 className="text-left">author</h3>
      </div>
      <div className="row">
        <div className="col-4">
          <img className="img-thumbnail"></img>
        </div>
        <div className="col-8">Description here</div>
      </div>
    </li>
  );
}
