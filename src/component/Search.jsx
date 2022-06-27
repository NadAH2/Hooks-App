import React, { useState } from "react";
import Rating from "./Rating";

const Search = ({ setSearch, ratingSearch, setRatingSearch }) => {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
    setSearch(e.target.value);
  };

  return (
    <div className="container" style={{ paddingBottom: 100, paddingTop: 50 }}>
      <div className="row justify-content-evenly">
        <div className="col-4">
          <input
            type="text"
            value={text}
            onChange={handleChange}
            placeholder="Search movies"
            style={{
              outline: 0,
              border: "1px solid light gray",
              color: "grey",
            }}
          />
        </div>
        <div className="col-4">
          <Rating rating={ratingSearch} setRatingSearch={setRatingSearch} />
        </div>
      </div>
    </div>
  );
};

export default Search;
