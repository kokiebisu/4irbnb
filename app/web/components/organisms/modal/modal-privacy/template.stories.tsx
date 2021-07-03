import React from 'react';
import { Story, Meta } from '@storybook/react';
import { PrivacyModalTemplate, PrivacyModalTemplateProps } from './template';

export default {
  title: 'Organisms/Modal',
  component: PrivacyModalTemplate,
} as Meta;

const ModalStory: Story<PrivacyModalTemplateProps> = (args) => (
  <PrivacyModalTemplate {...args} />
);

export const Privacy = ModalStory.bind({});
Privacy.args = {};
