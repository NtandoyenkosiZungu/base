import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
 
import { auth } from "./firebase";  // Firebase import
import { signInWithEmailAndPassword } from "firebase/auth"; // Firebase Authentication

import "../../assets/styles/LoginPage.css"; // Importing the CSS file

interface LoginFormInputs {
  email: string;
  password: string;
}

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  const [errorMessage, setErrorMessage] = useState<string>("");

  const navigate = useNavigate();

  const onSubmit = async (data: LoginFormInputs) => {
    console.log("Login Data:", data);

    try {
      // Firebase authentication for sign in
      await signInWithEmailAndPassword(auth, data.email, data.password);
      
      // Redirect to a different page upon successful login
      // For example, redirect to the dashboard:
      // history.push("/dashboard");
      console.log("Login successful");
      navigate("/home")

    } catch (error) {
      // Handling login errors
      if (error instanceof Error) {
        setErrorMessage("Invalid email or password");
        console.error("Login error:", error.message);
      }
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Welcome to Jobify</h2>
        
        {/* Display login error */}
        {errorMessage && <p className="error-text">{errorMessage}</p>}
        
        <form onSubmit={handleSubmit(onSubmit)} className="login-form">
          <div className="input-group">
            <input
              type="email"
              placeholder="Email"
              {...register("email", { required: "Email is required" })}
              className="input-field"
            />
            {errors.email && <p className="error-text">{errors.email.message}</p>}
          </div>
          <div className="input-group">
            <input
              type="password"
              placeholder="Password"
              {...register("password", { required: "Password is required" })}
              className="input-field"
            />
            {errors.password && <p className="error-text">{errors.password.message}</p>}
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
        <p className="signup-text">
          Don't have an account? <a href="/signup">Sign Up</a>
        </p>
      </div>
    </div>
  );
}
