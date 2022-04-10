import React, { useEffect, useState } from "react";
import axios from "axios";

import Movie from "../../components/Movie/Movie";
import "./movies.css";

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get("https://624b0e2171e21eebbcec0e9d.mockapi.io/api/v1/movies")
      .then((response) => setMovies(response.data))
      .catch((error) => console.log("error ", error));
  }, []);

  return (
    <div className="movies movies__container">
      <div className="movies__banner">
        {movies
          .filter((movie) => movie.type === "banner")
          .map((movie) => (
            <img key={movie.id} src={movie.movieImageUrl} />
          ))}
      </div>
      <h2 className="movies__title">Continue Watching  |  4 Movies</h2>
      <div className="movies__items">
        {movies
          .filter((movie) => movie.type !== "banner")
          .map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              image={movie.movieImageUrl}
              title={movie.title}
              releaseDate={movie.release_date}
              duration={movie.duration}
            />
          ))}
      </div>
    </div>
  );
};

export default Movies;
