import React from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  const links = [
    { path: "/dashboard", label: "Dashboard" },
    { path: "/students", label: "Students" },
    { path: "/courses", label: "Courses" },
    { path: "/settings", label: "Settings" },
    { path: "/login", label: "Logout" },
  ];

  return (
    <div className="sidebar d-flex flex-column p-3 bg-dark text-white">
      <h3 className="text-center mb-4 fw-bold">LMS Admin</h3>
      <ul className="nav nav-pills flex-column mb-auto">
        {links.map((link) => (
          <li key={link.path} className="nav-item">
            <Link
              className={`nav-link text-white ${
                location.pathname === link.path ? "active bg-primary" : ""
              }`}
              to={link.path}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
