import React from 'react';
import styled from 'styled-components';

interface TextProps {
  styles?: any;
}

interface ElementProps {
  styles?: any;
}

const Element = styled.p<ElementProps>`
  ${({ styles }) => styles}
  margin: 0;
`;

export const Text: React.FC<TextProps> = ({ children, ...props }) => {
  return <Element {...props}>{children}</Element>;
};
