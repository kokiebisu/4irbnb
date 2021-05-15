import { Story, Meta } from '@storybook/react';
import { KnowBulletTemplate, KnowBulletTemplateProps } from './template';

export default {
  component: KnowBulletTemplate,
  title: 'Atoms/Bullet',
} as Meta;

const KnowBulletTemplateStory: Story<KnowBulletTemplateProps> = (args) => (
  <KnowBulletTemplate {...args} />
);
export const Know = KnowBulletTemplateStory.bind({});
Know.args = {
  knowType: 'checkin',
  checkin: { min: '10:00am', max: '12:00pm' },
  checkout: '4:00pm',
};
