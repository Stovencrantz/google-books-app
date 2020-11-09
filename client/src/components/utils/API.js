import axios from "axios";

export default {
    // Send get request to search google books api
    searchBooks: function(query) {
        console.log("making axios call from front end to back end")
        return axios.get("api/search/" + query);
    }
}