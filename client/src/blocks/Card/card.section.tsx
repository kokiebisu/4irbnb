import React from 'react';
import { css } from 'styled-components';
import theme from 'styled-theming';

// element
import { Box } from '../../elements/Box';

// color
import { colorpallete } from '../../styles/colorpallete';

type CardProps = {
  title?: string;
  description?: string;
  option?: string;
};

export default ({ title, description, option, ...props }: CardProps) => {
  return (
    <Box styles={extend.wrapper} {...props}>
      <Box styles={extend.inner}>
        <Box styles={extend.text}>
          <Box styles={extend.title}>{title}</Box>
          <Box styles={extend.description}>{description}</Box>
          <Box styles={extend.option}>{option}</Box>
        </Box>
      </Box>
    </Box>
  );
};

const background = theme('mode', {
  light: colorpallete.black,
  dark: colorpallete.white,
});

const primary = theme('mode', {
  light: colorpallete.white,
  dark: colorpallete.black,
});

const extend = {
  wrapper: css`
    width: 100%;
    background-color: ${background};
    border-radius: 16px;
  `,
  inner: css`
    padding: 32px;
  `,
  text: css`
    padding-top: 56px;
    width: 100%;
    max-width: 360px;
    color: ${primary};
  `,
  title: css`
    font-size: 22px;
    font-weight: 700;
    margin-bottom: 8px;
    line-height: 1.3;
  `,
  description: css`
    line-height: 1.2;
  `,
  option: css`
    font-weight: 700;
    margin-top: 12px;
  `,
};
