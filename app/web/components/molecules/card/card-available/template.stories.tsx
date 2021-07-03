import { Meta, Story } from '@storybook/react';
import { AvailableCardTemplate, AvailableCardTemplateProps } from './template';

export default {
  title: 'Molecules/Card',
  component: AvailableCardTemplate,
} as Meta;

const CardStory: Story<AvailableCardTemplateProps> = (args) => (
  <AvailableCardTemplate {...args} />
);

export const Available = CardStory.bind({});
Available.args = {
  date: 'Tue., Nov. 10',
  from: '1:00 a.m. ',
  to: '3:00 a.m. ',
  standard: 'PST',
  price: 31,
};
Available.decorators = [
  (Story) => (
    <div style={{ maxWidth: 300 }}>
      <Story />
    </div>
  ),
];
