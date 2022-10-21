import React from "react";
import { RiMenu2Line } from "react-icons/ri";
import { BsSearch } from "react-icons/bs";
import styled from "./CSS/Navbar.module.css";
import { VscBell } from "react-icons/vsc";
import { RiArrowDownSLine } from "react-icons/ri";
import { data } from "../data";
function Navbar() {
  return (
    <>
      <nav className={styled.navflex}>
        <div className={styled.navLeft}>
          <RiMenu2Line></RiMenu2Line>
          <div style={{ marginLeft: "15px " }}>
            <BsSearch></BsSearch>
            <input
              style={{ border: 0, width: 250, marginLeft: "5px" }}
              type="search"
              placeholder="Search transactions, invoices or help"
            ></input>
          </div>
        </div>
        {/* ========= */}
        <div className={styled.navRight}>
          <VscBell style={{ fontSize: 15 }}></VscBell>

          <div className={styled.navSubRight}>
            <div>
              John Doe
              <RiArrowDownSLine
                style={{ paddingTop: "2px" }}
              ></RiArrowDownSLine>
            </div>
            <div>
              <img
                src={data[0].photo}
                alt="image"
                className={styled.navImage}
              ></img>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
