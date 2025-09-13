import React, { useEffect, useState } from "react";
import Table from "../Components/Table";
import Form from "../Components/Form";
import axios from "axios";

const Courses = () => {
    const [data, setData] = useState([]);
  // Table column names
  const columns = [ "Course Name", "Instructor", "Action"];

 
  // Form fields for add/edit course
  const fields = [
    { label: "Course Name", type: "text", placeholder: "Enter course name" },
    { label: "Instructor", type: "text", placeholder: "Enter instructor name" },
  ];

   const fetchStudents = async () => {
    try {
      const res = await axios.get("http://localhost:3001/courses");
      setData(res.data);
    } catch (err) {
      console.error("Error fetching students:", err);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);
  return (
    <div>
      {/* Header + Add Button */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="fw-bold">Courses</h2>
        <button className="btn btn-primary">+ Add Course</button>
      </div>

      {/* Table Card */}
      <div className="card shadow p-3 mb-4">
        <Table columns={columns} data={data} />
      </div>

      {/* Add/Edit Form Card */}
      <div className="card shadow p-3">
        <h5 className="mb-3 fw-bold">Add / Edit Course</h5>
        <Form fields={fields} />
      </div>
    </div>
  );
};

export default Courses;