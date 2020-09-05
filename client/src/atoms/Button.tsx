import React from 'react';
import { Text } from 'atoms';
import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

interface ElementProps {
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
  background-color: gray;
  ${({ size }) =>
    size === 'sm' &&
    css`
      padding: 8px 14px;
      font-size: 14px;
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
      background-color: transparent;
    `};
  ${({ styles }) => styles}
  &:hover {
    cursor: pointer;
  }
  &:focus {
    outline: none;
  }
`;

export interface ButtonProps extends ElementProps, StyledProps {}

export const Button: React.FC<ButtonProps> = ({
  children = <Text>Button</Text>,
  onPress,
  styles,
  ...props
}) => {
  return (
    <Element styles={styles && styles.wrapper} {...props} onClick={onPress}>
      {children}
    </Element>
  );
};
