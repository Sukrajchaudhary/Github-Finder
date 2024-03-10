import React from 'react';
import bgvieo from "../public/bg2.mp4"
const VideoBackground = () => {
  return (
    <video className="fixed top-0 left-0 min-w-full min-h-full w-auto h-auto z-0 object-cover" autoPlay loop muted>
      <source src={bgvieo} type="video/mp4" />
    </video>
  );
};

export default VideoBackground;
