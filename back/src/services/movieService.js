const Movie = require('../models/Movie');

module.exports = {
    getMovies: async () => {
        try {
            const movies = await Movie.find();
            return movies;
        } catch (error) {
            console.error('Error al obtener películas:', error);
            throw error;
        }
    },

    addMovie: async (title, year, genre, duration, poster, rate, director) => {
        try {
            const newMovie = new Movie({ title, year, genre, duration, poster, rate, director });
            await newMovie.save();
            return newMovie;
        } catch (error) {
            console.error('Error al agregar película:', error);
            throw error;
        }
    }
};
