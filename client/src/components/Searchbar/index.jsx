import React, { useState } from "react";

export default function Searchbar() {

    const [searchTerm, setSearchTerm ] = useState("");

    function handleInputChange(event) {
        event.preventDefault();
        setSearchTerm(event.target.value);
    }
    
    function handleFormSubmit(event) {
        event.preventDefault();
        console.log("search term: ", searchTerm);
        
    }

    return(

        <form className="mb-5" onSubmit={handleFormSubmit}> 
            <div className="form-row">
                <div className = "col-7">
                    <input type="text" className="form-control" name="query" 
                    placeholder="Search Terms" 
                    onChange={handleInputChange}
                    value={searchTerm} />
                </div>
                <div className="col-5 text-left">
                    <button className="btn btn-primary" type="submit">Submit</button>
                </div>
            </div>
        </form>

    )
}
