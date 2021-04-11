import React from 'react';
import { Story, Meta } from '@storybook/react';
import { LinkButton, LinkButtonProps } from '.';

export default {
  title: 'Atoms/Button',
  component: LinkButton,
} as Meta;

const ButtonStory: Story<LinkButtonProps> = (args) => <LinkButton {...args} />;

export const Link = ButtonStory.bind({});
Link.args = {};
