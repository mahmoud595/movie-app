import { MovieCard } from "./MovieCard/MovieCard";
import "./MoviesCardsContainer.css";
export const MoviesCardsContainer = ({ data }) => {
  console.log(data);
  return (
    <div className="movies-container">
      {data?.length ? (
        <>
          {data.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </>
      ) : (
        <></>
      )}
    </div>
  );
};
