import { Story, Meta } from '@storybook/react';
import { MenuButtonTemplate, MenuButtonTemplateProps } from './template';

export default {
  title: 'Atoms/Button',
  component: MenuButtonTemplate,
} as Meta;

const ButtonStory: Story<MenuButtonTemplateProps> = (args) => (
  <MenuButtonTemplate {...args} />
);

export const Menu = ButtonStory.bind({});
Menu.args = {
  authenticated: false,
  imgUrl:
    'https://images.unsplash.com/photo-1562124638-724e13052daf?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8OTV8fGZhY2V8ZW58MHwyfDB8&auto=format&fit=crop&w=500&q=60',
  inverse: false,
  onClick: () => alert('Triggered onClick'),
};
