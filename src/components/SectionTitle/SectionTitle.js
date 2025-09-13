import React from 'react';

const SectionTitle = ({ icon, title }) => {
  return (
    <div className="flex items-center gap-4 justify-center mb-8 mt-4">
      {/* Icon container with styling */}
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-zinc-800 border border-zinc-700 text-green-400">
        {/* Render the icon passed as a prop */}
        {icon}
      </div>
      {/* Title text */}
      <h2 className="font-mono text-3xl font-bold text-white">{title}</h2>
    </div>
  );
};

export default SectionTitle;