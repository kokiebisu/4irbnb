import React from 'react';
import { GetStartedCreate } from './create.getstarted';
import { CreateProps } from './props';

export const Create: React.FC<CreateProps> = ({
  type = 'getstarted',
  ...props
}) => {
  const types = {
    getstarted: <GetStartedCreate {...props} />,
  };
  return types[type];
};
