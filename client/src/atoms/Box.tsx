import React from 'react';
import styled from 'styled-components';

interface ElementProps {
  styles?: any;
}

interface StyledProps {
  styles?: any;
}

const Element = styled.div<StyledProps>`
  ${({ styles }) => styles}
`;

export const Box: React.FC<ElementProps> = ({ children, ...props }) => {
  return <Element {...props}>{children}</Element>;
};
