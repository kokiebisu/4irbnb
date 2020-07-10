import React from 'react';
import styled, { css } from 'styled-components';

export interface ButtonProps {
  styles?: any;
  sm?: boolean;
  md?: boolean;
  lg?: boolean;
  name?: string;
  children?: React.ReactNode;
  inverse?: boolean;
  onPress: () => void;
}

interface ElementProps {
  styles?: any;
  sm?: boolean;
  md?: boolean;
  lg?: boolean;
}

const Element = styled.button<ElementProps>`
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
`;

export const Button: React.FC<ButtonProps> = ({
  onPress,
  children,
  ...props
}) => {
  return (
    <Element {...props} onClick={onPress}>
      {children}
    </Element>
  );
};
