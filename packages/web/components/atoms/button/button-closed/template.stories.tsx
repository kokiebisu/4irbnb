import { Story, Meta } from '@storybook/react';
import { ClosedButtonTemplate, ClosedButtonTemplateProps } from './template';

export default {
  title: 'Atoms/Button/Circular',
  component: ClosedButtonTemplate,
} as Meta;

const ButtonStory: Story<ClosedButtonTemplateProps> = (args) => (
  <ClosedButtonTemplate {...args} />
);

export const Close = ButtonStory.bind({});
Close.args = {
  icon: { variant: 'action' as const, actionType: 'close' as const },
  onClick: () => alert('Triggered onClick'),
};

export const Check = ButtonStory.bind({});
Check.args = {
  icon: {
    variant: 'semantic' as const,
    semanticType: 'check' as const,
  },
  onClick: () => alert('Triggered onClick'),
};
