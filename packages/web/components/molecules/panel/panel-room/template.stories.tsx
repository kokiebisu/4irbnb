import { Meta, Story } from '@storybook/react';
import { RoomPanelTemplate, RoomPanelTemplateProps } from './template';

export default {
  title: 'Molecules/Panel',
  component: RoomPanelTemplate,
} as Meta;

const CardStory: Story<RoomPanelTemplateProps> = (args) => (
  <RoomPanelTemplate {...args} />
);

export const Room = CardStory.bind({});
Room.args = {
  images: [],
};
