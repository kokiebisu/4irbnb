import { Meta, Story } from '@storybook/react';
import { HostingCardTemplate, HostingCardTemplateProps } from './template';

export default {
  title: 'Design System/Molecules/Card',
  component: HostingCardTemplate,
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 300 }}>
        <Story />
      </div>
    ),
  ],
} as Meta;

const CardStory: Story<HostingCardTemplateProps> = (args) => (
  <HostingCardTemplate {...args} />
);

export const Hosting = CardStory.bind({});
Hosting.args = {
  imgUrl:
    'https://a0.muscache.com/im/pictures/969a398f-5131-4c7c-af87-62fbf39f9854.jpg?im_q=highq&im_w=480',
  title: 'Choose your requirements',
  description:
    'Decide how many people can stay and for how long. Set house rules that guests must follow when staying at your place.',
};
