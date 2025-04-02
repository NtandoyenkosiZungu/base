import { useForm } from "react-hook-form";
import "../../assets/styles/signup.css"; // Importing the CSS file
import { useNavigate } from "react-router-dom";

interface SignupFormInputs {
  username: string;
  email: string;
  password: string;
}

export default function SignupPage() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormInputs>();

  const navigate = useNavigate();

  const onSubmit = async (data: SignupFormInputs) => {
    console.log(data);
    const apiURL = import.meta.env.VITE_APP_API_SIGNUP_URL;
    
    try {
        const response = await fetch(apiURL, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(data)
        })

        const resData = await response.json();

        if (!response.ok){
            throw new Error(resData.message || "Signup failed");
        }

        navigate("/home");
        
    }catch(error){
        if (error instanceof Error){
            alert(error.message || 'Failed to signup');
            return null;
        }
    }
    console.log("Signup Data:", data);
    // Handle signup logic

    
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2 className="signup-title">Create an Account</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="signup-form">
          <div className="input-group">
            <input
              type="text"
              placeholder="Username"
              {...register("username", { required: "Username is required" })}
              className="input-field"
            />
            {errors.username && <p className="error-text">{errors.username.message}</p>}
          </div>
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
              {...register("password", { required: "Password is required", minLength: { value: 6, message: "Password must be at least 6 characters" } })}
              className="input-field"
            />
            {errors.password && <p className="error-text">{errors.password.message}</p>}
          </div>
          <button type="submit" className="signup-button">Sign Up</button>
        </form>
        <p className="login-text">
          Already have an account? <a onClick={()=> navigate("/login")}>Login</a>
        </p>
      </div>
    </div>
  );
}
