import React, { useRef, useEffect } from 'react';
import './TiltingCard.css'; // We'll update this file next

const TiltingCard = ({ title, description, imageUrl, liveSiteUrl, techStackIcons }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e) => {
      const { left, top, width, height } = card.getBoundingClientRect();
      // Calculate mouse position relative to the card's center
      const x = e.clientX - (left + width / 2);
      const y = e.clientY - (top + height / 2);

      // Define the intensity of the tilt
      const rotateY = (x / width) * 30; // Tilt more left/right
      const rotateX = (-y / height) * 30; // Tilt more up/down

      // Update card's transform style
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
      
      // Update glare effect position using CSS custom properties
      card.style.setProperty('--mouse-x', `${e.clientX - left}px`);
      card.style.setProperty('--mouse-y', `${e.clientY - top}px`);
    };

    const handleMouseLeave = () => {
      // Reset transform on mouse leave
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);

    // Cleanup function to remove event listeners
    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    // The ref is now on this wrapper div which handles the 3D effect
    <div ref={cardRef} className="tilting-card-container">
      <a 
        href={liveSiteUrl} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="tilting-card-content"
      >
        {/* Top URL Bar */}
        <div className="mb-4 flex items-center justify-center rounded-full bg-gray-800/80 px-4 py-2 text-sm text-gray-400 backdrop-blur-sm">
          {liveSiteUrl.replace('https://', '')}
        </div>

        {/* Screenshot */}
        <div className="mb-6 rounded-xl border border-gray-700/50 overflow-hidden">
          <img src={imageUrl} alt={`${title} Screenshot`} className="w-full h-auto object-cover" />
        </div>

        {/* Text Content */}
        <div className="mb-6">
          <h2 className="font-mono text-3xl font-bold text-white mb-2">{title}</h2>
          <p className="font-mono text-base text-gray-400">{description}</p>
        </div>

        {/* Bottom Section: Tech Stack & Live Site Link */}
        <div className="flex items-center justify-between mt-auto">
          {/* Tech Stack Icons */}
          <div className="flex items-center space-x-3">
            {techStackIcons.map((icon, index) => (
              <div key={index} className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-white text-lg">
                <img src={`https://cdn.simpleicons.org/${icon.toLowerCase()}`} alt={icon} className="h-5 w-5" />
              </div>
            ))}
          </div>
          
          {/* Live Site Link */}
          <div className="flex items-center space-x-2 font-mono text-green-400">
            <span>Check Live Site</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </div>
        </div>
      </a>
    </div>
  );
};

export default TiltingCard;