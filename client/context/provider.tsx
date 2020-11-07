import React from 'react';
import { AuthProvider } from './auth';

import { ToggleProvider } from './toggle';

interface Props {
  children: React.ReactNode;
}

export const ContextProvider = ({ children }: Props) => {
  return (
    <AuthProvider>
      <ToggleProvider>{children}</ToggleProvider>
    </AuthProvider>
  );
};
