function createMovieCard(movie) {
    const div = document.createElement("div");
    div.classList.add("card");

    const img = document.createElement("img");
    img.classList.add("card-img-top", "cardImg");
    img.src = movie.poster;
    img.alt = movie.title;

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    const title = document.createElement("h5");
    title.classList.add("card-title", "title");


    const director = document.createElement("p");
    director.classList.add("card-text", "director"); 
  

    const year = document.createElement("p");
    year.classList.add("card-text", "year"); 


    const duration = document.createElement("p");
    duration.classList.add("card-text", "duracion"); 


    const genre = document.createElement("p");
    genre.classList.add("card-text", "genre"); 
  

    const rate = document.createElement("p");
    rate.classList.add("card-text", "rate"); 



    title.innerHTML = movie.title;
    director.innerHTML = movie.director;
    year.innerHTML = movie.year;
    duration.innerHTML = movie.duration + " " + "minutos";
    genre.innerHTML = movie.genre.join(', ');


    rate.innerHTML ="★" + " " + movie.rate;
    


    cardBody.appendChild(title);
    cardBody.appendChild(director);
    cardBody.appendChild(year);
    cardBody.appendChild(duration);
    cardBody.appendChild(genre);
    cardBody.appendChild(rate);
    
    div.appendChild(img);
    div.appendChild(cardBody);

    
    return div;
}

module.exports = { createMovieCard };
