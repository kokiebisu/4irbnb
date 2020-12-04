import React from "react";
import { ProgressBarProps } from "./props";

export const ProgressBar: React.FC<ProgressBarProps> = ({
  percentage = 50,
}) => {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: 10,
        backgroundColor: "#EDEFED",
        zIndex: 1,
      }}
    >
      <div style={{ width: "100%", height: 10, display: "flex", zIndex: 500 }}>
        {Array.from(Array(24).keys()).map((_, index) => {
          return (
            <div
              style={{
                width: "10%",
                height: 10,
                backgroundColor: "transparent",
                borderRight: index === 23 ? "none" : "1px solid #DCE0E0",
              }}
            />
          );
        })}
        <div
          style={{
            position: "absolute",
            height: "100%",
            width: `${percentage}%`,
            borderTopRightRadius: 9999,
            borderBottomRightRadius: 9999,
            backgroundColor: "#278489",
            zIndex: 9999,
          }}
        ></div>
      </div>
    </div>
  );
};
