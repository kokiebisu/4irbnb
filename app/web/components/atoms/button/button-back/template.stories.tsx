import { Story, Meta } from '@storybook/react';
import { BackButtonTemplate, BackButtonTemplateProps } from './template';

export default {
  title: 'Atoms/Button',
  component: BackButtonTemplate,
} as Meta;

const ButtonStory: Story<BackButtonTemplateProps> = (args) => (
  <BackButtonTemplate {...args} />
);

export const Back = ButtonStory.bind({});
Back.args = {
  onClick: () => alert('Triggered onClick'),
};
