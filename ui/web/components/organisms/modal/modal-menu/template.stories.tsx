import React from 'react';
import { Story, Meta } from '@storybook/react';
import { MenuModalTemplate, MenuModalTemplateProps } from './template';

export default {
  title: 'Organisms/Modal',
  component: MenuModalTemplate,
} as Meta;

const ModalStory: Story<MenuModalTemplateProps> = (args) => (
  <MenuModalTemplate {...args} />
);

export const Menu = ModalStory.bind({});
Menu.args = {};
