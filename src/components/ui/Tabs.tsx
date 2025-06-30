import React, { useState } from "react";

export const Tabs = ({ tabs }) => {
  const [active, setActive] = useState(0);
  return (
    <div>
      <div className="flex border-b">
        {tabs.map((tab, i) => (
          <button
            key={i}
            className={\`px-4 py-2 \${active === i ? "border-b-2 border-blue-600 font-semibold" : ""}\`}
            onClick={() => setActive(i)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="p-4">{tabs[active].content}</div>
    </div>
  );
};