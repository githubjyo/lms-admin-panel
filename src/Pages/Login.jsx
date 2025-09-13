import React from "react";
import { useRef } from "react";
import Dashboard from "./Dashboard";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const email = useRef();
    const password = useRef();
    
    const nav = useNavigate();
   
    const handleSubmit = (e) => {
        e.preventDefault();
        const enteredEmail = email.current.value;
    const enteredPassword = password.current.value;

    if (enteredEmail === "jyoti@gmail.com" && enteredPassword === "1234") {
      localStorage.setItem("email", enteredEmail);
      localStorage.setItem("password", enteredPassword);

      nav("/dashboard");
    } else {
      localStorage.removeItem("email");
      localStorage.removeItem("password");

      alert("Invalid credentials");
    }
    }

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
            <div className="card shadow p-4" style={{ width: "400px" }}>
                <h3 className="text-center mb-4 fw-bold text-primary">LMS Admin Login</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label fw-semibold">Email</label>
                            <input type="email" className="form-control" ref={email} placeholder="Enter email" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label fw-semibold">Password</label>
                            <input type="password" className="form-control" ref={password} placeholder="Enter password" />
                        </div>
                        <button type="submit" className="btn btn-primary w-100 fw-bold">
                            Login
                        </button>
                    </form>
            </div>
        </div>
    );
};

export default Login;
