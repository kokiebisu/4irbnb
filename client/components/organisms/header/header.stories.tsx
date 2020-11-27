import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Header } from './header.component';
import { ContextProvider } from '../../../context/provider';
import { HeaderProps } from './props';

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

const HeaderStories: Story<HeaderProps> = (args) => <Header {...args} />;

export const transparent = HeaderStories.bind({});
transparent.args = {
  type: 'transparent',
};

export const white = HeaderStories.bind({});
white.args = {
  type: 'white',
};

export const details = HeaderStories.bind({});
details.args = {
  type: 'details',
};

export const homes = HeaderStories.bind({});
homes.args = {
  type: 'homes',
};

export const experiences = HeaderStories.bind({});
experiences.args = {
  type: 'experiences',
};

export const onlineHost = HeaderStories.bind({});
onlineHost.args = {
  type: 'onlinehost',
};

export const stay = HeaderStories.bind({});
stay.args = {
  type: 'stay',
};
