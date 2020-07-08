import React from 'react';
import styled from 'styled-components';

interface BoxProps {
  styles?: any;
}

interface ElementProps {
  styles?: any;
}

const Element = styled.div<ElementProps>`
  ${({ styles }) => styles}
`;

export const Box: React.FC<BoxProps> = ({ children, ...props }) => {
  return <Element {...props}>{children}</Element>;
};
