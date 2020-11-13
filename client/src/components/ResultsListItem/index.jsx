import React, { useState, useEffect, useContext } from "react";
import BookContext from "../../context/bookContext";
import API from "../../utils/API";

export default function ResultsListItem(props) {
  const book = props.book;
  const index = book.index;

  function saveBook(bookData) {
    API.saveBook(bookData)
      .then((res) => console.log("Successfully saved ", bookData.title))
      .catch((err) => console.log("there was an errer saving the book"));
  }

  function listItem(book, index) {
    if (
      book.volumeInfo.hasOwnProperty("title") &&
      book.volumeInfo.hasOwnProperty("publisher") &&
      book.volumeInfo.hasOwnProperty("authors") &&
      book.volumeInfo.hasOwnProperty("imageLinks") &&
      book.volumeInfo.hasOwnProperty("infoLink")
    ) {
      const bookData = {
        title: book.volumeInfo.title,
        publisher: book.volumeInfo.publisher,
        authors: book.volumeInfo.authors[0],
        thumbnailLink: book.volumeInfo.imageLinks.thumbnail,
        link: book.volumeInfo.infoLink,
      };

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
              <a href={book.volumeInfo.infoLink} target="_blank">
                <button className="btn btn-primary mr-2">View</button>
              </a>
              <button
                className="btn btn-primary ml-2"
                onClick={() => saveBook(bookData)}
              >
                Save
              </button>
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
