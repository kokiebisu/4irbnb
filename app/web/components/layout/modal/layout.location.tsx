import React from 'react';

export interface LocationLayoutProps {
  title?: string;
  content?: any;
}

export const LocationLayout: React.FC<LocationLayoutProps> = ({
  title = 'Recent Searches',
  content = <div>Content here</div>,
}) => {
  return (
    <div>
      <div className="my-2 mx-7">
        <h2 className="text-sm uppercase text-gray-800">{title}</h2>
      </div>
      <div>{content}</div>
    </div>
  );
};
