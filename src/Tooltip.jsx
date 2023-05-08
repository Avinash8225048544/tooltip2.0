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
      tooltipStyle.top = "155px";
      tooltipStyle.left = "53%";
      tooltipStyle.transform = "translateX(-50%)";
      break;
    case "bottom":
      tooltipStyle.top = "225px";
      tooltipStyle.left = "54%";
      tooltipStyle.transform = "translateX(-50%)";
      break;
    case "left":
      tooltipStyle.top = "54%";
      tooltipStyle.right = "260px";
      tooltipStyle.transform = "translateY(-50%)";
      break;
    case "right":
      tooltipStyle.top = "54%";
      tooltipStyle.left = "290px";
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
