import React from "react";
import useGIF from "../useGIF";

const RandomGif = () => {
  const [gif, fetchGif] = useGIF("");

  return (
    <div className="container">
      <h1>Random Gif</h1>
      <div className="row">
        <div className="col-md-12">
          <img src={gif} alt="Random Gif" />
        </div>
        <div className="col-md-12">
          <button type="button" className="btn btn-primary" onClick={fetchGif}>
            NEW GIF
          </button>
        </div>
      </div>
    </div>
  );
};

export default RandomGif;
