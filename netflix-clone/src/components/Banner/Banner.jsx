import React, { useEffect, useState } from "react";
import axios from "../../utils/axios";
import requests from "../../utils/requests";
import style from "./Banner.module.css";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import InfoOutlineIcon from "@mui/icons-material/InfoOutline";

function Banner() {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const res = await axios.get(requests.fetchActionMovies);
        setMovie(
          res.data.results[Math.floor(Math.random() * res.data.results.length)]
        );
        console.log(res.data.results);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchMovie();
  }, []);
 const truncate = (str) =>  str?.length > 150 ? str.slice(0, 150) + "..." : str
  
  return (
    <>
      <div
        className={style.banner}
        style={{
          backgroundSize: "cover",
          backgroundImage: ` linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.0)),url('https://image.tmdb.org./t/p/original${movie?.backdrop_path}')`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className={style.bannerContents}>
          <h1 className={style.bannerTitle}>
            {movie?.title || movie?.name || movie?.original_name}
          </h1>
          <div className={style.buttons}>
            <button className={style.play}> <PlayArrowIcon/> Play</button>
            <button className={style.bannerButton}><InfoOutlineIcon/> My List</button>
          </div>
          <p className={style.description}>{truncate(movie?.overview)}</p>
        </div>
      </div>
    </>
  );
}

export default Banner;
