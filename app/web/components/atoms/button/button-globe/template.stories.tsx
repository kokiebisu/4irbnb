import { Story, Meta } from '@storybook/react';
import { GlobeButtonTemplate, GlobeButtonTemplateProps } from './template';

export default {
  title: 'Atoms/Button',
  component: GlobeButtonTemplate,
} as Meta;

const ButtonStory: Story<GlobeButtonTemplateProps> = (args) => (
  <GlobeButtonTemplate {...args} />
);

export const Globe = ButtonStory.bind({});
Globe.args = {
  language: 'English',
  region: 'Vancouver',
  selected: false,
};
