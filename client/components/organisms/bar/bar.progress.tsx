import React from "react";
import { ProgressBarProps } from "./props";

export const ProgressBar: React.FC<ProgressBarProps> = () => {
  return (
    <div
      style={{ width: "100%", height: 10, backgroundColor: "#EDEFED" }}
    ></div>
  );
};
