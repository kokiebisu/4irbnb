import React from 'react';
import { Search } from '../assets/svg';
import styled from 'styled-components';

interface ElementProps {
  name: string;
  styles?: any;
}

interface StyledProps {
  styles?: any;
}

interface MapProps {
  [key: string]: () => JSX.Element;
}

const items: MapProps = {
  search: Search,
};

const Element = styled.div<StyledProps>`
  ${({ styles }) => styles}
`;

export const Icon: React.FC<ElementProps> = ({ name, ...props }) => {
  const Component: any = items[name];

  return (
    <Element {...props}>
      <Component />
    </Element>
  );
};
