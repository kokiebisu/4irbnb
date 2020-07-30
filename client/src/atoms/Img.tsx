import React from 'react';
import styled from 'styled-components';

export interface ElementProps {
  styles?: any;
  src: any;
  alt: string;
}

interface StyledProps {
  styles?: any;
}

const Element = styled.img<StyledProps>`
  ${({ styles }) => styles}
  width: 100%;
`;

export default ({ ...props }: ElementProps) => {
  return <Element {...props} />;
};
