import { useState, useEffect } from "react";
import "./MovieCard.css";
export const MovieCard = ({ movie }) => {
  const [exist, setExist] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("favouriteMovies")) {
      const movies = JSON.parse(localStorage.getItem("favouriteMovies"));
      movies.includes(movie.id) && setExist(true);
    }
  }, [exist]);
  const addToFavourites = async (id) => {
    let moviesArray;
    if (localStorage.getItem("favouriteMovies")) {
      moviesArray = await JSON.parse(localStorage.getItem("favouriteMovies"));
    } else {
      moviesArray = [];
    }
    moviesArray.push(id);
    localStorage.setItem("favouriteMovies", JSON.stringify(moviesArray));
    moviesArray.includes(movie.id) && setExist(true);
  };
  console.log(localStorage.getItem("favouriteMovies"));
  return (
    <div className="movieCard">
      <p className="movieTitle">{movie.title}</p>
      <p>votes:{movie.vote_count}</p>
      <button onClick={() => addToFavourites(movie.id)} disabled={exist}>
        Add To Favourites
      </button>
    </div>
  );
};
