import React from 'react';
import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

// svgs
import {
  Search,
  Globe,
  ChevronDown,
  Bars,
  Avatar,
  Lock,
  NoColorLogo,
} from 'assets/svg';
import theme from 'styled-theming';

interface ElementProps {
  name: string;
  className?: string;
}

interface StyledProps {
  fillColor?: any;
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
  NoColorLogo: NoColorLogo,
};

const Element = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledComponent = styled.svg<StyledProps>`
  width: 100%;
  path {
    ${({ fill }) =>
      fill &&
      css`
        fill: ${fill};
      `}
  }
`;

interface Props extends ElementProps, StyledProps {}

export default ({ name, fillColor, ...props }: Props) => {
  const Component: any = items[name];

  return (
    <Element {...props}>
      <StyledComponent fillColor={fillColor} />
    </Element>
  );
};
