import React from 'react';
import styled from 'styled-components';

interface ElementProps {
  children?: React.ReactNode;
  styles?: any;
}

interface StyledProps {
  styles?: any;
}

const Element = styled.p<StyledProps>`
  margin: 0;
  font-family: 'Airbnb-Cereal';
  ${({ styles }) => styles}
`;

export default ({ children, ...props }: ElementProps) => {
  return <Element {...props}>{children}</Element>;
};
