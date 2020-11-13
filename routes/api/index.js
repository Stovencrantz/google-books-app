const router = require("express").Router();
const googleBooksAPI = require("./googleBooksAPI");
const book = require("./book");

router.use("/search", googleBooksAPI);

router.use("/book", book);

module.exports = router;