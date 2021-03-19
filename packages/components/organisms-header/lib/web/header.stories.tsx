import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Header, HeaderProps, $HEADER } from '..';

export default {
  title: 'Organisms/Header',
  component: Header,
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const TemplateStory: Story<HeaderProps> = (args) => <Header {...args} />;

export const landing = TemplateStory.bind({});
landing.args = {
  variant: $HEADER.landing,
};
landing.argTypes = {
  criteria: {
    control: 'boolean',
  },
};
landing.parameters = {
  storyshots: { disable: true },
};

export const white = TemplateStory.bind({});
white.args = {
  variant: $HEADER.white,
};

export const details = TemplateStory.bind({});
details.args = {
  variant: $HEADER.details,
};

export const homes = TemplateStory.bind({});
homes.args = {
  variant: $HEADER.homes,
};

export const experiences = TemplateStory.bind({});
experiences.args = {
  variant: $HEADER.experiences,
};

export const onlineHost = TemplateStory.bind({});
onlineHost.args = {
  variant: $HEADER.onlinehost,
};

export const stay = TemplateStory.bind({});
stay.args = {
  variant: $HEADER.stay,
};
