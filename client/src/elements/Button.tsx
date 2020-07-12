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
`;

export const BaseButton: React.FC<ElementProps> = ({
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
