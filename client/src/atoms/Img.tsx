import React from 'react';
import styled from 'styled-components';

interface ElementProps {
  src: any;
  alt: string;
  className?: string;
}

const Element = styled.img`
  max-width: 100%;
  height: auto;
`;

export interface Props extends ElementProps {}

export const Img: React.FC<Props> = ({ ...props }) => {
  return <Element {...props} />;
};
