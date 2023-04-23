// Lab-1 : Profile

// ให้สร้าง Component ชื่อ Profile
// ใน Component ประกอบด้วย
// tag <h1> แสดงชื่อ John Doe
// tag <h2> แสดงอายุมีค่าเท่ากับ 27
// - ให้ render Profile ในหน้า web

function Profile(props) {
  const { name, age } = props;
  return (
    <>
      <h1>FullName: {name}</h1>
      <h2>Age: {age}</h2>
    </>
  );
}

function App() {
  return (
    <div className="container">
      <Profile name="John Doe" age={27} />
      <Profile name="Mark Ruffalo" age="36" />
    </div>
  );
}
// Render
const domRoot = document.getElementById("root"); //Select real DOM
const root = ReactDOM.createRoot(domRoot);
root.render(<App />); //what to display at root
