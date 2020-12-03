import React from "react";

/** Provider */
import { AuthProvider } from "./auth";
import { StayProvider } from "./stay";
import { ToggleProvider } from "./toggle";

interface Props {
  children: React.ReactNode;
}

export const ContextProvider = ({ children }: Props) => {
  return (
    <AuthProvider>
      <ToggleProvider>
        <StayProvider>{children}</StayProvider>
      </ToggleProvider>
    </AuthProvider>
  );
};
