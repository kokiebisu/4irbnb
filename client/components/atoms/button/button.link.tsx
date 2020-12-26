import React from "react";

/** styles */
import font from "@styles/font.module.scss";

export const LinkButton: React.FC<{ title?: string }> = ({ title }) => {
  return (
    <div>
      <h4 className={[font["size--14"]].join(" ")}>{title}</h4>
    </div>
  );
};
