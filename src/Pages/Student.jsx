import React, { useEffect, useState } from "react";
import Table from "../Components/Table";
import Form from "../Components/Form";
import axios from "axios";

const Students = () => {
  const [data, setData] = useState([]);
  const [editingStudent, setEditingStudent] = useState(null);

  const columns = ["Name", "Email", "Action"];

  const fields = [
    {
      label: "Name",
      id: "studentName",
      type: "text",
      name: "studentName",
      placeholder: "Enter student name",
    },
    {
      label: "Email",
      id: "studentEmail",
      type: "email",
      name: "studentEmail",
      placeholder: "Enter student email",
    },
  ];

  const fetchStudents = async () => {
    try {
      const res = await axios.get("http://localhost:3001/students");
      setData(res.data);
    } catch (err) {
      console.error("Error fetching students:", err);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/students/${id}`);
      fetchStudents();
    } catch (err) {
      console.error("Error deleting student:", err);
    }
  };

  const handleEdit = (data) => {
    setEditingStudent(data); // Pass selected student to Form
  };

  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="fw-bold">Students</h2>
        <button
          className="btn btn-primary"
          onClick={() => setEditingStudent(null)}
        >
          + Add Student
        </button>
      </div>

      {/* Table */}
      <div className="card shadow p-3 mb-4">
        <Table
          columns={columns}
          data={data.map((s) => ({
            Name: s.studentName,
            Email: s.studentEmail,
            Action: (
              <>
                <button
                  className="btn btn-warning btn-sm me-2"
                  onClick={() => handleEdit(s)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(s.id)}
                >
                  Delete
                </button>
              </>
            ),
          }))}
        />
      </div>

      {/* Form */}
      <div className="card shadow p-3">
        <h5 className="mb-3 fw-bold">
          {editingStudent ? "Edit Student" : "Add Student"}
        </h5>
        <Form
          fields={fields}
          initialData={editingStudent}
          onSuccess={fetchStudents}
        />
      </div>
    </>
  );
};

export default Students;