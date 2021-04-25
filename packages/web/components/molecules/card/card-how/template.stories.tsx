import { Meta, Story } from '@storybook/react';
import { HowCardTemplate, HowCardTemplateProps } from './template';

export default {
  title: 'Design System/Molecules/Card',
  component: HowCardTemplate,
} as Meta;

const CardStory: Story<HowCardTemplateProps> = (args) => (
  <HowCardTemplate {...args} />
);

export const How = CardStory.bind({});
How.args = {
  icon:
    'https://a0.muscache.com/airbnb/static/list_your_space/scenarios-meet-guest-eaa389217c2acc8887e3f88cc197f9fe.png',
  title: 'Qualified guests find your listing',
  description:
    'Anyone who wants to book with you needs to confirm their contact information, provide payment details, and tell you about their trip.',
};
How.decorators = [
  (Story) => (
    <div style={{ maxWidth: 250 }}>
      <Story />
    </div>
  ),
];
