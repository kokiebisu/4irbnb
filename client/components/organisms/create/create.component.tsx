import React from 'react';
import { GetStartedCreate } from './create.getstarted';
import { KindCreate } from './create.kind';
import { CreateProps } from './props';

export const Create: React.FC<CreateProps> = ({
  type = 'getstarted',
  ...props
}) => {
  const types = {
    getstarted: <GetStartedCreate {...props} />,
    kind: <KindCreate {...props} />
  };
  return types[type];
};
