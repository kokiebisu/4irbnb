import React from 'react';
import styled, { css } from 'styled-components';
import theme from 'styled-theming';

interface Props {
  onPress: () => void;
  className?: string;
  styles?: any;
  sm?: boolean;
  md?: boolean;
  lg?: boolean;
}

interface ButtonProps {
  styles?: any;
  sm?: boolean;
  md?: boolean;
  lg?: boolean;
}

const Button = styled.button<ButtonProps>`
  border-radius: 8px;
  font-size: 18px;
  border: none;
  ${({ styles }) => styles};
  ${({ sm }) =>
    sm &&
    css`
      padding: 14px 22px;
    `}
`;

Button.defaultProps = {
  md: true,
};

export const BaseButton: React.FC<Props> = ({
  onPress,
  children,
  ...props
}) => {
  return (
    <Button {...props} onClick={onPress}>
      {children}
    </Button>
  );
};
