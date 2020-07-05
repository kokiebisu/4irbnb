import React from 'react';
import styled, { css } from 'styled-components';

interface Props {
  onPress: () => void;
  className?: string;
  size: number;
}

interface ButtonProps {
  size: number;
}

const Button = styled.button<ButtonProps>`
  border-radius: 8px;
  font-size: 18px;
  border: none;

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

export const BaseButton: React.FC<Props> = ({
  className,
  onPress,
  children,
  size,
}) => {
  return (
    <Button size={size} className={className} onClick={onPress}>
      {children}
    </Button>
  );
};
