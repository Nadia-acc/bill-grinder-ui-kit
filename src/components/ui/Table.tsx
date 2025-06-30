import React from "react";

export const Table = ({ headers, data }) => (
  <table className="min-w-full border text-sm">
    <thead className="bg-gray-50">
      <tr>
        {headers.map((header) => (
          <th key={header} className="text-left px-4 py-2 border-b">{header}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {data.map((row, idx) => (
        <tr key={idx} className="odd:bg-white even:bg-gray-50">
          {row.map((cell, i) => (
            <td key={i} className="px-4 py-2 border-b">{cell}</td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);