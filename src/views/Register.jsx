import { useState } from "react";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  return (
    <div className="authForm">
      <form className="authForm__form" action="">
        <div className="authForm__wrapper">
          <h1>Register</h1>
          <input
            className="authForm__textbox"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="authForm__textbox"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="authForm__textbox"
            type="pass"
            placeholder="Password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
          <input type="submit" value="Register" />
        </div>
      </form>
    </div>
  );
}

export default Register;
