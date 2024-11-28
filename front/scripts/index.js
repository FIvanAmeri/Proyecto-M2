const axios = require("axios")
const { createMovieCard } = require('./createMovieCard.js');

const fetchAndRenderMovies = async () => {
  try {
    const { data: movies } = await axios.get('http://localhost:3003/movies');
    const cardsContainer = document.querySelector('#cardsContainer');
    cardsContainer.innerHTML = '';

    movies.forEach(movie => {
      const card = createMovieCard(movie);
      cardsContainer.appendChild(card);
    });

    console.log('Películas renderizadas exitosamente.');
  } catch (error) {
    console.error('Error fetching movies:', error.message);
  }
};

document.addEventListener('DOMContentLoaded', fetchAndRenderMovies);
