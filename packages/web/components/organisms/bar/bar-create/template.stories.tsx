import { Meta, Story } from '@storybook/react';
import { CreateBarTemplate, CreateBarTemplateProps } from './template';
import * as mockData from './mock';

export default {
  title: 'Organisms/Bar',
  component: CreateBarTemplate,
} as Meta;

const BarStory: Story<CreateBarTemplateProps> = (args) => (
  <CreateBarTemplate {...args} />
);

export const Create = BarStory.bind({});
Create.args = {
  ...mockData,
};
