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
  size?: 'small' | 'medium' | 'large';
  inverse?: boolean;
}

const Element = styled(motion.button)<StyledProps>`
  border-radius: 8px;
  font-size: 18px;
  border: none;
  ${({ styles }) => styles};
  ${({ size }) =>
    size === 'small' &&
    css`
      padding: 15px 22px;
    `};
  ${({ size }) =>
    size === 'medium' &&
    css`
      padding: 15px 50px;
    `};
  ${({ size }) =>
    size === 'large' &&
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

export default ({
  size = 'medium',
  children,
  onPress = () => console.log('hello'),
  ...props
}: ElementProps) => {
  return (
    <Element size={size} {...props} onClick={onPress}>
      {children}
    </Element>
  );
};

export type CustomProps = {
  type?: string;
  onPress: () => void;
  size?: 'small' | 'medium' | 'large';
  inverse?: boolean;
  name?: string;
};
