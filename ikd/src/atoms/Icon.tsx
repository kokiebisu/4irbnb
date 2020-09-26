import React from 'react';
import styled, { css } from 'styled-components';
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
import { Box } from 'atoms';

interface ElementProps {
  name: string;
  className?: string;
}

interface StyledProps {
  styles?: any;
  fillColor?: theme.ThemeSet;
  width?: number;
  height?: number;
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

const Element = styled(Box)<StyledProps>`

  display: block;
  ${({ width }) =>
    width &&
    css`
      width: ${width}px;
    `}
  ${({ height }) =>
    height &&
    css`
      height: ${height}px;
    `}
  ${({ styles }) => styles}
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

interface IconProps extends ElementProps, StyledProps {}

export const Icon: React.FC<IconProps> = ({ name, ...props }) => {
  const Component: any = items[name];
  return (
    <Element {...props}>
      <Component />
    </Element>
  );
};
