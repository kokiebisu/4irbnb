import React from 'react';
import styled, { css } from 'styled-components';
import theme from 'styled-theming';
import { darken } from 'polished';
import { Box, Text, Img } from 'atoms';
import { colors } from 'styles';

type CardProps = {
  image: string;
  title?: string;
  description?: string;
  subtitle?: string;
  size?: string;
};

const background = theme('mode', {
  light: colors.white,
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

const shadow = theme('mode', {
  light: 'rgba(0, 0, 0, 0.15)',
  dark: 'rgba(0, 0, 0, 0.15)',
});

const Wrapper = styled(Box)`
  height: 100%;
  background-color: ${background};
  border-radius: 16px;
  box-shadow: ${shadow} 0px 2px 8px;
`;

const ImageWrapper = styled(Box)`
  object-fit: cover;

  & > img {
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
  }
`;

const Content = styled(Box)`
  &.large {
    width: 50%;
    text-align: left;
    padding: 0 18px 12px 18px;
  }
  &.normal {
    padding: 0 18px 12px 18px;
  }
`;

const extend = {
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

export default ({
  image,
  title,
  subtitle,
  description,
  size,
  ...props
}: CardProps) => {
  return (
    <Wrapper {...props}>
      <ImageWrapper>
        <Img src={image} alt='card-image' />
      </ImageWrapper>
      <Content className={size === 'lg' ? 'large' : 'normal'}>
        {title && <Text styles={extend.title}>{title}</Text>}
        {subtitle && <Text styles={extend.subtitle}>{subtitle}</Text>}
        {description && <Text styles={extend.description}>{description}</Text>}
      </Content>
    </Wrapper>
  );
};
