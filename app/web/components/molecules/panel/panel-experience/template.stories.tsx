import { Meta, Story } from '@storybook/react';
import {
  ExperiencePanelTemplate,
  ExperiencePanelTemplateProps,
} from './template';

export default {
  title: 'Molecules/Panel',
  component: ExperiencePanelTemplate,
} as Meta;

const CardStory: Story<ExperiencePanelTemplateProps> = (args) => (
  <ExperiencePanelTemplate {...args} />
);

export const Experience = CardStory.bind({});
Experience.args = {};
