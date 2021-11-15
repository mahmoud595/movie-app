import { memo } from "react";

import "./SearchList.css";

export const SearchList = memo(({ data, loading, error }) => {
  return (
    <>
      <ul className="list">
        {data?.length ? (
          <>
            {data?.map((movie) => (
              <li key={movie.id} className="list-item">
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  width={60}
                  height={70}
                />
                <p>{movie.title}</p>
              </li>
            ))}
          </>
        ) : (
          <>
            {loading ? (
              <h3>Loading...</h3>
            ) : error ? (
              <h3>{error.message}</h3>
            ) : (
              <></>
            )}
          </>
        )}
      </ul>
    </>
  );
});
