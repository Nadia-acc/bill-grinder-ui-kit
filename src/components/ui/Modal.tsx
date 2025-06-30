import React from "react";

export const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded shadow max-w-lg w-full relative">
        <button onClick={onClose} className="absolute top-2 right-2">×</button>
        {children}
      </div>
    </div>
  );
};