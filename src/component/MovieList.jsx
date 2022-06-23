import React from "react";
import MovieCard from "./MovieCard";

export const MovieList = (props) => {
  return (
    <div className="container">
      <div className="row">
        {props.moviesList.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
};
export default MovieList;
