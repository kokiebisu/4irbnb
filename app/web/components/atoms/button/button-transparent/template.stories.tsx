import { Story, Meta } from '@storybook/react';
import {
  TransparentButtonTemplate,
  TransparentButtonTemplateProps,
} from './template';
import { Icon } from '@atoms';

export default {
  title: 'Atoms/Button/Transparent',
  component: TransparentButtonTemplate,
} as Meta;

const ButtonStory: Story<TransparentButtonTemplateProps> = (args) => (
  <TransparentButtonTemplate {...args} />
);

export const Globe = ButtonStory.bind({});
Globe.args = {
  children: (
    <div className="items-center mr-2">
      <Icon
        variant="general"
        generalType="globe"
        width={16}
        height={16}
        fill="gray"
      />
    </div>
  ),
  onClick: () => alert('Triggered onClick'),
};

export const Host = ButtonStory.bind({});
Host.args = {
  children: <h3 className={`text-sm text-gray-500`}>Become a host</h3>,
  onClick: () => alert('Triggered onClick'),
};
