import React from "react";

const VideoCard = ({ card }) => {
  const { snippet, statistics } = card;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="video-card">
      <img alt="thumbnail" src={thumbnails.medium.url}></img>
      <ul>
        <li style={{fontWeight: "bold", padding: '10px 10px 10px 0'}}>{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
