import React from 'react';
import styled, { css } from 'styled-components';

interface Props {
  onPress: () => void;
  className?: string;
  styles: any;
  size: number;
}

interface ButtonProps {
  styles: any;
  size: number;
}

export const BaseButton: React.FC<Props> = ({
  onPress,
  children,
  ...props
}) => {
  const Button = styled.button<ButtonProps>`
    border-radius: 8px;
    font-size: 18px;
    border: none;
    ${props.styles}
    ${({ size }) =>
      (size === 3 &&
        css`
          padding: 14px 22px;
        `) ||
      (size === 5 &&
        css`
          padding: 15px;
        `) ||
      (size === 7 &&
        css`
          padding: 20px;
        `)}
  `;

  return (
    <Button {...props} onClick={onPress}>
      {children}
    </Button>
  );
};
