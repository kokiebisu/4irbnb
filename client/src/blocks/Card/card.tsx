import React from 'react';
import { css } from 'styled-components';
import theme from 'styled-theming';

// element
import { Box } from '../../elements/Box';
import { Text } from '../../elements/Text';
import { Img } from '../../elements/Img';

// color
import { colorpallete } from '../../styles/colorpallete';

type CardProps = {
  image: string;
  title?: string;
  description: string;
};

export default ({ image, title, description, ...props }: CardProps) => {
  return (
    <Box styles={extend.wrapper} {...props}>
      <Box styles={extend.img}>
        <Img src={image} alt='card-image' />
      </Box>
      <Box styles={extend.text}>
        {title && <Text styles={extend.title}>{title}</Text>}
        <Text styles={extend.description}>{description}</Text>
      </Box>
    </Box>
  );
};

const background = theme('mode', {
  light: colorpallete.white__1,
  dark: colorpallete.gray__8,
});

const primary = theme('mode', {
  light: colorpallete.gray__8,
  dark: colorpallete.white__1,
});

const secondary = theme('mode', {
  light: colorpallete.gray__5,
  dark: colorpallete.white__1,
});

const extend = {
  wrapper: css`
    background-color: ${background};
    border-radius: 16px;
    max-height: min-content;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
  `,
  img: css`
    object-fit: cover;

    & > img {
      border-top-left-radius: 16px;
      border-top-right-radius: 16px;
    }
  `,
  text: css`
    padding: 0 18px 12px 18px;
  `,
  title: css`
    font-weight: 700;
    color: ${primary};
    padding: 4px 0;
  `,
  description: css`
    font-size: 13px;
    font-weight: 300;
    color: ${secondary};
    line-height: 1.4;
  `,
};
