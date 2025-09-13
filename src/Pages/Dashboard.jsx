import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Dashboard = () => {
  const navigate = useNavigate();
  const loggedInUser = localStorage.getItem("email");

  // ✅ Redirect to login if not logged in
  useEffect(() => {
    if (!loggedInUser) {
      navigate("/login");
    }
  }, [loggedInUser, navigate]);

  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    navigate("/login");
  };
  return (
    <>
       <div className="container mt-5">
      {/* Navbar-like section */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold">Admin Dashboard</h2>
        <div className="d-flex align-items-center">
          <span className="me-3 text-primary fw-semibold">
             Welcome, {loggedInUser}
          </span>
          <button className="btn btn-outline-danger btn-sm" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
  
      <h2 className="fw-bold mb-4">Dashboard</h2>
      <div className="row g-4">
        <div className="col-md-4">
          <div className="card shadow border-0 text-center p-3 bg-primary text-white">
            <h5 className="card-title fw-bold">Total Students</h5>
            <p className="display-6 fw-bold">120</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow border-0 text-center p-3 bg-success text-white">
            <h5 className="card-title fw-bold">Total Courses</h5>
            <p className="display-6 fw-bold">25</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow border-0 text-center p-3 bg-warning text-dark">
            <h5 className="card-title fw-bold">Active Sessions</h5>
            <p className="display-6 fw-bold">5</p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Dashboard;
