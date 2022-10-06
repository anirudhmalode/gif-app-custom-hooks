import React from "react";
import { useState } from "react";
import useGIF from "../useGIF";

const TagGif = () => {
  const [tag, setTag] = useState("dog");
  const [gif, fetchGif] = useGIF("");

  const handleChangeTag = (e) => (e ? setTag("cat") : setTag("dog"));

  return (
    <div className="container">
      <h1>Tagged Gif</h1>
      <div className="row">
        <div className="col-md-12">
          <img src={gif} alt="Tagged Gif" />
        </div>
        <div className="col-md-12">
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckChecked"
              onChange={(e) => handleChangeTag(e.target.checked)}
            />
            {tag.toUpperCase()}
          </div>
        </div>
        <div className="col-md-12">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => fetchGif(tag)}
          >
            NEW {tag} TAG GIF
          </button>
        </div>
      </div>
    </div>
  );
};

export default TagGif;
