import React, { useEffect, useState } from "react";
import { VIDEO_LIST_API } from "../../constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideoList();
  }, []);

  async function getVideoList() {
    const data = await fetch(VIDEO_LIST_API);
    const json = await data.json();
    setVideos(json.items);
  }

  return (
    <div className="video-container">
      {videos.map(video => (
        <Link to={"/watch?v=" + video.id} className="remove-anchor">
          <VideoCard id={video.id} card={video}/>
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
