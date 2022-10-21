import axios from "axios";
import React, { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import styles from "./CSS/Home.module.css";

function Home() {
  let [autoMin, setAutoMin] = useState(5);
  const navigate = useNavigate();
  let data;
  const location = useLocation();
  var userName = location.state.loginstate.name;
  let first = useRef();
  let [mess, setMess] = useState([{ time: "", message: "" }]);

  //  SubmitUser
  function SubmitUser(e) {
    e.preventDefault();
    data = first.current.value;
    if (data) {
      setMess([
        ...mess,
        { time: new Date().toLocaleString().slice(0, 24), message: data },
      ]);
    }
    first.current.value = "";
  }

  // LogoutUser
  function logoutUser() {
    if (!location.state.response) {
      axios.post("/message", { userName, mess });
      localStorage.removeItem("jwt Token");
      console.log("6454cdscds777&&&&&");

      navigate("/");
    } else {
      console.log("6454cdscds");
      navigate("/");
    }
  }
  useEffect(() => {
    setTimeout(() => {
      axios.post("/message", { userName, mess });
      localStorage.removeItem("jwt Token");
      navigate("/");
    }, 300000);
  }, []);

  useEffect(() => {
    setInterval(() => {
      setMin();
    }, 60000);
  });

  function setMin() {
    setAutoMin(--autoMin);
  }
  return (
    <>
      {!location.state.response ? (
        <>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div onClick={logoutUser} className={styles.logoutButton}>
              <h3>Logout</h3>
            </div>
            <div className={styles.sessionEnd}>
              SessionEnd in: {autoMin} Min
            </div>

            <h2 style={{ marginTop: "60px" }}> Welcome {userName}</h2>
            <form
              onSubmit={(e) => {
                SubmitUser(e);
              }}
              style={{
                marginTop: "25px",
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                border: "none",
              }}
            >
              <textarea
                id="w3review"
                rows="6"
                cols="50"
                ref={first}
                name="message"
              ></textarea>
              <button
                style={{
                  height: "40px",
                  width: "90px",
                  borderRadius: "10px",
                  marginTop: "15px",
                }}
              >
                Submit
              </button>
            </form>
          </div>

          <div style={{ marginTop: "25px" }}>
            <table style={{ margin: "70px 25px" }}>
              <thead>
                <tr>
                  <td>
                    <h2>Time</h2>
                  </td>
                  <td style={{ paddingLeft: "150px" }}>
                    <h2>Messsage</h2>
                  </td>
                </tr>
              </thead>

              <tbody>
                {mess.map((ele, ind) => {
                  return (
                    <tr key={ind}>
                      <td>
                        <div>{ele.time}</div>
                      </td>
                      <td style={{ paddingLeft: "150px" }}>
                        <div>{ele.message}</div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          {location.state.exists ? (
            <table style={{ margin: "0px 25px" }}>
              <tbody>
                {location.state.exists.message.map((ele, ind) => {
                  return ele.map((ele, ind) => {
                    if (!ind == 0) {
                      return (
                        <tr key={ind}>
                          <td style={{ paddingLeft: "0px" }}>
                            <h4>{ele.time}</h4>
                          </td>
                          <td style={{ paddingLeft: "150px" }}>
                            <h4>{ele.message}</h4>
                          </td>
                        </tr>
                      );
                    }
                  });
                })}
              </tbody>
            </table>
          ) : (
            ""
          )}
        </>
      ) : (
        <div>
          <div
            onClick={logoutUser}
            style={{
              width: "100%",
              height: "50px",
              backgroundColor: "rgb(40, 116, 240)",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              paddingRight: "105px",
            }}
          >
            <h3>Logout</h3>
          </div>
          <h2>Admin</h2>
          <div>
            <table style={{ margin: "30px 60px" }}>
              <thead>
                <tr style={{ border: "2 solid black" }}>
                  <td>
                    <h2>Name</h2>
                  </td>
                  <td style={{ paddingLeft: "40px" }}>
                    <h2>Email</h2>
                  </td>
                  <td style={{ paddingLeft: "40px" }}>
                    <h2>Phone</h2>
                  </td>
                  <td style={{ paddingLeft: "40px" }}>
                    <h2>Message</h2>
                  </td>
                </tr>
              </thead>

              <tbody>
                {location.state.response.map((ele, ind) => {
                  if (!ind == 0) {
                    return (
                      <tr>
                        <td>{ele.name}</td>
                        <td style={{ paddingLeft: "40px" }}>{ele.email}</td>
                        <td style={{ paddingLeft: "40px" }}>{ele.phone}</td>
                        <td
                          style={{ paddingLeft: "40px", paddingBottom: "30px" }}
                        >
                          {ele.message.map((ele, ind) => {
                            {
                              return ele.map((ele, ind) => {
                                return <div>{ele.message}</div>;
                              });
                            }
                          })}
                        </td>
                      </tr>
                    );
                  }

                  console.log(ele);
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
