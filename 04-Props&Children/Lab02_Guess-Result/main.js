// Lab02 Guess Result

function Car(props) {
  console.log(props.brand); // * Honda
  console.log(props.price); // ** 1000000
  console.log(props.color); // *** undefined
  return <div>Car</div>;
}
ReactDOM.render(
  //เขียนแบบเวอร์ชั่นเก่า จึงขึ้นแดง
  <Car brand="Honda" price="1000000" />,
  document.getElementById("root")
);
