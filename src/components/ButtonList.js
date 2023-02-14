import React from "react";

const ButtonList = () => {
  const list = [
    "All",
    "Mixes",
    "Music",
    "News",
    "Podcasts",
    "History",
    "T-series",
    "Restaurants",
    "Game Shows",
    'Scene',
    'Live',
    'Bollywood Music',
    'AI',
    'Debates',
    'Recently Updated',
    'Watched',
    'Indian Music',
    // 'Pop Music',
    // 'Speed Records'
  ];
  return <div className="button-list">{list.map((el, index) => <button>{el}</button>)}</div>;
};

export default ButtonList;
