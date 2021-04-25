import { Meta, Story } from '@storybook/react';
import { StartingCardTemplate, StartingCardTemplateProps } from './template';

export default {
  title: 'Design System/Molecules/Card',
  component: StartingCardTemplate,
} as Meta;

const CardStory: Story<StartingCardTemplateProps> = (args) => (
  <StartingCardTemplate {...args} />
);

export const Starting = CardStory.bind({});
Starting.args = {
  ratings: 5,
  reviews: 100,
  country: 'Italy',
  title: 'Title',
  minCost: 56,
  slots: ['11:30', '3:30'],
  imgUrl:
    'https://a0.muscache.com/im/pictures/lombard/MtTemplate-1652939-media_library/original/a7f906fc-f4c8-4b27-a5e2-b783115350e4.jpeg?aki_policy=poster',
  videoUrl:
    'https://a0.muscache.com/v/6f/00/6f00cc13-2903-5153-b36d-07cc55e453b3/6f00cc1329035153b36d07cc55e453b3_600k_1.mp4?imformat=h265&imwidth=400',
  handleIsHoveredChange: () => alert('handleIsHoveredChange'),
  isHovered: false,
};
Starting.decorators = [
  (Story) => (
    <div style={{ maxWidth: 500 }}>
      <Story />
    </div>
  ),
];
