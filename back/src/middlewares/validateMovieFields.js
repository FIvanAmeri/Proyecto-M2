const validateMovieFields = (req, res, next) => {
    const { title, year, genre, duration, poster, rate, director } = req.body;
    const movieFields = ["title", "year", "genre", "duration", "poster", "rate", "director"];
    const missingFields = movieFields.filter(field => !req.body[field]);

    if (missingFields.length > 0) {
        return res.status(400).json({
            message: `Error during movie info validation. Missing fields: ${missingFields.join(", ")}`
        });
    }

    next();
};

module.exports = validateMovieFields;
