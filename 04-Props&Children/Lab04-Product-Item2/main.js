////=====================================================
////=========  Lab-4 : Product-Item   ===================
////=====================================================
// จาก Lab ที่แล้วให้ส่ง props เข้าไปได้ค่าเดียว ชื่อ product
// โดยที่ props ตัวนี้จะมี data type เป็น Object
// ให้ render ProductItem ในหน้า web
//////=====================================================

function ProductItem(props) {
  const { name, price, description } = props;
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
