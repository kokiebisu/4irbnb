import React from 'react';
import { Search } from '../assets/svg';
import styled from 'styled-components';

export interface IconProps {
  name: string;
  styles?: any;
}

interface ElementProps {
  styles?: any;
}

interface MapProps {
  [key: string]: () => JSX.Element;
}

const items: MapProps = {
  search: Search,
};

const Element = styled.div<ElementProps>`
  ${({ styles }) => styles}
`;

export const Icon: React.FC<IconProps> = ({ name, ...props }) => {
  const Component: any = items[name];

  return (
    <Element {...props}>
      <Component />
    </Element>
  );
};
