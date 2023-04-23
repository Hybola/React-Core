//===========================================//
//========  Lab-2 : Technical Docs   ========//
//===========================================//
// ทำ UI ดังรูปโดยใช้ React.createElement
// Ref : https://react.dev/learn
// Pallette
// dark-gray : #23272F
// gray #343A46
// blue #149ECA
////==============================================
const learn = React.createElement(
  "a",
  null,
  "LEARN REACT  ",
  React.createElement("span", null, ">")
);
const quickStart = React.createElement("h1", null, "Quick Start");
const welcome = React.createElement(
  "p",
  null,
  "Welcome to the React documentation! This page will give you an introduction to the 80% of React concepts that you will use on a daily basis."
);

const youWillLearn = React.createElement("h3", null, "You will learn");
const bullets = React.createElement(
  "ul",
  null,
  React.createElement("li", null, "How to create and nest components"),
  React.createElement("li", null, "How to add markup and styles"),
  React.createElement("li", null, "How to display data"),
  React.createElement("li", null, "How to render conditions and lists"),
  React.createElement(
    "li",
    null,
    "How to respond to events and update the screen"
  ),
  React.createElement("li", null, "How to share data between components")
);
const box = React.createElement(
  "div",
  { className: "grayBox" },
  youWillLearn,
  bullets
);
const card = React.createElement(
  "div",
  { className: "card" },
  learn,
  quickStart,
  welcome,
  box
);

// Render
const domRoot = document.getElementById("root"); //Select real DOM
const root = ReactDOM.createRoot(domRoot);
root.render(card); //what to display at root
