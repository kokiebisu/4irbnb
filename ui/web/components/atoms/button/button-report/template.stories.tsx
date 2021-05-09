import { Story, Meta } from '@storybook/react';
import { ReportButtonTemplate, ReportButtonTemplateProps } from './template';

export default {
  title: 'Atoms/Button',
  component: ReportButtonTemplate,
} as Meta;

const ButtonStory: Story<ReportButtonTemplateProps> = (args) => (
  <ReportButtonTemplate {...args} />
);

export const Report = ButtonStory.bind({});
Report.args = {};
