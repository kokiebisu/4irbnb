import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Panel, PanelProps, $Panel } from '@panel';

export default {
  title: 'Molecules/Panel',
  component: Panel,
} as Meta;

const PanelStory: Story<PanelProps> = (args) => <Panel {...args} />;

export const Experience = PanelStory.bind({});
Experience.args = {
  variant: $Panel.EXPERIENCE,
};

export const Room = PanelStory.bind({});
Room.args = {
  variant: $Panel.ROOM,
};
