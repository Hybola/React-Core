// Event Handling
// Lab03: Check Box
// จงสร้าง checkbox ขึ้นมา 3 อัน ให้แต่ละอันมี name คือ phoneBrand
// เมื่อผู้ใช้ tick หรือ untick checkbox ให้ console.log
// ค่า name ของ checkbox
// ค่า value ของ checkbox
// checkbox นั้นถูก tick หรือ untick

function App() {
  const handleCheck = (event) => {
    console.log(
      `${event.target.value} is ${event.target.value ? "tick" : "untick"}`
    );
  };
  return (
    <div className="container">
      <h1>Lab03: Check Box</h1>
      <div className="container_brands">
        <div>
          <input
            type="checkbox"
            id="truemove"
            value="truemove"
            onClick={handleCheck}
          />
          <label htmlFor="truemove">Truemove</label>
        </div>
        <div>
          <input type="checkbox" id="ais" value="ais" onClick={handleCheck} />
          <label htmlFor="ais">AIS</label>
        </div>
        <div>
          <input type="checkbox" id="dtac" value="dtac" onClick={handleCheck} />
          <label htmlFor="dtac">DTAC</label>
        </div>
      </div>
    </div>
  );
}
// Render
const domRoot = document.getElementById("root"); //Select real DOM
const root = ReactDOM.createRoot(domRoot);
root.render(<App />); //what to display at root
