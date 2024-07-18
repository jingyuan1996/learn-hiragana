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
          <button onClick={minusClick}>back</button>
          <button onClick={nextClick}>next</button>
        </>
      );
    } else if (count >= 45) {
      //console.log(">13");
      return (
        <>
          <button onClick={minusClick}>back</button>
        </>
      );
    } else {
      return (
        <>
          <button onClick={nextClick}>next</button>
        </>
      );
    }
  }

  return (
    <>
      <div className="test">
        <center>
          <h1>{worlddata.jp_word}</h1>
          <h2>{worlddata.pinyin}</h2>
          <h2>{count}</h2>
          <Navgatorbutton />
        </center>
      </div>
    </>
  );
}

export default App;
