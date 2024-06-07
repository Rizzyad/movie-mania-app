import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");

  const fetchMovies = async (searchQuery) => {
    try {
       
      console.log("Fetching movies with query:", searchQuery);
      console.log("Request URL:", url);
      console.log("Request Headers:", headers);

      const response = await axios.get(url, {
        params: {
          query: searchQuery,
        },
        headers: headers,
      });
      console.log("API response:", response.data);
      setMovies(response.data.results || []);
    } catch (error) {
      console.error("Error fetching data: ", error);
      setMovies([]);
    }
  };

  const fetchPopularMovies = async () => {
    try {
      const url = `${import.meta.env.VITE_REACT_APP_BASEURL}/movie/popular`;
      const headers = {
        Authorization: `Bearer ${import.meta.env.VITE_REACT_APP_TOKEN}`,
        'Content-Type': 'application/json;charset=utf-8'
      };
      console.log("Fetching popular movies");
      console.log("Request URL:", url);
      console.log("Request Headers:", headers);

      const response = await axios.get(url, {
        headers: headers,
      });
      console.log("API response:", response.data);
      setMovies(response.data.results || []);
    } catch (error) {
      console.error("Error fetching data: ", error);
      setMovies([]);
    }
  };

  useEffect(() => {
    if (query) {
      fetchMovies(query);
    } else {
      fetchPopularMovies();
    }
  }, [query]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>RISYAD MOVIE MANIA</h1>
        <input
          placeholder="Cari film kesayangan..."
          onChange={({ target }) => setQuery(target.value)}
          className="Movie-search"
        />
        <div className="Movie-container">
          {movies.length > 0 ? (
            movies.map((movie) => (
              <div className="Movie-wrapper" key={movie.id}>
                <div className="Movie-title">{movie.title}</div>
                <img
                  src={`${import.meta.env.VITE_REACT_APP_BASEIMGURL}${movie.poster_path}`}
                  alt={movie.title}
                  className="Movie-image"
                />
                <div className="Movie-date">{movie.release_date}</div>
                <div className="Movie-rate">{movie.vote_average}</div>
              </div>
            ))
          ) : (
            <p>No movies found</p>
          )}
        </div>
      </header>
    </div>
  );
};

export default App;
