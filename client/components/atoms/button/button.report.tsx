import React from 'react';

/**
 * Vectors
 */
import { Flag } from 'public/svg/original';

/**
 * Props
 */
import { ReportButtonProps } from './props';

/**
 * Renders the report button
 */
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
