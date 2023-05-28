import "./App.css";
import image1 from "./assets/media/bookstore-img.jpg";
import products from "./product";

function App() {
  return (
    <>
      <div className="center">
        <h1>Bell, Book & Candle</h1>
        <p>Hope you enjoy!</p>
        <img className="img" src={image1} alt=""></img>
      </div>
      <div className="sideBySide">
        {products.map((prod) => {
          return (
            <div className="center1">
              <img src={prod.image} className="sqr margin" alt="" />
              <h3>{prod.name}</h3>
              <h4>{prod.price}</h4>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
