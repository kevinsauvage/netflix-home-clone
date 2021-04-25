import React, { useEffect, useState } from "react";
import "./Banner.scss";
import axios from "../../axios.js";
import requests from "../../requests.js";

const Banner = () => {
  const [movie, setMovie] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(requests.fetchNetflixOriginal);
      setMovie(
        response.data.results[
          Math.floor(Math.random() * response.data.results.length - 1)
        ]
      );
    };
    fetchData();
    return;
  }, []);

  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
      }}>
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
      </div>
      <div className="banner--fadeBottom"></div>
    </div>
  );
};

export default Banner;
