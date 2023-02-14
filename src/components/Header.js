import React, { useEffect, useState } from "react";
import Logo from "../assets/Hamburger_icon.svg.png";
import YoutubeIcon from "../assets/youtube_icon.jpeg";
import Profile from "../assets/profile.png";
import { YOUTUBE_SEARCH_API } from "../../constants";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestion, setSuggestion] = useState([]);

  useEffect(() => {
    let timer = setTimeout(() => {
      searchSuggestion();
    }, 300);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  async function searchSuggestion() {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestion(json[1]);
  }

  return (
    <div className="header">
      <div>
        <img src={Logo} className="logo" />
        <img src={YoutubeIcon} className="icon" />
      </div>
      <div className="search-container">
        <div className="search">
          <input
            placeholder="Search"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
          />
        </div>
        <button className="search-btn">Search</button>
        {suggestion.length > 0 && (
          <ul className="search-list">
            {suggestion.map((el, index) => (
              <li key={index}>{el}</li>
            ))}
          </ul>
        )}
      </div>
      <div>
        <img src={Profile} className="logo" />
      </div>
    </div>
  );
};

export default Header;
