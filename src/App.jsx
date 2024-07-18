import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./css/App.css";
import { wordlist } from "./data/jpword.js";

function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <>
      <div className="test">
        <center>
          <h1>あ</h1>
          <h2>a</h2>
          <h2>{count}</h2>
          <button className="btn btn-primary" onClick={handleClick}>
            test
          </button>
        </center>
      </div>
    </>
  );
}

export default App;
