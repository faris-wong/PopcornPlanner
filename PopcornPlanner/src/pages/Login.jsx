import React from "react";

const Login = (props) => {
  const handleLogin = () => {
    props.userNameInput.current.focus();
  };

  return (
    <div>
      <div>Welcome {props.name}</div>
      <input
        type="text"
        value={props.name}
        placeholder="Enter User"
        ref={props.userNameInput}
      ></input>
      <button onClick={handleLogin}>Log In</button>
    </div>
  );
};

export default Login;
