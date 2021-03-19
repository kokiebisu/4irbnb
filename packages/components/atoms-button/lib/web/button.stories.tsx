import React from 'react';
import { Button, $BUTTON, ButtonProps } from '..';
import { Story, Meta } from '@storybook/react';

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    variant: {
      control: {
        disable: true,
      },
    },
  },
} as Meta;

const TemplateStory: Story<ButtonProps> = (args) => <Button {...args} />;

export const Auth = TemplateStory.bind({});
Auth.args = {
  variant: $BUTTON.auth,
  onClick() {
    alert('Auth Button Pressed');
  },
};

export const Back = TemplateStory.bind({});
Back.args = {
  variant: $BUTTON.back,
  onClick() {
    alert('Back Button Pressed');
  },
};

export const Banner = TemplateStory.bind({});
Banner.args = {
  variant: $BUTTON.banner,
  onClick() {
    alert('Banner Button Pressed');
  },
};

export const Bar = TemplateStory.bind({});
Bar.args = {
  variant: $BUTTON.bar,
  onClick() {
    alert('Bar Button Pressed');
  },
};

export const Border = TemplateStory.bind({});
Border.args = {
  variant: $BUTTON.border,
  onClick() {
    alert('Border Button Pressed');
  },
};

export const Calendar = TemplateStory.bind({});
Calendar.args = {
  variant: $BUTTON.calendar,
  onClick() {
    alert('Calendar Button Pressed');
  },
};

export const Closed = TemplateStory.bind({});
Closed.args = {
  variant: $BUTTON.closed,
  onClick() {
    alert('Closed Button Pressed');
  },
};

export const Currency = TemplateStory.bind({});
Currency.args = {
  variant: $BUTTON.currency,
  onClick() {
    alert('Closed Button Pressed');
  },
};

export const Destination = TemplateStory.bind({});
Destination.args = {
  variant: $BUTTON.destination,
  onClick() {
    alert('Closed Button Pressed');
  },
};

export const Expand = TemplateStory.bind({});
Expand.args = {
  variant: $BUTTON.expand,
  onClick() {
    alert('Closed Button Pressed');
  },
};

export const Filter = TemplateStory.bind({});
Filter.args = {
  variant: $BUTTON.filter,
  onClick() {
    alert('Closed Button Pressed');
  },
};

export const Globe = TemplateStory.bind({});
Globe.args = {
  variant: $BUTTON.globe,
  onClick() {
    alert('Closed Button Pressed');
  },
};

export const Link = TemplateStory.bind({});
Link.args = {
  variant: $BUTTON.link,
  onClick() {
    alert('Link Button Pressed');
  },
};

export const Location = TemplateStory.bind({});
Location.args = {
  variant: $BUTTON.location,
  onClick() {
    alert('Location Button Pressed');
  },
};

export const Logo = TemplateStory.bind({});
Logo.args = {
  variant: $BUTTON.logo,
  onClick() {
    alert('Logo Button Pressed');
  },
};

export const Menu = TemplateStory.bind({});
Menu.args = {
  variant: $BUTTON.menu,
  onClick() {
    alert('Menu Button Pressed');
  },
};

export const Modal = TemplateStory.bind({});
Modal.args = {
  variant: $BUTTON.modal,
  onClick() {
    alert('Modal Button Pressed');
  },
};

export const Nearby = TemplateStory.bind({});
Nearby.args = {
  variant: $BUTTON.nearby,
  onClick() {
    alert('Nearby Button Pressed');
  },
};

export const Option = TemplateStory.bind({});
Option.args = {
  variant: $BUTTON.option,
  onClick() {
    alert('Option Button Pressed');
  },
};

export const Paginate = TemplateStory.bind({});
Paginate.args = {
  variant: $BUTTON.paginate,
  onClick() {
    alert('Paginate Button Pressed');
  },
};

export const Primary = TemplateStory.bind({});
Primary.args = {
  variant: $BUTTON.primary,
  onClick() {
    alert('Primary Button Pressed');
  },
};

export const Privacy = TemplateStory.bind({});
Privacy.args = {
  variant: $BUTTON.privacy,
  onClick() {
    alert('Privacy Button Pressed');
  },
};

export const Report = TemplateStory.bind({});
Report.args = {
  variant: $BUTTON.report,
  onClick() {
    alert('Report Button Pressed');
  },
};

export const Search = TemplateStory.bind({});
Search.args = {
  variant: $BUTTON.search,
  onClick() {
    alert('Search Button Pressed');
  },
};

export const Searchbar = TemplateStory.bind({});
Searchbar.args = {
  variant: $BUTTON.searchbar,
  onClick() {
    alert('Searchbar Button Pressed');
  },
};

export const Transparent = TemplateStory.bind({});
Transparent.args = {
  variant: $BUTTON.transparent,
  onClick() {
    alert('Transparent Button Pressed');
  },
};

export const Underline = TemplateStory.bind({});
Underline.args = {
  variant: $BUTTON.underline,
  onClick() {
    alert('Underline Button Pressed');
  },
};

export const Video = TemplateStory.bind({});
Video.args = {
  variant: $BUTTON.video,
  onClick() {
    alert('Video Button Pressed');
  },
};
