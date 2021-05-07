import React from 'react';
import { Story, Meta } from '@storybook/react';
import { GlobeModalTemplate, GlobeModalTemplateProps } from './template';

export default {
  title: 'Organisms/Modal',
  component: GlobeModalTemplate,
} as Meta;

const ModalStory: Story<GlobeModalTemplateProps> = (args) => (
  <GlobeModalTemplate {...args} />
);

export const Globe = ModalStory.bind({});
Globe.args = {};
