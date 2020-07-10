import React from 'react';
import styled from 'styled-components';

export interface ImageProps {
  styles?: any;
}

interface ElementProps {
  styles?: any;
}

const Element = styled.img<ElementProps>`
  ${({ styles }) => styles}
  width: 100%;
`;

export const Img = ({ ...props }) => {
  return <Element {...props} />;
};
