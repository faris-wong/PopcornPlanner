import React, { useRef } from "react";

const Login = (props) => {
  const handleLogin = () => {
    const inputval = document.getElementById("name");
    props.setName(inputval.value);
  };

  return (
    <div>
      <div>Welcome {props.name}</div>
      <input id="name" type="text" placeholder="Enter User"></input>
      <button onClick={handleLogin}>Log In</button>
    </div>
  );
};

export default Login;
