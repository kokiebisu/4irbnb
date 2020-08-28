import React from 'react';
import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

export interface ElementProps extends StyledProps {
  children?: React.ReactNode;
  onPress: () => void;
  className?: string;
}

interface StyledProps {
  styles?: any;
  size?: 'sm' | 'md' | 'lg';
  inverse?: boolean;
}

const Element = styled(motion.button)<StyledProps>`
  font-size: 18px;
  border: none;
  border-radius: 8px;
  ${({ size }) =>
    size === 'sm' &&
    css`
      padding: 15px 22px;
    `};
  ${({ size }) =>
    size === 'md' &&
    css`
      padding: 15px 50px;
    `};
  ${({ size }) =>
    size === 'lg' &&
    css`
      padding: 15px 100px;
    `};
  ${({ inverse }) =>
    inverse &&
    css`
      border: 1px solid black;
      background-color: transparent !important;
    `};
  ${({ styles }) => styles}
  &:hover {
    cursor: pointer;
  }
  &:focus {
    outline: none;
  }
`;

export default ({ children, onPress, ...props }: ElementProps) => {
  return (
    <Element {...props} onClick={onPress}>
      {children}
    </Element>
  );
};
