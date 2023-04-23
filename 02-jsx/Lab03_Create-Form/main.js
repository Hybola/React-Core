// Lab-3 : Create Form
// ให้สร้าง tag <label> และ <input>
// tag <input> มี class ชื่อ username มี id คือ username และมี attribute ชื่อ name ให้มีค่าเท่ากับ username
// tag <label> ให้ใส่ข้อความ Username และมี attribute ชื่อ for ให้มีค่าเท่ากับ id ของ tag <input>
// ให้ render หน้า web เพื่อแสดง tag ทั้งสองในแบบ JSX

const App = (
  <div className="container">
    <label htmlFor="user-name"> username</label>
    <input className="username" id="user-name" name="user-name" />
  </div>
);

// Render
const domRoot = document.getElementById("root"); //Select real DOM
const root = ReactDOM.createRoot(domRoot);
root.render(App); //what to display at root
