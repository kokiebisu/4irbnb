import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Template, TemplateProps, $Template } from '@template/experiences/id';

export default {
  title: 'Templates/Experiences/ID',
  component: Template,
} as Meta;

const TemplateStory: Story<TemplateProps> = (args) => <Template {...args} />;

export const Experiences = TemplateStory.bind({});
Experiences.args = {
  variant: $Template.EXPERIENCES,
};

export const Participate = TemplateStory.bind({});
Participate.args = {
  variant: $Template.PARTICIPATE,
};

export const Preview = TemplateStory.bind({});
Preview.args = {
  variant: $Template.PREVIEW,
};

export const Description = TemplateStory.bind({});
Description.args = {
  variant: $Template.DESCRIPTION,
};

export const Host = TemplateStory.bind({});
Host.args = {
  variant: $Template.HOST,
};

export const Know = TemplateStory.bind({});
Know.args = {
  variant: $Template.KNOW,
};

export const Reviews = TemplateStory.bind({});
Reviews.args = {
  variant: $Template.REVIEWS,
};
