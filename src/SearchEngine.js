import React from "react";

export default function Search() {
  return (
    <form id="form-input">
      <br />
      <div className="container">
        <div className="row">
          <div className="col-8 input-text">
            <input
              type="text"
              className="form-control"
              id="input-text"
              placeholder="Enter a city here"
            />
          </div>
          <div className="col-4">
            <input
              type="submit"
              id="submit-button"
              value="Search"
              className="btn btn-primary mb-3"
            />
          </div>
        </div>
      </div>
    </form>
  );
}
