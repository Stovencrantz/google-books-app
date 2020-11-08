import React from "react";
import SearchBar from "../../components/Searchbar";
import ResultsList from "../../components/ResultsList";
export default function SearchPage() {

    return(
        <>
            <div className = "container mt-5">
            <SearchBar />
            <ResultsList />
            </div>
        </>
    )
}