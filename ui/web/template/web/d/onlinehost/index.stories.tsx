import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Template, $Template, TemplateProps } from '.';

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

export const Back = TemplateStory.bind({});
Back.args = {
  variant: $Template.BACK,
};

export const Sharing = TemplateStory.bind({});
Sharing.args = {
  variant: $Template.SHARING,
};

export const Works = TemplateStory.bind({});
Works.args = {
  variant: $Template.WORKS,
};

export const Faq = TemplateStory.bind({});
Faq.args = {
  variant: $Template.FAQ,
};

export const Banner = TemplateStory.bind({});
Banner.args = {
  variant: $Template.BANNER,
};
