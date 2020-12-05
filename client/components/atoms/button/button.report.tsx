import React from "react";

/** vectors */
import { Flag } from "public/svg/original";

/** props */
import { ReportButtonProps } from "./props";

/** Renders the report button */
export const ReportButton: React.FC<ReportButtonProps> = () => {
  return (
    <button>
      <div>
        <Flag width={16} />
      </div>
      <div>Report this listing</div>
    </button>
  );
};
