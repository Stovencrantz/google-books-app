import React, { useContext, useState, useEffect, Switch } from "react";
import BookContext from "../../context/bookContext";
import LoadSpinner from "../../components/LoadSpinner";
import ResultsListItem from "../../components/ResultsList";

export default function ResultsList() {
  const { bookContext, setBookContext, isLoading, setIsLoading } = useContext(
    BookContext
  );

  useEffect(() => {
    console.log("book context: ", bookContext);
  }, [bookContext]);

  return (
    <div className="px-3 py-3" style={{ borderStyle: "solid" }}>
      <h2 className="text-left">Search Results:</h2>
      <ul className="list-group">
        {isLoading ? (
          <LoadSpinner />
        ) : Object.keys(bookContext).length === 0 ? (
          <li className="list-group-item">No Results Found</li>
        ) : (
          bookContext.map((book, index) => {
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
                    <div className="col-12">
                      <div className="row">
                        <h1 className="text-left">{book.volumeInfo.title}</h1>
                      </div>
                      <div className="row">
                        <h2 className="text-left">
                          {book.volumeInfo.publisher}
                        </h2>
                      </div>
                      <div className="row">
                        <h3 className="text-left">
                          {book.volumeInfo.authors[0]}
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-4">
                      <img
                        className="img-thumbnail"
                        src={book.volumeInfo.imageLinks.thumbnail}
                      ></img>
                    </div>
                    <div className="col-8">{book.volumeInfo.description}</div>
                  </div>
                </li>
              );
            }
          })
        )}
      </ul>
    </div>
  );
}
