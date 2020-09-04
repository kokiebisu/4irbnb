import React from 'react';
import { Text } from 'atoms';
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

export const primaryButtonStyles = {};

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

export interface ButtonProps extends ElementProps, StyledProps {}

export const Button: React.FC<ButtonProps> = ({
  children = <Text>Button</Text>,
  onPress,
  styles = {
    wrapper: css`
      background-color: gray;
    `,
  },
  inverse,
  ...props
}) => {
  console.log();
  return (
    <Element
      styles={
        inverse
          ? [styles.wrapper, styles.inverse]
          : [styles.wrapper, styles.normal]
      }
      {...props}
      onClick={onPress}>
      {children}
    </Element>
  );
};
