import "./App.css";
import Home from "./Components/Home";
import { Routes, Route } from "react-router-dom";
import Menu from "./Components/Menu";
import Checkout from "./Components/Checkout";
import LoginSign from "./Components/LoginSign";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginSign></LoginSign>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/menu" element={<Menu></Menu>}></Route>
        <Route path="/checkout" element={<Checkout></Checkout>}></Route>
      </Routes>
    </div>
  );
}

export default App;
