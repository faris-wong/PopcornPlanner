import React, { useRef } from "react";
import styles from "./Login.module.css"

const Login = (props) => {
  const handleLogin = () => {
    const inputval = document.getElementById("name");
    props.setName(inputval.value);
  };

  return (
    <div className={styles.container}>
      <input id="name" type="text" placeholder="Enter User"></input>
      <button onClick={handleLogin}>Log In</button>
    </div>
  );
};

export default Login;
