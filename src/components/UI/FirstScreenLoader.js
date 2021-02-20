import React from "react";
import { assets_images } from "../../config/constants";
import "../../assets/css/FirstScreenLoader.css";

const FirstScreenLoader = () => {
  const bgStyle = {
    backgroundImage: `url(${assets_images.BREWING_LOADER_HOME_IMG})`,
  };
  return <div className="first-screen" style={bgStyle}>
    <div id="dots3">
          <span></span>
          <span></span>
          <span></span>
      </div>
  </div>;
};

export default FirstScreenLoader;
