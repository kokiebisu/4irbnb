import React from 'react';
import styled, { css } from 'styled-components';
import { Box, Icon, Button } from 'atoms';
import { colors } from 'styles';
import { CustomProps } from 'molecules/Button';
import theme from 'styled-theming';
import { lighten } from 'polished';

const menuButtonColors = {
  background: theme('mode', {
    light: colors.white,
  }),
  content: theme('mode', {
    light: colors.gray,
  }),
  border: theme('mode', {
    light: lighten(0.4, colors.gray),
  }),
};

const menuButtonStyles = {
  wrapper: css`
    background-color: ${menuButtonColors.background};
    border-radius: 48px;
    padding: 5px 6px 5px 12px;
    transition: 0.2s ease-in;
    border: 1px solid ${menuButtonColors.border};
    &:hover {
      box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
    }
  `,
  flex: css`
    display: flex;
    align-items: center;
  `,
  icon: css`
    svg {
      width: 100%;
      height: 100%;
      path {
        fill: ${menuButtonColors.content};
      }
    }
  `,
  bars: css`
    margin-right: 12px;
    height: 15px;
    width: 17px;
  `,
  avatar: css`
    height: 32px;
    width: 32px;
  `,
};

export const MenuButton: React.FC<CustomProps> = ({ name, ...props }) => {
  return (
    <Button styles={menuButtonStyles.wrapper} {...props}>
      <Box styles={menuButtonStyles.flex}>
        <Icon
          styles={[...menuButtonStyles.bars, ...menuButtonStyles.icon]}
          name='Bars'
        />
        <Icon
          styles={[...menuButtonStyles.avatar, ...menuButtonStyles.icon]}
          name='Avatar'
        />
      </Box>
    </Button>
  );
};
