import React from 'react';

const Tooltip = ({ children, text }) => {
  return (
    <div className="group relative inline-block">
      {children}
      <span 
        className="
          invisible // Hidden by default
          absolute -top-10 left-1/2 z-10 -translate-x-1/2 
          whitespace-nowrap rounded-md bg-zinc-800 px-3 py-1.5 
          font-mono text-sm text-white opacity-0 transition-opacity
          group-hover:visible group-hover:opacity-100 // Show on hover
        "
      >
        {text}
        {/* Little arrow pointing down */}
        <span className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 bg-zinc-800"></span>
      </span>
    </div>
  );
};

export default Tooltip;