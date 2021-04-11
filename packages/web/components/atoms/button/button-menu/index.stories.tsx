import React from 'react';
import { Story, Meta } from '@storybook/react';
import { MenuButton, MenuButtonProps } from '.';

export default {
  title: 'Atoms/Button',
  component: MenuButton,
} as Meta;

const ButtonStory: Story<MenuButtonProps> = (args) => <MenuButton {...args} />;

export const Menu = ButtonStory.bind({});
Menu.args = {
  authenticated: false,
  data: {
    imgUrl:
      'https://images.unsplash.com/photo-1562124638-724e13052daf?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8OTV8fGZhY2V8ZW58MHwyfDB8&auto=format&fit=crop&w=500&q=60',
  },
  inverse: false,
};
