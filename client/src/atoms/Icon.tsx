import React from 'react';
import styled from 'styled-components';

// svgs
import { Search, Globe, ChevronDown, Bars, Avatar, Lock } from 'assets/svg';

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
  Search: Search,
  Globe: Globe,
  ChevronDown: ChevronDown,
  Bars: Bars,
  Avatar: Avatar,
  Lock: Lock,
};

const Element = styled.div<StyledProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ styles }) => styles};
`;

export default ({ name, ...props }: ElementProps) => {
  const Component: any = items[name];

  return (
    <Element {...props}>
      <Component />
    </Element>
  );
};
