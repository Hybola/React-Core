// Event Handling
// Lab01
// จงสร้าง tag <input>
// เมื่อผู้ใช้พิมพ์ค่าลงใน <input> ให้ console.log(ค่าที่ผู้ใช้พิมพ์)

function App() {
  const handleChange = (event) => {
    console.log(event.target.value);
  };
  return (
    <div className="container">
      <h1>Lab 01</h1>
      <input onChange={handleChange} />
    </div>
  );
}
// Render
const domRoot = document.getElementById("root"); //Select real DOM
const root = ReactDOM.createRoot(domRoot);
root.render(<App />); //what to display at root
