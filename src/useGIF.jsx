import { useState, useEffect } from "react";
import axios from "axios";

const url = `https://api.giphy.com/v1/gifs/random?api_key=szInMDHl8WSrGGDZjbNSbUNYX5DmC8Fq`;

const useGIF = (tag) => {
  const [gif, setGif] = useState("");

  const fetchGifs = async (tag) => {
    const { data } = await axios.get(tag ? `${url}&tag=${tag}` : url);
    const imgSrc = data.data.images.downsized_large.url;
    setGif(imgSrc);
  };

  useEffect(() => {
    fetchGifs(tag);
  }, [tag]);

  return [gif, fetchGifs];
};

export default useGIF;
