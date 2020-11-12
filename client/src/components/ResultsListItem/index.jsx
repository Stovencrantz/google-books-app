import React, { useState, useEffect, useContext } from "react";
import BookContext from "../../context/bookContext";

export default function ResultsListItem(props) {
  const book = props.book;
  const index = book.index;

  function listItem(book, index) {
    if (!book.volumeInfo.hasOwnProperty("authors")) {
      return (
        <li className="list-group-item" key={index}>
          {book.volumeInfo.title} by "Unknown author"
        </li>
      );
    } else {
      return (
        <li className="list-group-item" key={index}>
          <div className="row">
            <div className="col">
              <div className="row">
                <h3 className="text-left">{book.volumeInfo.title}</h3>
              </div>
              <div className="row">
                <h4 className="text-left">{book.volumeInfo.publisher}</h4>
              </div>
              <div className="row">
                <h5 className="text-left">{book.volumeInfo.authors[0]}</h5>
              </div>
            </div>
            <div className="col text-right">
              <button className="btn btn-primary mr-2">View</button>
              <button className="btn btn-primary ml-2">Save</button>
            </div>

          </div>
          <div className="row">
            <div className="col-4">
              {book.volumeInfo.hasOwnProperty("imageLinks") ? (
                <img
                  className="img-thumbnail"
                  src={book.volumeInfo.imageLinks.thumbnail}
                ></img>
              ) : (
                <img
                  className="img-thumbnail"
                  src="https://via.placeholder.com/150"
                ></img>
              )}
            </div>
            <div className="col-8">{book.volumeInfo.description}</div>
          </div>
        </li>
      );
    }
  }

  return <div>{listItem(book, index)}</div>;
}
