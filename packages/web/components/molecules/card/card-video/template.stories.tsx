import { Meta, Story } from '@storybook/react';
import { VideoCardTemplate, VideoCardTemplateProps } from './template';

export default {
  title: 'Design System/Molecules/Card',
  component: VideoCardTemplate,
} as Meta;

const CardStory: Story<VideoCardTemplateProps> = (args) => (
  <VideoCardTemplate {...args} />
);

export const Video = CardStory.bind({});
Video.args = {
  imgUrl:
    'https://a0.muscache.com/im/pictures/lombard/MtTemplate-1652939-media_library/original/a7f906fc-f4c8-4b27-a5e2-b783115350e4.jpeg?aki_policy=poster',
  videoUrl:
    'https://a0.muscache.com/v/6f/00/6f00cc13-2903-5153-b36d-07cc55e453b3/6f00cc1329035153b36d07cc55e453b3_600k_1.mp4?imformat=h265&imwidth=400',
  ratings: 5.0,
  number_of_reviews: 100,
  country: 'Country',
  title: 'Title',
  cost: 10,
};
