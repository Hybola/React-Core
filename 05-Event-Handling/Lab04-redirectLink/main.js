// Event Handling
// Lab04: Redirect Link
// จงสร้างลิงค์ <a> มีข้อความว่า “Google”
// เมื่อผู้ใช้ click link ให้ขึ้นคำถามว่า “Leave for https://google.com?”
// ถ้าผู้ใช้กด OK ให้ redirect ไปที่ https://google.com
// ถ้าผู้ใช้กด Cancel ให้ยกเลิก redirect ไปที่ https://google.com

function App() {
  const handleClick = (evt) => {
    // console.log("google is click");
  };
  return (
    <div className="container">
      <h1>Lab04: Redicect Link</h1>
      <a onClick={handleClick} className="hyperLink">
        Google
      </a>
    </div>
  );
}
// Render
const domRoot = document.getElementById("root"); //Select real DOM
const root = ReactDOM.createRoot(domRoot);
root.render(<App />); //what to display at root
