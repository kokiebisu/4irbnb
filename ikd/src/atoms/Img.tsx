import React from 'react';
import styled from 'styled-components';

interface ElementProps {
  src: any;
  alt: string;
  className?: string;
}

interface StyledProps {
  styles?: any;
}

const Element = styled.img<StyledProps>`
  max-width: 100%;
  height: auto;
  ${({ styles }) => styles}
`;

export interface ImgProps extends ElementProps {}

export const Img: React.FC<ImgProps> = ({ ...props }) => {
  return <Element {...props} />;
};
