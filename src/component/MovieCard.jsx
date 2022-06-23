import React from "react";
import Rating from "./Rating";

const MovieCard = ({ movie: { title, description, posterURL, rating } }) => {
  console.log(title, description, posterURL, rating);
  return (
    <div className="  mb-3 " style={{ maxWidth: 540, paddingBottom: 50 }}>
      <div className="row g-0 ">
        <div className="col-md-4">
          <img
            src={posterURL}
            className="img-fluid rounded-start"
            alt="..."
            style={{ height: 400, objectFit: "cover" }}
          />
        </div>
        <div className="col-md-8 col-dark ">
          <div
            className="card-body "
            style={{
              backgroundColor: "purple",
              height: 400,
            }}
          >
            <h3 className="card-title" style={{ color: "white" }}>
              {title}{" "}
            </h3>
            <p className="card-text" style={{ color: "white" }}>
              {description}
            </p>
            {/* <p className="card-text "> */}
            <small className="text-muted">
              <Rating rating={rating} />
            </small>
            {/* </p> */}
            <div className="text-end flex">
              <a
                href="#"
                className="btn btn-dark "
                style={{ backgroundColor: " Indigo" }}
              >
                More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
