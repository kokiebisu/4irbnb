import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Header, HeaderProps } from './header.component';
import { ContextProvider } from '../../../context/provider';

export default {
  title: 'Design System/Organisms/Header',
  component: Header,
  argTypes: { onPress: { action: 'clicked' } },
  decorators: [
    (Story) => (
      <ContextProvider>
        <Story />
      </ContextProvider>
    ),
  ],
} as Meta;

const HeaderTemplate: Story<HeaderProps> = (args) => <Header {...args} />;

export const landing = HeaderTemplate.bind({});
landing.args = {
  type: 'landing',
};
