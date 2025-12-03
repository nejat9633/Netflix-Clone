import React, { useEffect, useState } from "react";
import style from "./Row.module.css";
import axios from "../../../utils/axios";
import movieTrailer from "movie-trailer";
import youtube from "react-youtube";
import YouTube from "react-youtube";

function Row({ title, fetchURL, largeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const base_url = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const res = await axios.get(fetchURL);
        setMovies(res.data.results);
      } catch (error) {
        console.log("Error", error);
      }
    };
    fetchMovie();
  }, [fetchURL]);

  const handleclick = (movie) => {
    const movieName = movie?.name || movie?.title || movie?.original_name || "";
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movieName)
        .then((url) => {
          console.log(url);
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log("Error: " + error));
    }
  };
  const opts = {
    height: "390",
    width: "100%",

    playerVars: { autoplay: 1 },
  };

  return (
    <>
      <div className={style.row}>
        <h1 className={style.title}>{title}</h1>
        <div className={style.posters}>
          {movies?.map((movie, index) => (
            <img
              onClick={() => handleclick(movie)}
              key={index}
              src={`${base_url}${
                largeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.title || movie.name || movie.original_name}
              className={`${style.poster} ${largeRow && style.largePoster}`}
            />
          ))}
        </div>
        <div style= {{padding: '20px'}}>
          {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
      </div>
    </>
  );
}

export default Row;
