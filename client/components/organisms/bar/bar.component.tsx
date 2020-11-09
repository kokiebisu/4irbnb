import React from 'react';
import { PaginateBar } from './bar.paginate';
import { BarProps } from './props';

export const Bar: React.FC<BarProps> = ({ type, ...props }) => {
  const types = {
    paginate: <PaginateBar {...props} />,
  };
  return types[type];
};
