import { useState, useEffect } from "react";

import { MoviesCardsContainer } from "../../Layout/MoviesCardsContainer/MoviesCardsContainer";
import "./favourites.css";

export const Favourites = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("favouriteMovies")) {
      const movies = JSON.parse(localStorage.getItem("favouriteMovies"));
      setData(movies);
    }
  }, []);

  return (
    <div className="favourites">
      {data.length ? (
        <MoviesCardsContainer data={data} setData={setData} />
      ) : (
        <h1 style={{ color: "#fff", textAlign: "center" }}>
          No Favourite Movies
        </h1>
      )}
    </div>
  );
};
