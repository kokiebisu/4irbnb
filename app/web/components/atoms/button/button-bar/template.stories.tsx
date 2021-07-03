import { Icon } from '@atoms';
import { Story, Meta } from '@storybook/react';
import { BarButtonTemplate, BarButtonTemplateProps } from './template';

const items = {
  explore: (
    <Icon
      variant="general"
      generalType="magnifyGlass"
      stroke="#737373"
      strokeWidth={4.5}
      width={25}
      height={25}
    />
  ),

  saved: (
    <Icon
      variant="semantic"
      semanticType="saved"
      width={25}
      height={25}
      fill="#737373"
    />
  ),

  login: (
    <Icon
      variant="general"
      generalType="login"
      width={25}
      height={25}
      fill="#737373"
    />
  ),
};

export default {
  title: 'Atoms/Button',
  component: BarButtonTemplate,
} as Meta;

const ButtonStory: Story<BarButtonTemplateProps> = (args) => (
  <BarButtonTemplate {...args} />
);

export const Bar = ButtonStory.bind({});
Bar.args = {
  selected: false,
  icon: (
    <Icon
      variant="general"
      generalType="magnifyGlass"
      stroke="#737373"
      strokeWidth={4}
      width={25}
      height={25}
    />
  ),
  name: 'Explore',
  onClick: () => alert('Triggered onClick'),
};

Bar.argTypes = {
  icon: {
    options: Object.keys(items),
    mapping: items,
    control: {
      type: 'select',
      labels: {
        explore: 'Explore',
        saved: 'Saved',
        login: 'Login',
      },
    },
  },
};
