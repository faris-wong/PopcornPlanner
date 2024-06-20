import React from "react";
import styles from "./NavBar.module.css";
import { Link, NavLink } from "react-router-dom";

const NavBar = (props) => {
  return (
    <header className={styles.navbar}>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/home"
              onClick={() => {
                props.setPage(1);
              }}
            >
              <img src="../popcom.png" alt="icon" className="Popcorn"></img>
            </NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          <li>
            <NavLink to="/home">Home</NavLink>
          </li>
          <li>
            <NavLink to="/myList">
              {props.name ? `${props.navtitle}` : "My"}
              List
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
