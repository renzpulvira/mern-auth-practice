import { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");
  return (
    <div className="authForm">
      <form className="authForm__form" action="">
        <div className="authForm__wrapper">
          <h1>Login</h1>
          <input
            className="authForm__textbox"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="authForm__textbox"
            type="pass"
            placeholder="Password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
          <input type="submit" value="Login" />
        </div>
      </form>
    </div>
  );
}

export default Login;
