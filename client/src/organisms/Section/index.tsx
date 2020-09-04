import React from 'react';

import { SectionA } from 'organisms/Section/section.a';

export type SectionProps = {
  type?: string;
};

interface mapProps {
  [key: string]: JSX.Element;
}

interface Props {
  type: string;
  children: React.ReactNode;
}

export const Section: React.FC<Props> = ({ type, ...props }) => {
  if (!type) {
    return null;
  }
  const types: mapProps = {
    a: <SectionA {...props} />,
  };
  return types[type];
};
