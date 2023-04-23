// Lab 03-Click to change button
// /จงสร้าง Button มีข้อความว่า “Click to hide text”
// เมื่อผู้ใช้ click button ให้ซ่อน Text

function App() {
  const [isShow, setIsShow] = React.useState(true);
  const handleClickHide = () => {
    setIsShow(!isShow);
  };

  return (
    <div className="container">
      <div>
        <button onClick={handleClickHide}>{isShow ? "hide" : "show"}</button>
        {isShow && <h1>Text</h1>}
      </div>
    </div>
  );
}
// Render
const domRoot = document.getElementById("root"); //Select real DOM
const root = ReactDOM.createRoot(domRoot);
root.render(<App />); //what to display at root
