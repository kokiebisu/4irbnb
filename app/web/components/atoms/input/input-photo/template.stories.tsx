import { Story, Meta } from '@storybook/react';
import { PhotoInputTemplate, PhotoInputTemplateProps } from './template';

export default {
  title: 'Atoms/Input',
  component: PhotoInputTemplate,
} as Meta;

const InputStory: Story<PhotoInputTemplateProps> = (args) => (
  <PhotoInputTemplate {...args} />
);

export const Photo = InputStory.bind({});
Photo.args = {
  onChange: () => alert('on change'),
};
