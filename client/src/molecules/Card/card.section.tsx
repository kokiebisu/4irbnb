import React from 'react';
import styled, { css } from 'styled-components';
import theme from 'styled-theming';
import { Text } from 'atoms';
import { Box } from 'atoms';
import { colors } from 'styles';

type CardProps = {
  title?: string;
  description?: string;
  option?: string;
};

const background = theme('mode', {
  light: colors.black,
  dark: colors.white,
});

const primary = theme('mode', {
  light: colors.white,
  dark: colors.black,
});

const Wrapper = styled(Box)`
  width: 100%;
  background-color: ${background};
  border-radius: 16px;
`;

const Inner = styled(Box)`
  padding: 32px;
`;

const Content = styled(Box)`
  padding-top: 56px;
  width: 100%;
  max-width: 360px;
  color: ${primary};
`;

const Title = styled(Text)`
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 8px;
  line-height: 1.3;
`;

const Description = styled(Text)`
  line-height: 1.2;
`;

const Option = styled(Text)`
  font-weight: 700;
  margin-top: 12px;
`;

export default ({ title, description, option, ...props }: CardProps) => {
  return (
    <Wrapper {...props}>
      <Inner>
        <Content>
          <Title>{title}</Title>
          <Description>{description}</Description>
          <Option>{option}</Option>
        </Content>
      </Inner>
    </Wrapper>
  );
};
