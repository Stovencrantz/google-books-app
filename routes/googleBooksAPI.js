const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
const APIKEY = "AIzaSyAenocerebZN6FNQCmbSGeob3BCCBjfKx4";

module.exports = (app) => {
    app.get("/api/book/:title", (req, res) => {
        console.log("query term ", req.params.title);
        
        axios.get(BASEURL + req.params.title + "&" + APIKEY)
        .then(res => {
            console.log("Response data: ", res.data)
        })
    })
}