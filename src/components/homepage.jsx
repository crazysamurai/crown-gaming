import React from "react";
import "./homepage.scss";
const Homepage = () => {
  return (
    <div className="homepage">
      <div className="directory-menu">
        <div className="menu-item">
          <div className="content">
            <h1 className="title">New and Trending</h1>
            <span className="subtitle">Show More</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">Popular</h1>
            <span className="subtitle">Show More</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">Top Sellers</h1>
            <span className="subtitle">Show More</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">Upcoming</h1>
            <span className="subtitle">Show More</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">Free to Play</h1>
            <span className="subtitle">Show More</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
