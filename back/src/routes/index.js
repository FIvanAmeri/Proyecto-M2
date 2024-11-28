const express = require("express");
const movieRouter = require("./moviesRouter");

const router = express.Router();


router.use("/movies", movieRouter);

module.exports = router;
