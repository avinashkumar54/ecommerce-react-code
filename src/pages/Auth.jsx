/* eslint-disable react-hooks/set-state-in-effect */
import { useState , useEffect} from "react"
import  { useForm } from "react-hook-form"
import { useAuth } from "../context/AuthContect";
import { useLocation } from "react-router-dom";
export default function Auth() {
  
  const location = useLocation();
  console.log("Auth page rendered", location);
  const [mode, setMode] = useState(location.state?.mode || "signup");
  const { register, handleSubmit, formState:{errors} } = useForm({ mode: "onChange" });
  const { signUp, signIn } = useAuth();


  const onSubmit = (data) => {
    if (mode === "signup") {
      signUp(data);
    } else {
      signIn(data);
    }
  };

  useEffect(() => {
    if (location.state?.mode) {
      const newMode = location.state?.mode;
      if (newMode && newMode !== mode) {
        setMode(newMode); // ✅ safe update
      }
    }
    return () => {
      console.log("Auth page unmounted");
      location.state = null; // ✅ clear state on unmount
    }
  }, [location, mode]); // ✅ include mode in dependencies


  return (
    <div className="page">
      <div className="container">
        <div className="auth-container">
          <h1 className="page-title">
            {mode === "signup" ? "Sign Up" : "Log In"}
          </h1>
          <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>  
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" className="form-input" {...register("email", {required:"Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email address"
                  } 
              })}/>
              {errors.email && (
                <p className="error">{errors.email.message}</p>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" className="form-input" {...register("password", {required:"Password is required",
                minLength: {
                    value: 6,
                    message: "Minimum 6 characters required"
                  },
                  validate: {
                    hasUpperCase: (value) =>
                      /[A-Z]/.test(value) || "Must contain 1 uppercase letter",
                    hasNumber: (value) =>
                      /[0-9]/.test(value) || "Must contain 1 number",
                    hasSpecialChar: (value) =>
                      /[!@#$%^&*]/.test(value) || "Must contain 1 special character"
                  }
              })} />
              {errors.password && (
                <p className="error">{errors.password.message}</p>
              )}
            </div>

            <button type="submit" className="btn btn-primary btn-large">
              {mode === "signup" ? "Sign Up" : "Log In"}
            </button>
          </form>
          <div className="auth-switch">
            {mode === "signup" ?
            <p>
               Already have an account? <span className="auth-link" onClick={()=> setMode("signin")}>Log in</span>
            </p>
            :
            <p>
              Don't have an account? <span className="auth-link" onClick={()=> setMode("signup")}>Sign up</span>
            </p>
            }
          </div>
        </div>
      </div>
    </div>
  )
}