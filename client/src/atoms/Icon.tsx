import React from 'react';
import styled from 'styled-components';

// svgs
import { Search, Globe, BottomArrow } from 'assets/svg';

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
  BottomArrow: BottomArrow,
};

const Element = styled.div<StyledProps>`
  ${({ styles }) => styles}
`;

export default ({ name, ...props }: ElementProps) => {
  const Component: any = items[name];

  return (
    <Element {...props}>
      <Component />
    </Element>
  );
};
