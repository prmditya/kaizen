"use client";

import React from "react";

interface VerticalProgressBarProps {
  progress: number; // Percentage of progress (0-100)
  width?: string;   // Width of the progress bar (e.g., "10px", "20px")
  backgroundColor?: string; // Background color of the bar
  fillColor?: string;       // Fill color of the bar
}

const VerticalProgressBar: React.FC<VerticalProgressBarProps> = ({
  progress,
  width = "10px",
  backgroundColor = "#e5e7eb", 
  fillColor = "#3b82f6",       
}) => {
  const clampedProgress = Math.min(Math.max(progress, 0), 100); // Clamp progress between 0 and 100

  return (
    <div
      style={{
        height: "auto",
        width,
        backgroundColor,
        borderRadius: "10px",
        overflow: "hidden",
        position: "relative",
        border: "solid 2px black",
      }}
    >
      <div
        style={{
          height: `${clampedProgress}%`,
          width: "100%",
          backgroundColor: fillColor,
          position: "absolute",
          bottom: 0, // Start filling from the bottom
          transition: "height 0.3s ease",
        }}
      />
    </div>
  );
};

export { VerticalProgressBar };
