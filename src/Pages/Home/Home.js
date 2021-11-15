import { useState, useEffect } from "react";

import { Header } from "./Header/Header";
import useAxios from "../../utils/helperFunctions/useAxios";
import "./Home.css";
import { MoviesCardsContainer } from "../../Layout/MoviesCardsContainer/MoviesCardsContainer";
const links = [
  { text: "Top Movies", url: "top_rated" },
  { text: "Upcoming Movies", url: "upcoming" },
  { text: "Now Playing Movies", url: "now_playing" },
];

export const Home = () => {
  const [data, setData] = useState([]);
  const [selectedLink, setSelectedLink] = useState(links[0]);
  const [totalPages, setTotalPages] = useState();
  const [currentPage, setCurrentPage] = useState(1);

  const { response, loading, error } = useAxios({
    url: `/movie/${selectedLink.url}`,
    page: currentPage,
  });

  useEffect(() => {
    if (response !== null) {
      setData(response);
      setTotalPages(response.total_pages);
    }
  }, [response, currentPage]);

  const changePage = (type) => {
    type === "back"
      ? currentPage !== 1 && setCurrentPage(currentPage - 1)
      : currentPage !== totalPages && setCurrentPage(currentPage + 1);
  };
  return (
    <div className="home">
      <Header
        links={links}
        selectedLink={selectedLink}
        setSelectedLink={setSelectedLink}
        setCurrentPage={setCurrentPage}
      />
      {loading ? (
        <h1 style={{ color: "#Fff", textAlign: "center" }}>Loading...</h1>
      ) : error ? (
        <h1 style={{ color: "#Fff", textAlign: "center" }}>{error.message}</h1>
      ) : (
        <MoviesCardsContainer data={data.results} />
      )}

      <div className="pagination-buttons">
        <button
          disabled={currentPage === 1}
          onClick={() => changePage("back")}
          className="btn prevBtn"
        >
          Previous Page
        </button>
        <button
          disabled={currentPage === totalPages}
          onClick={() => changePage("forward")}
          className="btn nextBtn"
        >
          Next Page
        </button>
      </div>
      <p className="pageNumber">Page : {currentPage}</p>
    </div>
  );
};
