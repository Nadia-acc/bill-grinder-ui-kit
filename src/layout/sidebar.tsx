import React from "react";

export const Sidebar = ({ items }) => (
  <nav className="w-64 bg-gray-100 h-full p-4">
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item.label}>
          <a href={item.href} className="text-blue-700 hover:underline">{item.label}</a>
        </li>
      ))}
    </ul>
  </nav>
);
