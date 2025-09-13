<<<<<<< HEAD

import './App.css'

function App() {
<>
    </>
  
}

export default App
=======
import React from 'react';
import "./styles/Style.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './Components/Sidebar';
import Navbar from './Components/Navbar';
import Students from './Pages/Student';
import Courses from './Pages/Courses';
import Settings from './Pages/Setting';
import './styles/style.css';
import Dashboard from './Pages/Dashboard';
import Login from './Pages/Login';

function App() {
    return (
        <Router>
            <Routes>
                {/* Public Pages (No Sidebar / Navbar) */}
                <Route path="/" element={<Navigate to="/login" />} />
<Route path="/login" element={<Login />} />

                {/* Private Pages (With Sidebar & Navbar) */}
                <Route
                    path="/dashboard"
                    element={
                        <div className="d-flex">
                            <Sidebar />
                            <div className="main-content flex-grow-1">
                                <Navbar />
                                <div className="container mt-4">
                                    <Dashboard />
                                </div>
                            </div>
                        </div>
                    }
                />
                <Route
                    path="/students"
                    element={
                        <div className="d-flex">
                            <Sidebar />
                            <div className="main-content flex-grow-1">
                                <Navbar />
                                <div className="container mt-4">
                                    <Students />
                                </div>
                            </div>
                        </div>
                    }
                />
                <Route
                    path="/courses"
                    element={
                        <div className="d-flex">
                            <Sidebar />
                            <div className="main-content flex-grow-1">
                                <Navbar />
                                <div className="container mt-4">
                                    <Courses />
                                </div>
                            </div>
                        </div>
                    }
                />
                <Route
                    path="/settings"
                    element={
                        <div className="d-flex">
                            <Sidebar />
                            <div className="main-content flex-grow-1">
                                <Navbar />
                                <div className="container mt-4">
                                    <Settings />
                                </div>
                            </div>
                        </div>
                    }
                />
            </Routes>
        </Router>
    );
}

export default App;
>>>>>>> e0de8e8 (done-student-crud)
