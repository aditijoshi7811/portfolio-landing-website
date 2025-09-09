import React from 'react';
import './ExperienceCard.css'; // We'll create this file for the custom animation

const ExperienceCard = ({ title, degree, dateRange, score, institution, isActive }) => {
  return (
    // 'group' class allows us to style children on hover of this parent
    // 'experience-card' is our custom class for the animation container
    <div className="experience-card group relative w-full max-w-md rounded-2xl border border-zinc-800 bg-zinc-900 p-6 transition-colors duration-300 hover:border-green-500/30 hover:bg-green-900/20">
      
      {/* Animated SVG Border - Hidden by default, appears on hover */}
      <svg
        className="animated-border absolute inset-0 h-full w-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
      >
        <rect
          x="1" y="1"
          width="calc(100% - 2px)"
          height="calc(100% - 2px)"
          rx="15" // Corresponds to rounded-2xl (1rem = 16px)
          className="path"
        />
      </svg>

      {/* Radio Button - Top Right */}
      <div className="absolute top-6 right-6 flex h-6 w-6 items-center justify-center rounded-full border-2 border-zinc-600 transition-colors duration-300 group-hover:border-green-400">
        {isActive && (
          <div className="h-2.5 w-2.5 rounded-full bg-green-400"></div>
        )}
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <h3 className="font-mono text-xl font-bold text-white">{degree}</h3>
        <h4 className="font-mono text-lg text-zinc-300">{title}</h4>
        
        <div className="my-4 flex items-center justify-between font-mono text-sm text-zinc-400">
          <span>{dateRange}</span>
          <span className="flex items-center gap-2 rounded-full bg-green-900/50 px-3 py-1 text-green-300">
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.75 2.75a.75.75 0 00-1.5 0v8.614L6.295 8.235a.75.75 0 00-1.09 1.03l4.25 4.5a.75.75 0 001.09 0l4.25-4.5a.75.75 0 00-1.09-1.03l-2.955 3.129V2.75z"></path>
              <path d="M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z"></path>
            </svg>
            {score}
          </span>
        </div>

        <p className="font-mono text-zinc-500">{institution}</p>
      </div>
    </div>
  );
};

export default ExperienceCard;