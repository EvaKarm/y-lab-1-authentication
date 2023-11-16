import React, { useState } from "react";
import logins from "../logins";
import Welcome from "./Welcome";

function Form(props) {
  const [loginData, setLoginData] = useState({ login: "", password: "" });
  const [isRegistered, setRegistered] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setLoginData((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }

  function submit(event) {
    let result = logins.find(({ login }) => login === loginData.login);

    if (result === undefined) {
      console.log("Beeee");
      alert("Зарегестрируйтесь или попробуйте еще раз");
      setRegistered(false);
    } else if (
      result.login === loginData.login &&
      result.password === loginData.password
    ) {
      setRegistered(true);
    } else {
      setRegistered(false);
    }
    // event.preventDefault();
  }

  return (
    <form className="form">
      {isRegistered ? (
        <Welcome />
      ) : (
        <div>
          <input
            onChange={handleChange}
            value={loginData.login}
            type="text"
            name="login"
            placeholder="Enter e-mail"
          />
          <input
            onChange={handleChange}
            value={loginData.password}
            type="password"
            name="password"
            placeholder="Enter password"
          />
          <button onClick={submit} type="submit">
            Login
          </button>
          {/* <button className="registerButton" onClick={submit} type="submit">
            Register
          </button> */}
        </div>
      )}
    </form>
  );
}

export default Form;
