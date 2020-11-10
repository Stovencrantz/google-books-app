const router = require("express").Router();
const axios = require("axios");
const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
const APIKEY = "AIzaSyAenocerebZN6FNQCmbSGeob3BCCBjfKx4";

// Matches with the "/api/search/:id route"

router.route("/:title").get((req, res) => {
  console.log("API url: ", BASEURL + req.params.title + "&" + APIKEY);
  axios.get(BASEURL + req.params.title + "&" + APIKEY)
  .then((data) => {
    console.log("response: ", data.data.items);
    res.json(data.data.items);
  })
  .catch((err) => {
      console.log("There was an issue returning our data");
      console.log(err);
  })
});

module.exports = router;
