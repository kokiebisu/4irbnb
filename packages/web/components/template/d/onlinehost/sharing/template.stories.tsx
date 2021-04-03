import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Template, $Template, TemplateProps } from '@template/d/onlinehost';

export default {
  title: 'Templates/D/OnlineHosts',
  component: Template,
  argTypes: {
    onClick: { action: 'clicked' },
    type: { control: { disable: true } },
    extendsTo: { control: { disable: true } },
  },
} as Meta;

const TemplateStory: Story<TemplateProps> = (args) => <Template {...args} />;

export const More = TemplateStory.bind({});
More.args = {
  variant: $Template.MORE,
};

export const Sharing = TemplateStory.bind({});
Sharing.args = {
  variant: $Template.SHARING,
};

export const Works = TemplateStory.bind({});
Works.args = {
  variant: $Template.WORKS,
};
