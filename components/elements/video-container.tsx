import React from "react";

export const Video = ({ className }: { className?: string }) => {
  return <div className={className}>
    <video src="/videos/header.mp4" autoPlay muted loop playsInline className="h-full w-full"></video>
  </div>;
};
