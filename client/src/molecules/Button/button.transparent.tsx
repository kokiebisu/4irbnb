import React from 'react';
import { css } from 'styled-components';
import { Button } from 'atoms';
import { colors } from 'styles';
import { CustomProps } from 'molecules/Button';
import theme from 'styled-theming';

export const transparentButtonColors = {
  stroke: theme('mode', {
    light: colors.white,
  }),
  hover: theme('mode', {
    light: 'rgba(190, 190, 190, 0.2)',
  }),
};

const transparentButtonStyles = {
  wrapper: css`
    padding: 15px;
    background-color: transparent;
    border-radius: 24px;
    cursor: pointer;
    &:focus {
      outline: none;
    }
    &:hover {
      background-color: ${transparentButtonColors.hover};
    }
  `,
};

export const globeButtonStyles = {
  flex: css`
    display: flex;
    align-items: center;
  `,
  globe: css`
    position: relative;
    top: 50%;
    margin-right: 6px;
    width: 16px;
    height: 16px;
  `,
  arrow: css`
    width: 10px;
  `,
};

export const hostButtonStyles = {};

export const TransparentButton: React.FC<CustomProps> = ({
  name,
  children,
  ...props
}) => {
  return (
    <Button styles={transparentButtonStyles.wrapper} {...props}>
      {children}
    </Button>
  );
};
