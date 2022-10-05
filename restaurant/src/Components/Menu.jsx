import React, { createContext, useEffect, useReducer } from "react";
import Products from "../data/feeds.json";
import { reduce } from "./reduce.js";
import Navbar from "./Navbar";
import styles from "./CSS/Menu.module.css";
export const updateCart = createContext("");
function Menu() {
  var initialState = {
    item: Products,
    totalAmount: 0,
    totalItem: 0,
  };

  let [state, dispatch] = useReducer(reduce, initialState);
  function increment(id) {
    return dispatch({
      type: "INC",
      payload: id,
    });
  }

  function decrement(id) {
    return dispatch({
      type: "DEC",
      payload: id,
    });
  }

  useEffect(() => {
    dispatch({
      type: "UPDATE",
    });
    dispatch({
      type: "UPDATEAMOUNT",
    });
  }, [state.item]);

  return (
    <>
      <updateCart.Provider value={{ ...state, dispatch }}>
        <Navbar></Navbar>
      </updateCart.Provider>

      <div className={styles.menu}>
        {state.item.map((ele, ind) => {
          return (
            <div key={ind} className={styles.cart}>
              <figure>
                <img
                  src={ele.image}
                  style={{
                    width: "300px",
                    height: "150px",
                    borderRadius: "5px 5px 0 0",
                  }}
                  alt="menu"
                ></img>
              </figure>
              <div style={{ paddingLeft: "15px", lineHeight: "25px" }}>
                <h2 style={{ margin: "15px 15px 15px 0px" }}>{ele.name}</h2>
                <p>Price: {ele.price}</p>

                {ele.total ? <p>Total: {ele.total} </p> : ""}
                {ele.cost ? <p>Cost: {ele.cost} </p> : ""}
              </div>
              <div className={styles.incdec}>
                <button
                  onClick={() => increment(ind)}
                  value={ind}
                  style={{
                    borderRadius: "5px",
                    width: "65px",
                    height: "40px",
                    display: "inline-block",
                    boxShadow: "0px 1.5px 2px 1px rgba(0, 0, 0, 0.3)",
                    backgroundColor: "#303F9F",
                  }}
                >
                  +
                </button>
                <button
                  onClick={() => decrement(ind)}
                  value={ind}
                  style={{
                    borderRadius: "5px",
                    width: "65px",
                    height: "40px",
                    display: "inline-block",
                    marginLeft: "10px",
                    boxShadow: "0px 1.5px 2px 1px rgba(0, 0, 0, 0.3)",
                    backgroundColor: "#F50057",
                  }}
                >
                  -
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Menu;
