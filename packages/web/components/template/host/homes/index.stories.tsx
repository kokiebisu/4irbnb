import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Template, $Template, TemplateProps } from '@template/host/homes';

export default {
  title: 'Templates/Host/Homes',
  component: Template,
} as Meta;

const TemplateStory: Story<TemplateProps> = (args) => <Template {...args} />;

export const Help = TemplateStory.bind({});
Help.args = {
  variant: $Template.HELP,
};

export const Priority = TemplateStory.bind({});
Priority.args = {
  variant: $Template.PRIORITY,
};

export const Ready = TemplateStory.bind({});
Ready.args = {
  variant: $Template.READY,
};

export const Hosting = TemplateStory.bind({});
Hosting.args = {
  variant: $Template.HOSTING,
};
