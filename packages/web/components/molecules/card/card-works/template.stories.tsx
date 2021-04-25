import { Meta, Story } from '@storybook/react';
import { WorksCardTemplate, WorksCardTemplateProps } from './template';

export default {
  title: 'Design System/Molecules/Card',
  component: WorksCardTemplate,
} as Meta;

const CardStory: Story<WorksCardTemplateProps> = (args) => (
  <WorksCardTemplate {...args} />
);

export const Works = CardStory.bind({});
Works.args = {
  imgUrl:
    'https://a0.muscache.com/pictures/54019d2c-f00e-4d2b-9eb2-7b738e6b9eb8.jpg',
  title: 'Design your experience',
  description:
    'All experiences start with our quality standards—expertise, access, and connection. But also think about how to engage with guests online, and minimize the supplies they might need to participate. When you have an idea, start the submission process.',
};
