// //UI
// // const header = React.createElemetn("h1", null, "Hi from React");
// const header = <h1>Hi from JSX</h1>;
// //render
// const domRoot = document.getElementById("root");
// const root = ReactDOM.createRoot(domRoot);
// root.render(header);
// const reactEl = <div>{5 * 10}</div>;
// const reactEl = <div>{`Total : ${200 + 50}`}</div>;
// const reactEl = <div>{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}</div>;
// const reactEl = <div>{add(20, 5)}</div>;

// const listOfHeader = [<h1>H-1</h1>, <h2>H-2</h2>, <h3>H-3</h3>];
// const reactEl = <div>{listOfHeader}</div>;

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const newArr = arr.map((num) => <li>{`item-${num}`}</li>);
// [<li>item-1</li>,<li>item-2</li>,,,,]
// const reactEl = <ul>{newArr}</ul>;
const reactEl = (
  <ul>
    {arr.map((num) => (
      <li>{`item-${num}`}</li>
    ))}
  </ul>
);

// Render
const domRoot = document.getElementById("root");
const root = ReactDOM.createRoot(domRoot);
root.render(reactEl);
