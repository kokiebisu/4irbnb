import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Header, HeaderProps, $Header } from '@header';

export default {
  title: 'Organisms/Header',
  component: Header,
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const HeaderStory: Story<HeaderProps> = (args) => <Header {...args} />;

export const landing = HeaderStory.bind({});
landing.args = {
  variant: $Header.LANDING,
};
landing.argTypes = {
  criteria: {
    control: 'boolean',
  },
};
landing.parameters = {
  storyshots: { disable: true },
};

export const white = HeaderStory.bind({});
white.args = {
  variant: $Header.WHITE,
};

export const details = HeaderStory.bind({});
details.args = {
  variant: $Header.DETAILS,
};

export const homes = HeaderStory.bind({});
homes.args = {
  variant: $Header.HOMES,
};

export const experiences = HeaderStory.bind({});
experiences.args = {
  variant: $Header.EXPERIENCES,
};

export const onlineHost = HeaderStory.bind({});
onlineHost.args = {
  variant: $Header.ONLINEHOST,
};

export const stay = HeaderStory.bind({});
stay.args = {
  variant: $Header.STAY,
};
