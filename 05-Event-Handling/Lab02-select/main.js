// Event Handling
// Lab02
// จงสร้าง tag <input>
// เมื่อผู้ใช้พิมพ์ค่าลงใน <input> ให้ console.log(ค่าที่ผู้ใช้พิมพ์)
// จงสร้าง tag <select> ซึ่งมีข้อมูลชื่อประเทศในรายการให้เลือก (ให้ลองใส่มา 5 ประเทศ)
// เมื่อผู้ใช้เลือกประเทศ ให้ console.log ค่าประเทศที่ถูกเลือก

function App() {
  const handleChange = (event) => {
    console.log(event.target.value);
  };
  return (
    <div className="container">
      <h1>Lab 02: Select a country</h1>
      <select onChange={handleChange}>
        <option value="Thailand">Thailand</option>
        <option value="USA">USA</option>
        <option value="China">China</option>
        <option value="Janpan">Japan</option>
        <option value="Russia">Russia</option>
      </select>
    </div>
  );
}
// Render
const domRoot = document.getElementById("root"); //Select real DOM
const root = ReactDOM.createRoot(domRoot);
root.render(<App />); //what to display at root
