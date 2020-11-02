import { Flag } from 'public/svg/original';
import React from 'react';

export const ReportButton = () => {
  return (
    <button>
      <div>
        <Flag width={16} />
      </div>
      <div>Report this listing</div>
    </button>
  );
};
