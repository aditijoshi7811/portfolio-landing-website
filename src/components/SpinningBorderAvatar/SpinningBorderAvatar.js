// SpinningBorderAvatar.jsx
import React from "react";
import "./SpinningBorderAvatar.css";

const SpinningBorderAvatar = ({
  src,
  alt = "avatar",
  size = 200, // px
  speed = 5, // seconds per full rotation
  borderWidth = 4,
}) => {
  return (
    <div
      className="relative flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      {/* Rotating border */}
      <div
        className="absolute inset-0 rounded-full p-[3px] animate-spin-slow"
        style={{ animationDuration: `${speed}s` }}
      >
        <div className="w-full h-full rounded-full bg-gradient-conic"></div>
      </div>

      {/* Inner circle with image */}
      <div
        className="relative rounded-full overflow-hidden"
        style={{
          width: size - borderWidth * 2,
          height: size - borderWidth * 2,
        }}
      >
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover rounded-full"
        />
      </div>
    </div>
  );
};

export default SpinningBorderAvatar;