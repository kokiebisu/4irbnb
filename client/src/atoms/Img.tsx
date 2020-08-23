import React from 'react';
import styled from 'styled-components';

export interface ElementProps {
  src: any;
  alt: string;
  className?: string;
}

const Element = styled.img`
  max-width: 100%;
  height: auto;
`;

export default ({ ...props }: ElementProps) => {
  return <Element {...props} />;
};
