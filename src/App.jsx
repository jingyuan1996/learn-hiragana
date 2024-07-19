import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./css/App.css";
import { wordlist } from "./data/jpword.js";

function App() {
  const [count, setCount] = useState(0);
  let worlddata = wordlist[count];

  function nextClick() {
    setCount(count + 1);
    //console.log("test");
  }

  function minusClick() {
    setCount(count - 1);
    //console.log("test");
  }

  function Navgatorbutton() {
    if (count > 0 && count < 45) {
      //console.log(">0");
      return (
        <>
          <div>
            <button className="btn-light btn ms-1" onClick={minusClick}>
              back
            </button>
            <button className="btn-light btn ms-1" onClick={nextClick}>
              next
            </button>
          </div>
        </>
      );
    } else if (count >= 45) {
      //console.log(">13");
      return (
        <>
          <div>
            <button className="btn-light btn ms-1" onClick={minusClick}>
              back
            </button>
            <button className="btn-light btn ms-1" onClick={nextClick} disabled>
              next
            </button>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div>
            <button
              className="btn-light btn ms-1"
              onClick={minusClick}
              disabled
            >
              back
            </button>

            <button className="btn-light btn ms-1" onClick={nextClick}>
              next
            </button>
          </div>
        </>
      );
    }
  }

  return (
    <>
      <div className="card test position-absolute top-50 start-50 translate-middle text-center text-white bg-dark">
        <div className="card-body">
          <h1>{worlddata.jp_word}</h1>
          <h2>{worlddata.pinyin}</h2>
          <Navgatorbutton />
        </div>
      </div>
    </>
  );
}

export default App;
