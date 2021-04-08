import React from 'react';
import { Story, Meta } from '@storybook/react';
import { SemanticIcon, SemanticIconTypeProps } from '.';
import { IconProps, IconPropsWithType } from '..';

export default {
  title: 'Atoms/Icons/Semantic',
  component: SemanticIcon,
} as Meta;

const size = {
  width: 24,
  height: 24,
};

const IconStory: Story<IconPropsWithType> = (args) => (
  <div style={{ ...size }}>
    <SemanticIcon {...args} />
  </div>
);
const IconBundleStory: Story<IconProps & SemanticIconTypeProps> = () => (
  <div className="flex items-center flex-wrap">
    {[
      { semanticType: 'exclamation' as const },
      { semanticType: 'warning' as const },
      { semanticType: 'plus' as const },
      { semanticType: 'minus' as const },
      { semanticType: 'check' as const },
      { semanticType: 'check' as const, circled: true },
      { semanticType: 'check' as const, inversed: true },
    ].map((args) => {
      return (
        <div className="mr-2">
          <div className="mb-2" style={{ ...size }}>
            <SemanticIcon {...args} />
          </div>
        </div>
      );
    })}
  </div>
);

export const Overview = IconBundleStory.bind({});

export const Exclamation = IconStory.bind({});
Exclamation.args = {
  semanticType: 'exclamation',
};

export const Warning = IconStory.bind({});
Warning.args = {
  semanticType: 'warning',
};

export const Minus = IconStory.bind({});
Minus.args = {
  semanticType: 'minus',
};

export const Plus = IconStory.bind({});
Plus.args = {
  semanticType: 'plus',
};

export const Check = IconStory.bind({});
Check.args = {
  semanticType: 'check',
};

export const CheckCircled = IconStory.bind({});
CheckCircled.args = {
  semanticType: 'check',
  circled: true,
};

export const CheckInversed = IconStory.bind({});
CheckInversed.args = {
  semanticType: 'check',
  inversed: true,
};
