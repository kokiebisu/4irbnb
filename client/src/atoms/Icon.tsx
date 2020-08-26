import React from 'react';
import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import theme from 'styled-theming';

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

interface ElementProps {
  name: string;
  className?: string;
}

interface StyledProps {
  fillColor?: theme.ThemeSet;
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

const Element = styled(motion.div)<StyledProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  & > svg {
    width: 100%;
    path,
    polygon {
      ${({ fillColor }) =>
        fillColor &&
        css`
          fill: ${fillColor};
        `}
    }
  }
`;

interface Props extends ElementProps, StyledProps {}

export default ({ name, ...props }: Props) => {
  const Component: any = items[name];
  return (
    <Element {...props}>
      <Component />
    </Element>
  );
};
