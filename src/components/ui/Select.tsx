import React from "react";

export const Select = ({ options, ...props }) => (
  <select className="border rounded px-3 py-2 w-full" {...props}>
    {options.map((opt) => (
      <option key={opt.value} value={opt.value}>
        {opt.label}
      </option>
    ))}
  </select>
);