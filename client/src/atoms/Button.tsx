import React from 'react';
import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

interface ElementProps {
  styles?: any;
  sm?: boolean;
  md?: boolean;
  lg?: boolean;
  name?: string;
  children?: React.ReactNode;
  inverse?: boolean;
  onPress: () => void;
  className?: string;
}

interface StyledProps {
  styles?: any;
  sm?: boolean;
  md?: boolean;
  lg?: boolean;
  inverse?: boolean;
}

const Element = styled(motion.button)<StyledProps>`
  border-radius: 8px;
  font-size: 18px;
  border: none;
  ${({ styles }) => styles};
  ${({ sm }) =>
    sm &&
    css`
      padding: 15px 22px;
    `};
  ${({ md }) =>
    md &&
    css`
      padding: 15px 50px;
    `};
  ${({ lg }) =>
    lg &&
    css`
      padding: 15px 100px;
    `};
  ${({ inverse }) =>
    inverse &&
    css`
      border: 1px solid black;
      background-color: transparent;
    `};
  &:hover {
    cursor: pointer;
  }
  &:focus {
    outline: none;
  }
`;

export default ({ onPress, children, ...props }: ElementProps) => {
  return (
    <Element {...props} onClick={onPress}>
      {children}
    </Element>
  );
};
export type CustomProps = {
  type?: string;
  onPress: () => void;
  sm?: boolean;
  md?: boolean;
  lg?: boolean;
  inverse?: boolean;
  name?: string;
};
