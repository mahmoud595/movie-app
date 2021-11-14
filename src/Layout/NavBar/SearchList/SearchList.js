import "./SearchList.css";
export const SearchList = ({ data }) => {
  return (
    <>
      {data?.length ? (
        <ul className="list">
          {data?.map((movie) => (
            <li key={movie.id} className="list-item">
              {movie.title}
            </li>
          ))}
        </ul>
      ) : (
        <></>
      )}
    </>
  );
};
