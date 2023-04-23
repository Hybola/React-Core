function App() {
  const handleClick = (event) => {
    console.log("click");
  };

  return (
    <div className="container">
      <h1>Event Handling</h1>
      <button
        onClick={() => {
          console.log("click");
        }}>
        Click me
      </button>
    </div>
  );
}
// Render
const domRoot = document.getElementById("root"); //Select real DOM
const root = ReactDOM.createRoot(domRoot);
root.render(<App />); //what to display at root
