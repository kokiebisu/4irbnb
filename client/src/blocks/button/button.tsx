import React from 'react';
import styled from 'styled-components';
import theme from 'styled-theming';

interface Props {
  onPress: () => void;
  className?: string;
  styles: any;
  size?: any;
}

interface ButtonProps {
  styles: any;
  size?: any;
}

const buttonSize = theme.variants('mode', 'size', {
  sm: { default: '14px 22px' },
  md: { default: '20px 27px' },
  lg: { default: '25px 30px' },
});

const Button = styled.button<ButtonProps>`
  border-radius: 8px;
  font-size: 18px;
  border: none;
  padding: ${buttonSize};
  ${({ styles }) => styles};
`;

Button.defaultProps = {
  size: 'md',
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
