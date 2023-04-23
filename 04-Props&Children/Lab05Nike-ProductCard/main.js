// ทำ UI โดยใช้ function Component
// เลือกมา 3 Product
// Design : from Nike official

function Avatar(props) {
  let { src, hotTag, name, suitable, color, price } = props;
  return (
    <div className="avatar">
      <div className="avatar__image--container">
        <img src={src} className="avatar__image" />
      </div>
      {hotTag !== undefined ? <a>{hotTag}</a> : ""}
      <div>{name}</div>
      <p>{suitable}</p>
      <p>{color} สี</p>
      <div>{price} B.</div>
    </div>
  );
}

function App() {
  let link1 = "./air-max90.webp";
  let link2 = "./courtLegacy.webp";
  let link3 = "./airJordan1Low.webp";

  return (
    <div className="container">
      <Avatar
        name="Nike Air Max 90"
        hotTag="สินค้ามาใหม่"
        src={link1}
        suitable="รองเท้าผู้ชาย"
        color="2"
        price="5,200"
      />
      <Avatar
        name="Nike Court Legacy"
        hotTag="วัสดุที่เป็นมิตรต่อสิ่งแวดล้อม"
        src={link2}
        suitable="รองเท้าผู้ชาย"
        color="4"
        price="2,400"
      />
      <Avatar
        name="Air Jordan 1 Low"
        src={link3}
        suitable="รองเท้าผู้ชาย"
        color="3"
        price="4,300"
      />
    </div>
  );
}
// Render
const domRoot = document.getElementById("root"); //Select real DOM
const root = ReactDOM.createRoot(domRoot);
root.render(<App />); //what to display at root
