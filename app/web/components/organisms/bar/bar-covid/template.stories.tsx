import { Meta, Story } from '@storybook/react';
import { CovidBarTemplate, CovidBarTemplateProps } from './template';

export default {
  title: 'Organisms/Bar',
  component: CovidBarTemplate,
} as Meta;

const BarStory: Story<CovidBarTemplateProps> = (args) => (
  <CovidBarTemplate {...args} />
);

export const Covid = BarStory.bind({});
Covid.args = {};
