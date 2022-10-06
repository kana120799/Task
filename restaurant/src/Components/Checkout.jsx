import React, { useContext, useEffect, useReducer, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import styles from "./CSS/Checkout.module.css";

function Checkout() {
  let location = useLocation();
  let [pop, setPop] = useState(false);
  let [totalSummay, setTotalSummay] = useState(location.state.data3);
  function change() {
    setPop(!pop);
    location.state.data3 = 0;
  }
  /////////////                                   Summary Cart addition reducer function            ////////////////////////////////////////
  const reduce = (state, action) => {
    //Increment
    if (action.type === "INC") {
      var increment = state.map((ele, ind) => {
        if (ele.name === action.payload) {
          ele.total = ele.total + 1;
        }
        return ele;
      });
      state = increment;
      return state;
    }

    //Decrement
    if (action.type === "DEC") {
      var decrement = state.map((ele, ind) => {
        if (ele.name === action.payload) {
          ele.total = ele.total - 1;
        }
        return ele;
      });
      state = decrement;
      return state;
    }

    //Total
    if (action.type === "AMOUNT") {
      var decrement = 0;
      for (var i = 0; i < state.length; i++) {
        if (state[i].total > 0) {
          decrement += state[i].total * state[i].price;
        }
      }
      setTotalSummay(decrement);
      return state;
    }

    return state;
  };
  // UseREducer()
  let [state, dispatch] = useReducer(reduce, location.state.data1);

  return (
    <>
      {pop ? (
        <>
          <Navbar></Navbar>
          <div className={styles.flexcheckout}>
            <div className={styles.checkout}>
              <h1 style={{ textAlign: "center" }}>Checkout</h1>
              <h4 style={{ margin: "15px 0px 0px 15px" }}>
                Thank you for your order.{" "}
                <Link to="/" style={{ textDecoration: "none" }}>
                  Go back to Home
                </Link>
              </h4>
            </div>
          </div>
        </>
      ) : (
        <>
          <Navbar></Navbar>
          <div className={styles.flexSummary}>
            <div className={styles.subSummary}>
              <h1>Order Summary</h1>
              {state
                .filter((ele, ind) => {
                  if (ele.total > 0) {
                    return ele;
                  }
                })
                .map((ele, ind) => {
                  return (
                    <div
                      key={ind}
                      style={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <div
                        style={{
                          position: "relative",
                          display: "grid",
                          gridTemplateColumns: "0.4fr 1fr 1.2fr 0.8fr",
                          width: "600px",
                          height: "37px",
                          placeItems: "center",
                        }}
                      >
                        <p style={{ gridColumn: "1/2" }}>{ele.name}</p>
                        <p style={{ gridColumn: "3/4" }}>{ele.total}</p>
                        <div style={{ gridColumn: "4/5", display: "flex" }}>
                          <button
                            className={styles.button1}
                            onClick={() => {
                              dispatch({
                                type: "INC",
                                payload: ele.name,
                              });
                              dispatch({ type: "AMOUNT" });
                            }}
                          >
                            +
                          </button>

                          <button
                            className={styles.button2}
                            onClick={() => {
                              dispatch({
                                type: "DEC",
                                payload: ele.name,
                              });
                              dispatch({ type: "AMOUNT" });
                            }}
                          >
                            -
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              <p style={{ marginTop: "15px" }}>Total (INR): {totalSummay}</p>
              <div
                style={{
                  position: "absolute",
                  bottom: "10px",
                  right: "25px",
                  width: "270px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <button className={styles.butt} onClick={change}>
                  <h4>SAVE AND CHECKOUT</h4>
                </button>
                <Link to="/home" style={{ textDecoration: "none" }}>
                  <h4>CANCEL</h4>
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Checkout;
