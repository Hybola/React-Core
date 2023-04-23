// Lab 01
// จงสร้าง Button มีข้อความว่า “Click to hide me”
// เมื่อผู้ใช้ click button ให้ซ่อน button

function App() {
  const [isShow, setIsShow] = React.useState(true);
  const handleClickHide = () => {
    setIsShow(!isShow);
  };

  return (
    <div className="container">
      <div>
        {isShow && <button onClick={handleClickHide}>Click to hide me</button>}
      </div>
    </div>
  );
}
// Render
const domRoot = document.getElementById("root"); //Select real DOM
const root = ReactDOM.createRoot(domRoot);
root.render(<App />); //what to display at root
