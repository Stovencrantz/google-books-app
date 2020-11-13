import axios from "axios";

export default {
    // Send get request to search google books api
    searchBooks: function(query) {
        console.log("making axios call from front end to back end")
        return axios.get("api/search/" + query);
    },

    saveBook: function(bookData) {
        console.log("Saving the book: ", bookData.title);
        return axios.post("/api/book", bookData)
    }
}