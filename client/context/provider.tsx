import React from 'react';

import { ToggleProvider } from 'context/toggle';

interface Props {
  children: React.ReactNode;
}

export const ContextProvider = ({ children }: Props) => {
  return <ToggleProvider>{children}</ToggleProvider>;
};
