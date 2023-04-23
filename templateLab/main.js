//================================//
//==== Lab-1 :  ====//
//================================//
function App() {
  return <div className="container">Lab</div>;
}
// Render
const domRoot = document.getElementById("root"); //Select real DOM
const root = ReactDOM.createRoot(domRoot);
root.render(<App />); //what to display at root
