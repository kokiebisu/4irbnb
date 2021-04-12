import { Story, Meta } from '@storybook/react';
import { ReportButton, ReportButtonProps } from '.';

export default {
  title: 'Atoms/Button',
  component: ReportButton,
} as Meta;

const ButtonStory: Story<ReportButtonProps> = (args) => (
  <ReportButton {...args} />
);

export const Report = ButtonStory.bind({});
Report.args = {};
