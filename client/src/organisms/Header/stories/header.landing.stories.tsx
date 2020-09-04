import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Header } from 'organisms/Header';
import { landingHeaderStyles } from 'organisms/Header/styles/header.landing.styles';

export default {
  title: 'Design Systems/Header',
  component: Header,
} as Meta;

interface Props {
  type: string;
  styles?: any;
}

const HeaderTemplate: Story<Props> = ({ ...args }) => <Header {...args} />;

export const landing = HeaderTemplate.bind({});
landing.args = {
  styles: landingHeaderStyles,
  type: 'landing',
};
