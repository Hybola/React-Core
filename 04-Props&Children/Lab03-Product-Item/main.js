// Lab-3 : Product-Item

// ให้สร้าง Component ชื่อ ProductItem
// ใน Component แสดงข้อมูลดังนี้
// tag <h1> แสดงชื่อ product
// tag <h2> แสดง price ของ product
// tag <p> แสดง description ของ product
// ชื่อ price และ description ของ product ถูกส่งมาทาง props
// - ให้ render ProductItem ในหน้า web โดยให้ส่งค่า props ทั้งสามเป็นค่าอะไรก็ได้

function ProductItem({ name, price, description }) {
  const nameStyle = {
    color: "lime",
    fontSize: "30px",
  };
  const priceStyle = {
    color: "green",
  };
  return (
    <>
      <h1>Product Name: {name}</h1>
      <h2 style={priceStyle}>Price: {price}</h2>
      <p>Description: {description}</p>
    </>
  );
}

function App() {
  return (
    <div className="container">
      <ProductItem
        name="iPhone13 Pro"
        price="35,500"
        description="This product was released in 2021"
      />
    </div>
  );
}
// Render
const domRoot = document.getElementById("root"); //Select real DOM
const root = ReactDOM.createRoot(domRoot);
root.render(<App />); //what to display at root
