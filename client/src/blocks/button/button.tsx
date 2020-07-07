import React from 'react';
import styled, { css } from 'styled-components';
import { ButtonProps } from './interface';

interface StylesProps {
  styles?: any;
  sm?: boolean;
  md?: boolean;
  lg?: boolean;
}

const Button = styled.button<StylesProps>`
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

export default ({ onPress, children, ...props }: ButtonProps) => {
  return (
    <Button {...props} onClick={onPress}>
      {children}
    </Button>
  );
};
