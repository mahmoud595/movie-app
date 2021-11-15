import { useEffect } from "react";

import { MovieCard } from "./MovieCard/MovieCard";
import "./MoviesCardsContainer.css";

export const MoviesCardsContainer = ({ data, setData }) => {
  return (
    <div className="movies-container">
      {data?.length ? (
        <>
          {data.map((movie) => (
            <MovieCard key={movie.id} movie={movie} setData={setData} />
          ))}
        </>
      ) : (
        <></>
      )}
    </div>
  );
};
