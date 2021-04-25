import { Meta, Story } from '@storybook/react';
import { TypeStayCardTemplate, TypeStayCardTemplateProps } from './template';

export default {
  title: 'Design System/Molecules/Card',
  component: TypeStayCardTemplate,
} as Meta;

const CardStory: Story<TypeStayCardTemplateProps> = (args) => (
  <TypeStayCardTemplate {...args} />
);

export const TypeStay = CardStory.bind({});
TypeStay.args = {
  title: 'Type',
  imgUrl:
    'https://a0.muscache.com/im/pictures/175f945a-a4ac-416c-bb10-7e49a927c42f.jpg?im_w=720',
};
TypeStay.decorators = [
  (Story) => (
    <div style={{ maxWidth: 300 }}>
      <Story />
    </div>
  ),
];
