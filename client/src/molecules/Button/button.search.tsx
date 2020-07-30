import React from 'react';
import { css } from 'styled-components';

// breakpoints
import { sizes } from '../../styles/breakpoints';

// atoms
import { Icon } from 'atoms/Icon';
import { BaseButton } from 'atoms/Button';
import { Text } from 'atoms/Text';
import { Box } from 'atoms/Box';

// type
import { ButtonProps } from 'molecules/Button/button';

export default ({ name, ...props }: ButtonProps) => {
  return (
    <BaseButton styles={extend.button} {...props}>
      <Box styles={extend.box}>
        <Icon styles={extend.icon} name='search' />
        <Text styles={extend.text}>{name}</Text>
      </Box>
    </BaseButton>
  );
};

const extend = {
  button: css`
    background: -webkit-linear-gradient(
      right,
      rgb(230, 30, 77) 0%,
      rgb(227, 28, 95) 50%,
      rgb(215, 4, 102) 100%
    );
    border: none;
    color: white;
  `,
  box: css`
    display: block;
    @media ${sizes.sm} {
      display: flex;
      align-items: center;
    }
  `,
  icon: css`
    position: relative;
    top: 1.5px;

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
  text: css`
    display: none;
    font-size: 15px;
    letter-spacing: 0.5px;
    font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto,
      Helvetica Neue, sans-serif !important;
    font-weight: 400;
    padding-left: 7px;

    @media ${sizes.sm} {
      display: block;
    }
  `,
};
