import "./App.css";
import Home from "./Components/Home";
import { Routes, Route } from "react-router-dom";
import Menu from "./Components/Menu";
import Checkout from "./Components/Checkout";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/menu" element={<Menu></Menu>}></Route>
        <Route path="/checkout" element={<Checkout></Checkout>}></Route>
      </Routes>
    </div>
  );
}

export default App;
