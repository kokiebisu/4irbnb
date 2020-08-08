import React from 'react';
import { css } from 'styled-components';

// atoms
import { Icon, Button, Text, Box } from 'atoms';

// type
import { CustomProps } from 'molecules/Button';
import { darken, lighten } from 'polished';
import theme from 'styled-theming';
import { colors } from 'styles';

export default ({ name, ...props }: CustomProps) => {
  return (
    <Button styles={extend.wrapper} {...props}>
      <Box styles={extend.content}>
        <Icon styles={extend.icon} name='Search' />
      </Box>
    </Button>
  );
};

const backgroundLight = theme('mode', {
  light: lighten(0.2, colors.pink),
});

const extend = {
  wrapper: css`
    background-color: #ff385c;
    border: none;
    padding: 8px;
    color: white;
    border-radius: 50%;
    transition: 0.8s;
    &:hover {
      background-color: rgb(215, 4, 102);
    }
  `,
  content: css`
    height: 32px;
    width: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  icon: css`
    position: relative;

    & svg {
      width: 14px;
      height: 14px;
      stroke: white;
      path {
        fill: white;
        stroke-width: 2;
      }
    }
  `,
};
