import React from 'react';
import styled, { css } from 'styled-components';

interface Props {
  children: string;
  onPress: () => void;
  className?: string;
  size: number;
}

interface ButtonProps {
  size: number;
}

const Button = styled.button<ButtonProps>`
  font-family: 'Airbnb-Cereal';
  border-radius: 5px;
  font-size: 18px;
  border: none;

  ${({ size }) =>
    (size === 3 &&
      css`
        padding: 10px;
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
