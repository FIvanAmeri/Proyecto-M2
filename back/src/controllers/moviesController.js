const movieService = require('../services/movieService');

async function getAllMovies(req, res) {
    try {
        const movies = await movieService.getMovies();
        res.json(movies);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

async function addMovie(req, res) {
    try {
        const { title, year, genre, duration, poster, rate, director } = req.body;
        const newMovie = await movieService.addMovie(title, year, genre, duration, poster, rate, director);
        res.status(201).json(newMovie);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = {
    getAllMovies,
    addMovie
};
