import TimelineItem from '../TimelineItem/TimelineItem';

const Timeline = ({ data }) => {
  return (
    <div className="relative">
      {/* --- THIS IS THE UPDATED LINE --- */}
      {/* Position the line responsively: left-5 on mobile, left-28 on desktop */}
      <div className="absolute left-5 top-0 h-full w-px -translate-x-1/2 transform bg-gradient-to-b from-transparent via-cyan-500 to-transparent md:left-28"></div>
      
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