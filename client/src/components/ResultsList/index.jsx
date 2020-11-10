import React, { useContext, useEffect } from "react";
import BookContext from "../../context/bookContext";

export default function ResultsList() {
  const { bookContext, setBookContext } = useContext(BookContext) 
  useEffect(() => {
    console.log("book context: ", bookContext)
  }, [])
  return (
    <div>
      <ul className="list-group">
        {bookContext.map((book, index) => {
          return <li className="list-group-item" key={index}>{book.volumeInfo.title} by {book.volumeInfo.authors[0]}</li>
        })}

      </ul>
    </div>
  );
}
