import React, { useEffect, useState } from "react";
import axios from "axios";

const Form = ({ fields, initialData, onSuccess }) => {
  const [data, setData] = useState({ studentName: "", studentEmail: "" });

  useEffect(() => {
    if (initialData) {
      setData(initialData); // pre-fill for edit
    } else {
      setData({ studentName: "", studentEmail: "" }); // reset for add
    }
  }, [initialData]);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (data.id) {
        // Edit existing student
        await axios.put(`http://localhost:3001/students/${data.id}`, data);
        console.log("Student Updated:", data);
      } else {
        // Add new student
        await axios.post("http://localhost:3001/students", data);
        console.log("Student Added:", data);
      }

      setData({ studentName: "", studentEmail: "" }); // reset form
      if (onSuccess) onSuccess(); // refresh table in parent
    } catch (error) {
      console.error("Error saving student:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        {fields.map((field, i) => (
          <div className="col-md-6 mb-3" key={i}>
            <label className="form-label fw-semibold">{field.label}</label>
            <input
              type={field.type}
              id={field.id}
              name={field.name}
              className="form-control"
              placeholder={field.placeholder}
              value={data[field.name] || ""}
              onChange={handleChange}
            />
          </div>
        ))}
      </div>
      <button type="submit" className="btn btn-success fw-bold">
        Save
      </button>
    </form>
  );
};

export default Form;