import { Story, Meta } from '@storybook/react';
import { ActionIcon, ActionIconTypeProps } from '.';
import { IconProps } from '..';

export default {
  title: 'Atoms/Icons/Action',
  component: ActionIcon,
} as Meta;

const size = {
  width: 24,
  height: 24,
};

const IconStory: Story<IconProps & ActionIconTypeProps> = (args) => (
  <div style={{ ...size }}>
    <ActionIcon {...args} />
  </div>
);

const IconBundleStory: Story<{}> = () => (
  <div className="flex items-center flex-wrap">
    {[
      { actionType: 'heart' as const },
      { actionType: 'close' as const },
      { actionType: 'pause' as const },
      { actionType: 'play' as const },
      { actionType: 'top' as const },
      { actionType: 'bottom' as const },
      { actionType: 'left' as const },
      { actionType: 'right' as const },
    ].map((args) => {
      return (
        <div className="mr-2">
          <div className="mb-2" style={{ ...size }}>
            <ActionIcon {...args} />
          </div>
        </div>
      );
    })}
  </div>
);

export const Overview = IconBundleStory.bind({});

export const Heart = IconStory.bind({});
Heart.args = {
  actionType: 'heart',
};

export const Close = IconStory.bind({});
Close.args = {
  actionType: 'close',
};

export const Play = IconStory.bind({});
Play.args = {
  actionType: 'play',
};

export const Pause = IconStory.bind({});
Pause.args = {
  actionType: 'pause',
};

export const ChevronTop = IconStory.bind({});
ChevronTop.args = {
  actionType: 'pause',
};

export const ChevronBottom = IconStory.bind({});
ChevronBottom.args = {
  actionType: 'bottom',
};

export const ChevronRight = IconStory.bind({});
ChevronRight.args = {
  actionType: 'right',
};

export const ChevronLeft = IconStory.bind({});
ChevronLeft.args = {
  actionType: 'left',
};
