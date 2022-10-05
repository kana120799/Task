import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginSign from "./LoginSign";
import { updateCart } from "./Menu";
import styles from "./CSS/Navbar.module.css";
import { MdRestaurant } from "react-icons/md";
function Navbar() {
  const { item, totalItem, totalAmount } = useContext(updateCart);
  var data = {
    data1: item,
    data2: totalItem,
    data3: totalAmount,
  };
  const navigate = useNavigate();
  let [pop, setPop] = useState(false);

  function checkout() {
    setPop(true);
  }
  let [switchAccount, setAccount] = useState(true);
  function tAccount() {
    setAccount(false);
  }
  return (
    <>
      <nav className={styles.navStyle}>
        <div className={styles.navItem} onClick={() => navigate("/")}>
          <MdRestaurant size={20} />
          <h4 style={{ marginLeft: "10px", fontSize: "20px" }}>
            Food's Restaurant
          </h4>
        </div>
        <div
          className={styles.switchAccount}
          onClick={() => {
            checkout();
          }}
        >
          {switchAccount ? (
            <h4>Login</h4>
          ) : (
            <h4
              onClick={() => {
                setAccount(true);
              }}
            >
              LogOut
            </h4>
          )}
        </div>
        <div
          className={styles.cartIcon}
          onClick={() => {
            navigate("/checkout", { state: data });
          }}
        >
          <img src="./Image/assets/cart.png" alt="cart" />
          {totalItem ? <p>{totalItem}</p> : ""}
        </div>
      </nav>
      {pop && <LoginSign account11={tAccount} account1={setPop}></LoginSign>}
    </>
  );
}

export default Navbar;
