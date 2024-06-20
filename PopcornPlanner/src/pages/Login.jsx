import React, { useEffect, useRef } from "react";
import styles from "./Login.module.css";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const navigate = useNavigate();
  const handleLogin = () => {
    const inputval = document.getElementById("name");
    props.setName(inputval.value);
    if (inputval.value === "") {
      props.setNavtitle("My");
    } else {
      props.setNavtitle(inputval.value + `'s `);
    }
    navigate("/home");
  };

  const handleNavChange = () => {
    if (props.name === "") {
      props.setNavtitle("My");
    } else {
      props.setNavtitle(props.name + `'s `);
    }
  };

  useEffect(() => handleNavChange(), [props.name, props.navtitle]);

  return (
    <>
      <div className={styles.container}>
        <input id="name" type="text" placeholder="Enter User"></input>
        <button onClick={handleLogin}>Log In</button>
      </div>
      <img src="../popcom111.png"></img>
    </>
  );
};

export default Login;
