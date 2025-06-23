import React, { useRef } from "react";

export default function UseRef() {
  const username = useRef(null);
  const password = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(username.current.value, password.current.value);
    username.current.value = "";
    password.current.value = "";
    username.current.focus();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="username"
          placeholder="Enter Name"
          ref={username}
          style={{ margin: "5px" }}
        />
        <br />
        <input
          type="text"
          id="password"
          placeholder="Enter Password"
          ref={password}
          style={{ margin: "5px" }}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
