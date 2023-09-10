import React from "react";
import "../css/Rectangle.css";

const OverlayRectangle = ({ leftMargin }) => {
  const rectangleStyle = {
    left: leftMargin || 0,
  };
  return <div className="overlay-rectangle" style={rectangleStyle}></div>;
};

export default OverlayRectangle;