import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import styled, { css } from 'styled-components';
import { Box } from 'atoms';
import { Header } from 'organisms/Header';
import theme from 'styled-theming';
import { colors } from 'styles';

export default {
  title: 'Design Systems/Header',
  component: Header,
} as Meta;

interface Props {
  type: string;
  styles?: any;
}

const fillColor = theme('mode', {
  light: colors.white,
});

const Wrapper = styled(Box)`
  width: calc(100% - 30px);
  margin: 0 auto;
`;

const HeaderTemplate: Story<Props> = ({ ...args }) => (
  <Wrapper>
    <Header {...args} />
  </Wrapper>
);

export const landing = HeaderTemplate.bind({});
landing.args = {
  type: 'landing',
  fillColor,
};
