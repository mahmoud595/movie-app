import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import "./MovieCard.css";

export const MovieCard = ({ movie, setData }) => {
  const [exist, setExist] = useState(false);
  const location = useLocation();

  const checkForMovie = (movies) => {
    const filteredMovie = movies.filter((storedMovie) => {
      return movie.id === storedMovie.id;
    });
    return filteredMovie.length;
  };

  useEffect(() => {
    if (localStorage.getItem("favouriteMovies") && location.pathname === "/") {
      const movies = JSON.parse(localStorage.getItem("favouriteMovies"));
      checkForMovie(movies) && setExist(true);
    }
  }, [exist]);

  /*function to check for the route if it is home page then user can add movie to his favourites
  or if it is favourite page then user can remove it */

  const favouritesHandler = async () => {
    let moviesArray;
    if (localStorage.getItem("favouriteMovies")) {
      moviesArray = await JSON.parse(localStorage.getItem("favouriteMovies"));
    } else {
      moviesArray = [];
    }
    if (location.pathname === "/") {
      moviesArray.push(movie);
      localStorage.setItem("favouriteMovies", JSON.stringify(moviesArray));
      checkForMovie(moviesArray) && setExist(true);
    } else {
      const newMoviesArray = moviesArray.filter((removeMovie) => {
        return removeMovie.id !== movie.id;
      });
      setData(newMoviesArray);
      localStorage.setItem("favouriteMovies", JSON.stringify(newMoviesArray));
    }
  };
  return (
    <div
      className="movieCard"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.poster_path})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: 180,
        width: 180,
      }}
    >
      <div className="titleButton">
        <p className="movieTitle">{movie.title}</p>
        <button
          onClick={favouritesHandler}
          disabled={exist}
          className="favouriteBtn"
          style={{
            backgroundColor:
              location.pathname === "/" ? "rgb(37, 217, 130)" : "#DC143C",
          }}
        >
          {location.pathname === "/" ? "Add To Favourites" : "Remove"}
        </button>
      </div>
    </div>
  );
};
