import React from "react";
import { useDispatch } from "react-redux";
import { getMovieId } from "../../redux/actions/movieAction";

import play from "../../assets/images/play.svg";

import "./movie.css";

const Movie = (props) => {
  const dispatch = useDispatch();

  return (
    <div className="movie" onClick={() => dispatch(getMovieId(props.id))}>
      <div className="movie__bg">
        <img src={props.image} />
      </div>
      <div className="movie__footer">
        <div className="movie__footer-action">
          <img src={play} />
        </div>
        <div>
          <h3 className="movie__footer-title">{props.title}</h3>
          <p className="movie__footer-release-date">{props.releaseDate}</p>
        </div>
        <div className="movie__footer-duration">{props.duration}</div>
      </div>
    </div>
  );
};

export default Movie;
