import SignUp from "./SignUp";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

// const [loginEmail, setLoginEmail] = useState("");
// const [loginPassword, setLoginPassword] = useState("");
// const [loginErrors, setLoginErrors] = useState([]);

// const savedUser = JSON.parse(localStorage.getItem("registeredUser"));
// const savedEmail = savedUser?.email;
// const savedPassword = savedUser?.password;

// const loginInfoCheck = (e) => {
//   e.preventDefault();
//   const newloginErrors = [];

//   if (loginEmail !== savedEmail) {
//     newloginErrors.push("non-existing login!");
//   }

//   if (loginPassword !== savedPassword) {
//     newloginErrors.push("password invalid!");
//   }

//   setLoginErrors(newloginErrors);

//   if (newloginErrors.length === 0) {
//     console.log("log in successufully!", { loginEmail, loginPassword });
//     alert("log in successufully");
//   }
// };
const SignIn = () => {
  const navigate = useNavigate();

  const savedUser = JSON.parse(localStorage.getItem("registeredUser")) || {};
  const savedEmail = savedUser?.email;
  const savedPassword = savedUser?.password;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    const { email, password } = data;

    if (email === savedEmail && password === savedPassword) {
      console.log("Success:", data);
      alert("Login successful!");
      navigate("/");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="signin">
      <form
        className="signin-form"
        method="POST"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="signin-title">Log In</h1>
        <div className="signin-inputs">
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email format",
              },
            })}
            placeholder="Enter email"
          />
          {errors.email && <p className="error">{errors.email.message}</p>}
          <input
            type="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters long",
              },
              maxLength: {
                value: 40,
                message: "Password must be under 40 characters",
              },
            })}
            placeholder="Enter password"
          />
          {errors.password && (
            <p className="error">{errors.password.message}</p>
          )}
        </div>
        <button className="signin-btn" type="submit">
          Sign In{" "}
        </button>
      </form>
    </div>
  );
};
export default SignIn;
