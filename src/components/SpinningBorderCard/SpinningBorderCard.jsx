import React from 'react';
import './SpinningBorderCard.css'; // Import the CSS file

const SpinningBorderCard = ({ title, description, avatarUrl }) => {
  return (
    <div className="relative p-1 bg-[#1f1f2a] m-2 rounded-xl shadow-lg border border-[#3b3b4d] overflow-hidden max-w-2xl mx-auto profile-card-border-glow">

      {/* Content wrapper to ensure z-index */}
      <div className="relative z-10 flex items-center p-5 bg-[#1f1f2a] rounded-xl min-h-[276px]">
        <div className="w-1/4 flex justify-center">
          <img src={avatarUrl} alt={`${title} avatar`} className="w-24 h-24 object-contain" />
        </div>
        <div className="w-3/4 pl-6 text-white">
          <h2 className="text-3xl font-bold mb-2">{title}</h2>
          <p className="text-gray-300 text-lg">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SpinningBorderCard;