import { useParams, useNavigate } from "react-router-dom";
import React, { Fragment, useEffect, useState } from "react";
import ReactPlayer from "react-player";

import { moviesData } from "../App";
const Movie = () => {
  console.log(moviesData);
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();
  // const movie = moviesData.find((el) => el.id == id);
  console.log(id, movie);
  useEffect(() => {
    setMovie(moviesData.find((el) => el.id == id));
  }, []);
  const handleClick = () => navigate("/");
  return (
    <div className="container">
      {movie && (
        <Fragment>
          <h2 style={{ color: "purple" }}> About {movie.title}</h2>
          <h5 style={{ color: "purple" }}>Description:</h5>
          <p> {movie.description}</p>

          <ReactPlayer controls url={movie.trailer} />
          <button
            className="btn  btn-dark"
            style={{
              backgroundColor: "purple",

              left: 0,
              bottom: 10,
            }}
            onClick={handleClick}
          >
            Go back
          </button>
        </Fragment>
      )}
    </div>
  );
};

export default Movie;
