import { Meta, Story } from '@storybook/react';
import { MenuBarTemplate, MenuBarTemplateProps } from './template';
import * as content from './content';

export default {
  title: 'Organisms/Bar',
  component: MenuBarTemplate,
} as Meta;

const BarStory: Story<MenuBarTemplateProps> = (args) => (
  <MenuBarTemplate {...args} />
);

export const Menu = BarStory.bind({});
Menu.args = {
  ...content,
};
