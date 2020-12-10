import { CheckPlain, Close } from "../../../public/svg/original";
import React from "react";

export const ClosedButton: React.FC<{
  selected?: boolean;
  content?: string;
}> = ({ content = "close", selected = false }) => {
  const contents = {
    close: (
      <Close
        width={16}
        fill={selected}
        stroke={selected ? "white" : "black"}
        strokeWidth={2}
      />
    ),
    check: (
      <CheckPlain
        width={16}
        fill={selected}
        stroke={selected ? "white" : "black"}
        strokeWidth={2}
      />
    ),
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 5,
        borderRadius: 9999,
        backgroundColor: selected ? "black" : "white",
        border: `1px solid ${selected ? "black" : "lightgray"}`,
      }}
    >
      {contents[content]}
    </div>
  );
};
