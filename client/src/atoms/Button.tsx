import React from 'react';
import styled, { css } from 'styled-components';

interface ElementProps {
  styles?: any;
  sm?: boolean;
  md?: boolean;
  lg?: boolean;
  name?: string;
  children?: React.ReactNode;
  inverse?: boolean;
  onPress: () => void;
}

interface StyledProps {
  styles?: any;
  sm?: boolean;
  md?: boolean;
  lg?: boolean;
  inverse?: boolean;
}

const Element = styled.button<StyledProps>`
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
`;

export default ({ onPress, children, ...props }: ElementProps) => {
  return (
    <Element {...props} onClick={onPress}>
      {children}
    </Element>
  );
};
