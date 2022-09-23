import About from "./About";
import Image from "./Image";
import "./App.css";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import Resume from "./Resume";

function App() {
  return (
    <>
      <div id="cntner">
        <div id="left">
          <Image />
        </div>
        <div id="right">
          <About />
        </div>
      </div>
    </>
  );
}

export default App;
