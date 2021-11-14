import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./NavBar.css";
import useAxios from "../../utils/helperFunctions/useAxios";
import { SearchList } from "./SearchList/SearchList";
const links = [
  { text: "Home", route: "/" },
  { text: "Favourites", route: "/favourites" },
];
export const NavBar = () => {
  const [search, setSearch] = useState();
  const [data, setData] = useState([]);
  const { response, loading, error } = useAxios({
    url: `/search/movie`,
    query: search && search,
  });
  const searchHandler = (e) => {
    setSearch(e.target.value);
  };
  useEffect(() => {
    if (response !== null) {
      setData(response);
    }
  }, [response]);
  console.log(data);
  return (
    <div className="navbar">
      <div className="search-container">
        <input
          placeholder="search"
          onChange={searchHandler}
          className="search"
        />
        {search ? <SearchList data={data.results} /> : <></>}
      </div>
      <ul>
        {links.map(({ text, route }, i) => (
          <Link to={route} key={i}>
            {text}
          </Link>
        ))}
      </ul>
    </div>
  );
};
