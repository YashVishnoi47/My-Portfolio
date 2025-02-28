"use client";

import { useState } from "react";

const Tooltip = ({ text, children }) => {
  const [visible, setVisible] = useState(false);

  return (
    <div
      className="relative flex items-center"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}
      {visible && (
        <div className="absolute bottom-full mb-2 px-3 py-2 text-sm text-black bg-white backdrop-blur-md rounded-lg transition-all duration-300 opacity-100">
          {text}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
