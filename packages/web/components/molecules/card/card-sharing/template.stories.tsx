import { Meta, Story } from '@storybook/react';
import { SharingCardTemplate, SharingCardTemplateProps } from './template';

export default {
  title: 'Design System/Molecules/Card',
  component: SharingCardTemplate,
} as Meta;

const CardStory: Story<SharingCardTemplateProps> = (args) => (
  <SharingCardTemplate {...args} />
);

export const Sharing = CardStory.bind({});
Sharing.args = {
  imgUrl:
    'https://a0.muscache.com/pictures/18518c4e-5c84-43f3-91b0-485207a931c0.jpg',
  title: 'Secrets of Magic',
  description:
    'Part show and part masterclass, guests learn magic psychology and tricks they can do at home.',
};
Sharing.decorators = [
  (Story) => (
    <div style={{ maxWidth: 300 }}>
      <Story />
    </div>
  ),
];
