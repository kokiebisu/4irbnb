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

export const Img: React.FC<ElementProps> = ({ ...props }) => {
  return <Element {...props} />;
};
