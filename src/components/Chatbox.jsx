import React from "react";
import "./Chatbox.css";

export default function Chatbox({ 
  children, 
  variant = "default",
  showTriangle = true,
  minHeight = "688px"
}) {
  return (
    <div className={`text-background-container ${variant === "message" ? "message-variant" : ""}`}>
      <div className="text-background-box" style={{ '--min-height': minHeight }}>
        {showTriangle && (
          <div className="text-background-triangle"></div>
        )}
        <div className="text-background-content">
          {children}
        </div>
      </div>
    </div>
  );
}