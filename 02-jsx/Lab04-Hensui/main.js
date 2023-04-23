// Mini-workshop : Hensui-Landing Page

// ทำ UI-Landing Pageโดยใช้ JSX
// Design : from figma community
// Font : urbanist
// Primary :  #29005F

const App = (
  <div className="main">
    <div className="main__left">
      <img src="./banner.png" className="main__left--img" />
    </div>
    <div className="main__right">
      <div className="main__right--content">
        <h4>Discover authentic Japanese cuisine in LA. Opening Soon!</h4>
        <p>
          Welcome to Hensui, the newest addition to the vibrant Los Angeles
          dining scene! Our restaurant is dedicated to bringing you the most
          authentic and delicious Japanese cuisine.
        </p>
        <p>
          Stay tuned for our grand opening date, sign up with your e-mail
          address to get notified.
        </p>
      </div>

      <form>
        <input placeHolder="e-mail" />
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  </div>
);
// Render
const domRoot = document.getElementById("root");
const root = ReactDOM.createRoot(domRoot);
root.render(App);
