import React, { useState, useContext } from "react";
import API from "../../utils/API.js";
import BookContext from "../../context/bookContext";

export default function Searchbar() {
  const [searchTerm, setSearchTerm] = useState("");
  const { bookContext, setBookContext, isLoading, setIsLoading } = useContext(
    BookContext
  );

  function handleInputChange(event) {
    event.preventDefault();
    setSearchTerm(event.target.value);
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    console.log("search term: ", searchTerm);
    setIsLoading(true);
    API.searchBooks(searchTerm)
      .then((response) => {
        console.log("Response from server: ", response.data);
        setBookContext(response.data);
        setIsLoading(false);
      })
      .catch((err) => console.log("error in handleFormSubmit catch: ", err));
  }

  return (
    <div className="px-5 pt-4 mb-5" style={{borderStyle: "solid"}}>
        <h2 className="text-left"><strong>Book Search</strong></h2>
        <h4 className="text-left">Title:</h4>
      <form className="mb-5" onSubmit={handleFormSubmit}>
        <div className="form-row">
          <div className="col-11">
            <input
              type="text"
              className="form-control"
              name="query"
              placeholder="Search Terms"
              onChange={handleInputChange}
              value={searchTerm}
            />
          </div>
          <div className="col-1 text-left">
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
