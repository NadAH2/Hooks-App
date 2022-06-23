import React, { useState } from "react";

const AddMovie = ({ addNewMovie }) => {
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [posterURL, setPosterURL] = useState("");
  const [rating, setRating] = useState("");

  const handleClick = (event) => {
    event.preventDefault();
    const newMovie = {
      id: +id,
      title,
      description,
      posterURL,
      rating: +rating,
    };
    addNewMovie(newMovie);
    setId("");
    setTitle("");
    setPosterURL("");
    setDescription("");
    setRating("");
    console.log(newMovie);
  };

  return (
    <div>
      <button
        type="button"
        className="btn btn-dark"
        style={{ backgroundColor: "purple" }}
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Add Movie
      </button>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="myModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header text-center">
              <h4 className="modal-title w-100 font-weight-bold">
                Add New Movie
              </h4>
              <button
                type="button"
                className="close"
                aria-label="Close"
                data-bs-dismiss="modal"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body mx-3">
              <div className="md-form mb-5">
                <i className="fas fa-user prefix grey-text"></i>
                <input
                  className="form-control validate"
                  type="number"
                  name="id"
                  value={id}
                  required
                  onChange={(event) => setId(event.target.value)}
                />
                <label data-error="wrong">id </label>
              </div>
              <div className="md-form mb-5">
                <i className="fas fa-user prefix grey-text"></i>
                <input
                  type="text"
                  className="form-control validate"
                  name="title"
                  value={title}
                  required
                  onChange={(event) => setTitle(event.target.value)}
                />
                <label data-error="wrong">title </label>
              </div>

              <div className="md-form mb-5">
                <i className="fas fa-envelope prefix grey-text"></i>
                <input
                  className="form-control validate"
                  type="url"
                  name="posterUrl"
                  value={posterURL}
                  required
                  onChange={(event) => setPosterURL(event.target.value)}
                />
                <label data-error="wrong" data-success="left">
                  posterURL
                </label>
              </div>

              <div className="md-form mb-5">
                <i className="fas fa-tag prefix grey-text"></i>
                <textarea
                  rows={3}
                  className="form-control"
                  aria-label="With textarea"
                  type="text"
                  name="description"
                  value={description}
                  required
                  onChange={(event) => setDescription(event.target.value)}
                ></textarea>
                <label data-error="wrong" data-success="left">
                  description
                </label>
              </div>
              <div className="md-form mb-5">
                <i className="fas fa-user prefix grey-text"></i>
                <input
                  className="form-control validate"
                  type="number"
                  name="rating"
                  value={rating}
                  required
                  onChange={(event) => setRating(event.target.value)}
                />
                <label data-error="wrong">rating </label>
              </div>
            </div>
            <div className="modal-footer d-flex col-auto ">
              <button
                type="submit"
                className="btn btn-dark "
                style={{ backgroundColor: " Indigo" }}
                onClick={handleClick}
                aria-label="Close"
                data-bs-dismiss="modal"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddMovie;
