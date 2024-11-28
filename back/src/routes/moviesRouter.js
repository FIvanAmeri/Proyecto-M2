const { Router } = require("express");
const movieController = require("../controllers/moviesController");
const { validateMovieFields } = require("../middlewares");

const movieRouter = Router();

movieRouter.get("/", movieController.getAllMovies);
movieRouter.post("/", validateMovieFields, movieController.addMovie);

module.exports = movieRouter;
