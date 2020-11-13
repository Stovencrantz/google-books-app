import React, { useContext, useState, useEffect, Switch } from "react";
import BookContext from "../../context/bookContext";
import LoadSpinner from "../../components/LoadSpinner";
import ResultsListItem from "../../components/ResultsListItem";

export default function ResultsList() {
  const { bookContext, setBookContext, isLoading, setIsLoading } = useContext(
    BookContext
  );

  useEffect(() => {
    console.log("book context: ", bookContext);
  }, []);

  return (
    <div className="px-3 py-3" style={{ borderStyle: "solid" }}>
      <h2 className="text-left">Search Results:</h2>
      <ul className="list-group">
        {isLoading ? (
          <LoadSpinner />
        ) : (
          Object.keys(bookContext).length === 0 ? (
            <li className="list-group-item">No Results Found</li>
          ) : (
            bookContext.map((book, index) => {
              {
                return <ResultsListItem book={book} index={index} />
              }
            })
        ))}
      </ul>
    </div>
  );
}
