import { Story, Meta } from '@storybook/react';
import { PrivacyButtonTemplate, PrivacyButtonTemplateProps } from './template';

export default {
  title: 'Atoms/Button',
  component: PrivacyButtonTemplate,
} as Meta;

const ButtonStory: Story<PrivacyButtonTemplateProps> = (args) => (
  <PrivacyButtonTemplate {...args} />
);

export const Privacy = ButtonStory.bind({});
Privacy.args = {
  title: 'Button',
  inverse: false,
};
