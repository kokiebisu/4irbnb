import React from 'react';
import { H } from '../../elements/H';

interface Props {
  children: React.ReactNode;
}

export const Header: React.FC<Props> = ({ children }) => {
  return <H>{children}</H>;
};
