import React from "react";
import Rating from "./Rating";

import { Link } from "react-router-dom";

const MovieCard = ({
  movie: { id, title, description, posterURL, rating },
}) => {
  console.log(title, description, posterURL, rating);
  return (
    <div style={{ maxWidth: 300, paddingBottom: 50 }}>
      <div className="card">
        <img
          src={posterURL}
          className="card-img-top"
          alt="..."
          style={{ height: 400, objectFit: "cover" }}
        />

        <div
          className="card-body "
          style={{
            backgroundColor: "purple",
          }}
        >
          <h4 className="card-title" style={{ color: "white" }}>
            {title}{" "}
          </h4>

          {/* <p className="card-text "> */}
          <small className="text-muted">
            <Rating rating={rating} />
          </small>
          <div className="text-end  mt-auto">
            <Link to={`/Movie/${id}`}>
              <button
                className="btn  btn-dark"
                style={{
                  backgroundColor: "indigo",
                }}
              >
                For More{" "}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
