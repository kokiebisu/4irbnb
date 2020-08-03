import React from 'react';
import { css } from 'styled-components';
import theme from 'styled-theming';
import { darken } from 'polished';

// atoms
import { Box, Text, Img } from 'atoms';

// colors
import { colors } from 'styles';

type CardProps = {
  image: string;
  title?: string;
  description?: string;
  subtitle?: string;
  size?: string;
};

export default ({
  image,
  title,
  subtitle,
  description,
  size,
  ...props
}: CardProps) => {
  return (
    <Box styles={extend.wrapper} {...props}>
      <Box styles={extend.img}>
        <Img src={image} alt='card-image' />
      </Box>
      <Box styles={size === 'lg' ? extend.text__lg : extend.text}>
        {title && <Text styles={extend.title}>{title}</Text>}
        {subtitle && <Text styles={extend.subtitle}>{subtitle}</Text>}
        {description && <Text styles={extend.description}>{description}</Text>}
      </Box>
    </Box>
  );
};

const background = theme('mode', {
  light: darken(0.4, colors.white),
  dark: darken(0.8, colors.gray),
});

const primary = theme('mode', {
  light: darken(0.8, colors.gray),
  dark: darken(0.4, colors.white),
});

const secondary = theme('mode', {
  light: colors.gray,
  dark: darken(0.4, colors.white),
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
  text__lg: css`
    width: 50%;
    text-align: left;
    padding: 0 18px 12px 18px;
  `,
  text: css`
    padding: 0 18px 12px 18px;
  `,
  title: css`
    font-weight: 700;
    color: ${primary};
    padding: 4px 0 2px 0;
  `,
  subtitle: css`
    padding: 14px 0;
    color: ${primary};
    font-weight: 500;
    line-height: 1.3;
    font-size: 15px;
  `,
  description: css`
    padding-top: 2px;
    font-size: 13px;
    font-weight: 300;
    color: ${secondary};
    line-height: 1.4;
  `,
};
