@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");

- {
  margin: 0;
  padding: 0;
  border: 0;
  box-sizing: border-box;
  }

.hero {
font-family: "Roboto", sans-serif;
min-height: 100vh;
max-width: 100vw;
overflow-x: hidden;
display: flex;
flex-direction: column;
color: pink;
background-color: black;
padding: 2rem;
gap: 2rem;
.upperContainer {
flex: 1;
display: flex;
.left {
flex: 1;
display: flex;
flex-direction: column;
.left-title {
font-weight: 900;
font-size: xxx-large;
}
.left-subTitle {
font-weight: 100;
font-size: x-large;
}
}
.right {
flex: 1;
display: flex;
flex-direction: column;
text-align: right;
.right-title {
font-weight: 900;
font-size: xxx-large;
}
.right-item {
font-weight: 400;
font-size: x-large;
}
}
}
.lowerContainer {
display: flex;
flex: 2;
.left {
display: flex;
flex-direction: column;
justify-content: flex-end;
font-weight: 900;
font-size: 8rem;
flex: 2;
}
.right {
flex: 1;
display: flex;
gap: 2rem;
.box1 {
flex: 1;
background-color: pink;
}
.box2 {
flex: 1;
background-color: violet;
}
}
}
}

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
