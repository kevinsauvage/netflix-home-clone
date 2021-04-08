import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import axios from "./axios";
import "./Row.scss";
import movieTrailer from "movie-trailer";

const BASE_URL_POSTER = "https://image.tmdb.org/t/p/w185";

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(fetchUrl);
      setMovies(response.data.results);
      return;
    };
    fetchData();
  }, [fetchUrl]);

  const option = {
    width: "100%",
    heigh: "390px",
    marginRight: "20px",
    playerVars: {
      autoPlay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(null, { tmdbId: movie?.id })
        .then((url) => {
          if (url) {
            const urlParams = new URLSearchParams(new URL(url).search);
            setTrailerUrl(urlParams.get("v"));
          }
        })
        .then((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div className="row">
      <h2 className="row__title">{title}</h2>
      <div className="row__posters">
        {movies &&
          movies.map((movie) => (
            <img
              onClick={() => handleClick(movie)}
              key={movie.id}
              className={`row__poster ${isLargeRow && "row__poster__large"}`}
              src={`${BASE_URL_POSTER}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
            />
          ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={option} />}
    </div>
  );
};

export default Row;
