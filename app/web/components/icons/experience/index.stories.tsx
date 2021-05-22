import { Story, Meta } from '@storybook/react';
import {
  ExperienceIconTemplateProps,
  ExperienceIconTemplate,
} from './template';

export default {
  title: 'Atoms/Icons/Experience',
  component: ExperienceIconTemplate,
} as Meta;

const size = {
  width: 24,
  height: 24,
};

const IconStory: Story<ExperienceIconTemplateProps> = (args) => (
  <div style={{ ...size }}>
    <ExperienceIconTemplate {...args} />
  </div>
);
const IconBundleStory: Story<ExperienceIconTemplateProps> = () => (
  <div className="flex items-center flex-wrap">
    {[
      { title: 'time' as const },
      { title: 'people' as const },
      { title: 'language' as const },
      { title: 'computer' as const },
      { title: 'smile' as const },
      { title: 'activity' as const },
    ].map((icon) => {
      return (
        <div className="mr-2">
          <div className="mb-2" style={{ ...size }}>
            <ExperienceIconTemplate experienceType={icon.title} />
          </div>
        </div>
      );
    })}
  </div>
);

export const Overview = IconBundleStory.bind({});

export const Time = IconStory.bind({});
Time.args = {
  experienceType: 'time',
};

export const People = IconStory.bind({});
People.args = {
  experienceType: 'people',
};

export const Language = IconStory.bind({});
Language.args = {
  experienceType: 'language',
};

export const Computer = IconStory.bind({});
Computer.args = {
  experienceType: 'computer',
};

export const Smile = IconStory.bind({});
Smile.args = {
  experienceType: 'smile',
};

export const Activity = IconStory.bind({});
Activity.args = {
  experienceType: 'activity',
};
