import React from "react";

export const Checkbox = ({ label, ...props }) => (
  <label className="flex items-center space-x-2">
    <input type="checkbox" className="accent-blue-600" {...props} />
    <span>{label}</span>
  </label>
);