import React from 'react';

const CheckmarkIcon = () => (
  <svg className="h-5 w-5 flex-shrink-0 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const TimelineItem = ({ year, description, features, images }) => {
  return (
    <div className="relative md:flex md:items-baseline md:gap-8">
      {/* --- VERTICAL LINE & CIRCLE --- */}
      <div className="absolute left-5 top-3 h-5 w-5 -translate-x-1/2 transform rounded-full border-2 border-zinc-600 bg-zinc-900 md:left-28"></div>

      {/* --- YEAR SECTION --- */}
      {/* On desktop, this has a fixed width to stay to the left of the line */}
      <div className="w-full flex-shrink-0 md:w-24">
        <h3 className="hidden font-mono text-3xl font-bold text-zinc-400 md:block md:text-right">
          {year}
        </h3>
        {/* On mobile, the year is displayed above the content */}
        <h3 className="mb-4 text-center font-mono text-2xl font-bold text-zinc-400 md:hidden">
          {year}
        </h3>
      </div>
      
      {/* --- CONTENT SECTION --- */}
      {/* On mobile, this has left padding to avoid the line */}
      <div className="flex-grow space-y-6 pl-12 md:pl-0">
        <p className="font-mono leading-relaxed text-zinc-300">
          {description}
        </p>
        
        {features && features.length > 0 && (
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3 font-mono text-zinc-400">
                <CheckmarkIcon />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}

        {images && images.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
            {images.map((image, index) => (
              <img 
                key={index}
                src={image.src}
                alt={image.alt}
                className="rounded-lg border border-zinc-700 object-cover"
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TimelineItem;