import { Story, Meta } from '@storybook/react';
import { ProfileIconTemplate, ProfileIconTemplateProps } from './template';

export default {
  title: 'Atoms/Icons/Profile',
  component: ProfileIconTemplate,
} as Meta;

const size = {
  width: 24,
  height: 24,
};

const IconStory: Story<ProfileIconTemplateProps> = (args) => (
  <div style={{ ...size }}>
    <ProfileIconTemplate {...args} />
  </div>
);
const IconBundleStory: Story<ProfileIconTemplateProps> = () => (
  <div className="flex items-center flex-wrap">
    {[
      { profileType: 'avatar' as const },
      { profileType: 'star' as const },
      { profileType: 'superhost' as const },
    ].map((args) => {
      return (
        <div className="mr-2">
          <div className="mb-2" style={{ ...size }}>
            <ProfileIconTemplate {...args} />
          </div>
        </div>
      );
    })}
  </div>
);

export const Overview = IconBundleStory.bind({});

export const Avatar = IconStory.bind({});
Avatar.args = {
  profileType: 'avatar',
};
