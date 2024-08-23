import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="hero">
      <div className="upperContainer">
        <div className="left">
          <span className="left-title">WE4.-</span>
          <span className="left-subTitle">MUSIC</span>
        </div>
        <div className="right">
          <span className="right-title">ABOUT US</span>
          <span className="right-item">MUSIC</span>
          <span className="right-item">PUBLISHER</span>
          <span className="right-item">LABEL</span>
          <span className="right-item">SESSIONS</span>
          <span className="right-item">CONTACT</span>
          <span className="right-item">NEWS</span>
        </div>
      </div>
      <div className="lowerContainer">
        <div className="left">
          <span>CREATIVE</span>
          <span>MUSIC</span>
          <span>PRODUCTION</span>
        </div>
        <div className="right">
          <div className="box1"></div>
          <div className="box2"></div>
        </div>
      </div>
    </div>
  </StrictMode>
);
