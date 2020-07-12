import React from 'react';
import styled from 'styled-components';

interface ElementProps {
  styles?: any;
}

interface StyledProps {
  styles?: any;
}

const Element = styled.p<StyledProps>`
  ${({ styles }) => styles}
  margin: 0;
  font-family: 'Airbnb-Cereal';
`;

export const Text: React.FC<ElementProps> = ({ children, ...props }) => {
  return <Element {...props}>{children}</Element>;
};
