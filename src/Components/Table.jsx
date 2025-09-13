import React from "react";

const Table = ({ columns, data }) => {
  return (
    <table className="table table-hover align-middle">
      <thead className="table-dark">
        <tr>
          <th>S.No</th>
          {columns.map((col, i) => (
            <th key={i}>{col}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, idx) => (
          <tr key={idx}>
             <td>{idx + 1}</td>
            {columns.map((col, i) => (
              <td key={i}>{row[col]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
