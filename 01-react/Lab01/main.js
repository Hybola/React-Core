//React UI
let linkEl = React.createElement(
  "a",
  { className: "card_link", href: "https://google.com" },
  "More information..."
);
let text =
  "This domain is for use in illustrative examples in documents. You may use this domain in literature without prior coordination or asking for permission.";
const content = React.createElement("p", null, text);
const header = React.createElement(
  "h1",
  { className: "card_content" },
  "Example Domain"
);
const card = React.createElement(
  "div",
  { className: "card" },
  header,
  content,
  linkEl
);
//ReactDOM คอยทำหน้าที่ render
const domRoot = document.getElementById("root");
const root = ReactDOM.createRoot(domRoot);

root.render(card);
