import { useState, useEffect } from "react";
import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
const api_key = "b7c9b3d18161404c70c5a4b53edb4386";

const useAxios = ({ url, query, page }) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const [loading, setloading] = useState(true);
  console.log(page);
  useEffect(() => {
    let unmounted = false;
    let source = axios.CancelToken.source();

    const fetchData = async () => {
      try {
        if (!unmounted) {
          const res = await axios.get(
            query
              ? `${url}?api_key=${api_key}&query=${query}&language=en-US`
              : `${url}?api_key=${api_key}&language=en-US&page=${page}`,
            {
              cancelToken: source.token,
            }
          );
          setResponse(res.data);
          setloading(false);
        }
      } catch (err) {
        if (!unmounted) {
          setError(err);
          setloading(false);
        }
      }
    };

    fetchData();
    return function () {
      unmounted = true;
      source.cancel("Cancelling in cleanup");
    };
  }, [url, query, page]);

  // custom hook returns value
  return { response, error, loading };
};

export default useAxios;
