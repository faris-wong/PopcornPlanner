import React from "react";
import styles from "./NavBar.module.css";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <header className={styles.navbar}>
      <nav>
        <ul>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          <li>
            <NavLink to="/home">Home</NavLink>
          </li>
          <li>
            <NavLink to="/myList">MyList</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
