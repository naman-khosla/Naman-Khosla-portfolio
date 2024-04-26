import { AgGridReact } from "ag-grid-react"; // AG Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css";
import "./Resume_Section_3.css";
import React from "react";
import { useState } from "react";

export default function table() {
  const data = [
    { name: "Bent Chair", age: 20 },
    { name: "Great Learning", age: 20 },
    { name: "SOL Education", age: 20 },
  ];
  const columns = [
    { headerName: "Organisation", field: "name", sortable: false },
    { headerName: "Age", field: "age", sortable: false },
  ];

  return (
    <div
      className="ag-theme-alpine"
      style={{ height: "250px", widht: "600px" }}
    >
      <AgGridReact rowData={data} columnDefs={columns} />
    </div>
  );
}
