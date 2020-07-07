import React from 'react';
import styled from 'styled-components';

interface Props {
  styles?: any;
}

interface ElementProps {
  styles?: any;
}

const Element = styled.p<ElementProps>`
  ${({ styles }) => styles}
  margin: 0;
`;

export const Text: React.FC<Props> = ({ children, ...props }) => {
  return <Element {...props}>{children}</Element>;
};
