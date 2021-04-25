import { Meta, Story } from '@storybook/react';
import { PaginateBarTemplate, PaginateBarTemplateProps } from './template';

export default {
  title: 'Organisms/Bar',
  component: PaginateBarTemplate,
} as Meta;

const BarStory: Story<PaginateBarTemplateProps> = (args) => (
  <PaginateBarTemplate {...args} />
);

export const Paginate = BarStory.bind({});
Paginate.args = {
  page: 1,
  total: 15,
};
