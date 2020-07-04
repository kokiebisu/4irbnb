import React from 'react';
import styled from 'styled-components';
import { Primary } from './button.primary';

interface Props {
  onPress: () => void;
}

export const Button: React.FC<Props> = ({ onPress, children }) => {
  return <Element onClick={onPress}>{children}</Element>;
};

const Element = styled.button`
  background-color: transparent;
  border: 1px solid red;
  color: red;
`;
