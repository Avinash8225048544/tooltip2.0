import React, { useState } from "react";
import "./styles.css";

function Tooltip({ text, position, children }) {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  const tooltipStyle = {
    position: "absolute",
    backgroundColor: "#333",
    color: "#fff",
    padding: "8px",
    borderRadius: "4px",
    zIndex: "1"
  };

  switch (position) {
    case "top":
      tooltipStyle.top = "210px";
      tooltipStyle.left = "51%";
      tooltipStyle.transform = "translateX(-50%)";
      break;
    case "bottom":
      tooltipStyle.top = "285px";
      tooltipStyle.left = "51.5%";
      tooltipStyle.transform = "translateX(-50%)";
      break;
    case "left":
      tooltipStyle.top = "53%";
      tooltipStyle.right = "420px";
      tooltipStyle.transform = "translateY(-50%)";
      break;
    case "right":
      tooltipStyle.top = "53%";
      tooltipStyle.left = "450px";
      tooltipStyle.transform = "translateY(-50%)";
      break;
    default:
      break;
  }

  return (
    <div
      className="tooltip-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {showTooltip && (
        <div className="tooltip" style={tooltipStyle}>
          {text}
        </div>
      )}
    </div>
  );
}

export default Tooltip;
