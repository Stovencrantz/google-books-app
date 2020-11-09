const router = require("express").Router();
const googleBooksAPI = require("./googleBooksAPI");

router.use("/search", googleBooksAPI);

module.exports = router;