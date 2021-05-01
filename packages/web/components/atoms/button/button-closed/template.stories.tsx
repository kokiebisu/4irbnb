import { Story, Meta } from '@storybook/react';
import { ClosedButtonTemplate, ClosedButtonTemplateProps } from './template';

export default {
  title: 'Atoms/Button',
  component: ClosedButtonTemplate,
} as Meta;

const ButtonStory: Story<ClosedButtonTemplateProps> = (args) => (
  <ClosedButtonTemplate {...args} />
);

export const Closed = ButtonStory.bind({});
Closed.args = {
  icon: {
    variant: 'action' as const,
    actionType: 'close' as const,
  },
  selected: false,
};
