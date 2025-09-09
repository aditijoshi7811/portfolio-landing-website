import React from 'react';
import TimelineItem from '../TimelineItem/TimelineItem';

const Timeline = ({ data }) => {
  return (
    <div className="relative">
      {/* Position the line consistently for both mobile and desktop views */}
      <div className="absolute left-5 top-0 h-full w-px -translate-x-1/2 transform bg-gradient-to-b from-transparent via-cyan-500 to-transparent"></div>
      
      <div className="space-y-16 md:space-y-20">
        {data.map((item, index) => (
          <TimelineItem
            key={index}
            year={item.year}
            description={item.description}
            features={item.features}
            images={item.images}
          />
        ))}
      </div>
    </div>
  );
};

export default Timeline;