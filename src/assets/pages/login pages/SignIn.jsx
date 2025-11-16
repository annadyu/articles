import SignUp from "./SignUp";
import { useState } from "react";

const SignIn = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginErrors, setLoginErrors] = useState([]);

  const savedUser = JSON.parse(localStorage.getItem("registeredUser"));
  const savedEmail = savedUser?.email;
  const savedPassword = savedUser?.password;

  const loginInfoCheck = (e) => {
    e.preventDefault();
    const newloginErrors = [];

    if (loginEmail !== savedEmail) {
      newloginErrors.push("non-existing login!");
    }

    if (loginPassword !== savedPassword) {
      newloginErrors.push("password invalid!");
    }

    setLoginErrors(newloginErrors);

    if (newloginErrors.length === 0) {
      console.log("log in successufully!", { loginEmail, loginPassword });
      alert("log in successufully");
    }
  };

  return (
    <div className="signin">
      <form action="" className="signin-form" onSubmit={loginInfoCheck}>
        <h1 className="signin-title">Log In</h1>
        <p className="signin-text">Please fill in this form to log in.</p>
        {loginErrors.length > 0 ? (
          <ul className="signin-errors-list">
            {loginErrors.map((err, index) => (
              <li className="signin-errors-item" key={index}>
                {err}
              </li>
            ))}
          </ul>
        ) : (
          <>
            <div className="signin-inputs">
              <label for="email">
                <b>Email</b>
              </label>
              <input
                className="signin-email-input"
                type="text"
                value={loginEmail}
                placeholder="Enter Email"
                onChange={(el) => setLoginEmail(el.target.value)}
                required
              />
              <label for="psw">
                <b>Password</b>
              </label>
              <input
                className="signin-password-input"
                type="password"
                value={loginPassword}
                placeholder="Enter Password"
                onChange={(el) => setLoginPassword(el.target.value)}
                required
              />
            </div>
            <button type="submit" className="signin-btn">
              Log In
            </button>
          </>
        )}
      </form>
    </div>
  );
};

export default SignIn;
