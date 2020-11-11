import React, { useContext, useState, useEffect, Switch } from "react";
import BookContext from "../../context/bookContext";

export default function ResultsList() {
  const { bookContext, setBookContext, isLoading, setIsLoading } = useContext(
    BookContext
  );

 
  useEffect(() => {
    console.log("book context: ", bookContext);
  }, [bookContext]);

  return (
    <div>
      <ul className="list-group">
        {Object.keys(bookContext).length === 0 ? (
          <li className="list-group-item">No Results Found</li>
        ) : (
          bookContext.map((book, index) => {
            if (!book.volumeInfo.hasOwnProperty("authors")) {
              return (
                <li className="list-group-item" key={index}>
                  {book.volumeInfo.title} by "Unknown author"
                </li>
              );
            }
            else {
              return (
                <li className="list-group-item" key={index}>
                  {book.volumeInfo.title} by {book.volumeInfo.authors[0]}
                </li>
              );
            }
          })
        )}
      </ul>
    </div>
  );
}
