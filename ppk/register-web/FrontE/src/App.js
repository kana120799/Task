import logo from "./logo.svg";
import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import Home from "./Components/Home";
import { useEffect } from "react";
import { useLayoutEffect } from "react";
import { useState } from "react";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          exact
          path="/"
          element={<Navigate to="/login"></Navigate>}
        ></Route>
        <Route exact path="/login" element={<Login></Login>}></Route>
        <Route exact path="/home" element={<Home></Home>}></Route>
      </Routes>
    </div>
  );
}

export default App;
