import React from "react";
import { Button, $Button, ButtonProps } from "..";
import { Story, Meta } from "@storybook/react";

export default {
  title: "Button",
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
  variant: $Button.AUTH,
  onClick() {
    alert("Auth Button Pressed");
  },
};

export const Back = TemplateStory.bind({});
Back.args = {
  variant: $Button.BACK,
  onClick() {
    alert("Back Button Pressed");
  },
};

export const Banner = TemplateStory.bind({});
Banner.args = {
  variant: $Button.BANNER,
  onClick() {
    alert("Banner Button Pressed");
  },
};

export const Bar = TemplateStory.bind({});
Bar.args = {
  variant: $Button.BAR,
  onClick() {
    alert("Bar Button Pressed");
  },
};

export const Border = TemplateStory.bind({});
Border.args = {
  variant: $Button.BORDER,
  onClick() {
    alert("Border Button Pressed");
  },
};

export const Calendar = TemplateStory.bind({});
Calendar.args = {
  variant: $Button.CALENDAR,
  onClick() {
    alert("Calendar Button Pressed");
  },
};

export const Closed = TemplateStory.bind({});
Closed.args = {
  variant: $Button.CLOSED,
  onClick() {
    alert("Closed Button Pressed");
  },
};

export const Currency = TemplateStory.bind({});
Currency.args = {
  variant: $Button.CURRENCY,
  onClick() {
    alert("Closed Button Pressed");
  },
};

export const Destination = TemplateStory.bind({});
Destination.args = {
  variant: $Button.DESTINATION,
  onClick() {
    alert("Closed Button Pressed");
  },
};

export const Expand = TemplateStory.bind({});
Expand.args = {
  variant: $Button.EXPAND,
  onClick() {
    alert("Closed Button Pressed");
  },
};

export const Filter = TemplateStory.bind({});
Filter.args = {
  variant: $Button.FILTER,
  onClick() {
    alert("Closed Button Pressed");
  },
};

export const Globe = TemplateStory.bind({});
Globe.args = {
  variant: $Button.GLOBE,
  onClick() {
    alert("Closed Button Pressed");
  },
};

export const Link = TemplateStory.bind({});
Link.args = {
  variant: $Button.LINK,
  onClick() {
    alert("Link Button Pressed");
  },
};

export const Location = TemplateStory.bind({});
Location.args = {
  variant: $Button.LOCATION,
  onClick() {
    alert("Location Button Pressed");
  },
};

export const Logo = TemplateStory.bind({});
Logo.args = {
  variant: $Button.LOGO,
  onClick() {
    alert("Logo Button Pressed");
  },
};

export const Menu = TemplateStory.bind({});
Menu.args = {
  variant: $Button.MENU,
  onClick() {
    alert("Menu Button Pressed");
  },
};

export const Modal = TemplateStory.bind({});
Modal.args = {
  variant: $Button.MODAL,
  onClick() {
    alert("Modal Button Pressed");
  },
};

export const Nearby = TemplateStory.bind({});
Nearby.args = {
  variant: $Button.NEARBY,
  onClick() {
    alert("Nearby Button Pressed");
  },
};

export const Option = TemplateStory.bind({});
Option.args = {
  variant: $Button.OPTION,
  onClick() {
    alert("Option Button Pressed");
  },
};

export const Paginate = TemplateStory.bind({});
Paginate.args = {
  variant: $Button.PAGINATE,
  onClick() {
    alert("Paginate Button Pressed");
  },
};

export const Primary = TemplateStory.bind({});
Primary.args = {
  variant: $Button.PRIMARY,
  onClick() {
    alert("Primary Button Pressed");
  },
};

export const Privacy = TemplateStory.bind({});
Privacy.args = {
  variant: $Button.PRIVACY,
  onClick() {
    alert("Privacy Button Pressed");
  },
};

export const Report = TemplateStory.bind({});
Report.args = {
  variant: $Button.REPORT,
  onClick() {
    alert("Report Button Pressed");
  },
};

export const Search = TemplateStory.bind({});
Search.args = {
  variant: $Button.SEARCH,
  onClick() {
    alert("Search Button Pressed");
  },
};

export const Searchbar = TemplateStory.bind({});
Searchbar.args = {
  variant: $Button.SEARCHBAR,
  onClick() {
    alert("Searchbar Button Pressed");
  },
};

export const Transparent = TemplateStory.bind({});
Transparent.args = {
  variant: $Button.TRANSPARENT,
  onClick() {
    alert("Transparent Button Pressed");
  },
};

export const Underline = TemplateStory.bind({});
Underline.args = {
  variant: $Button.UNDERLINE,
  onClick() {
    alert("Underline Button Pressed");
  },
};

export const Video = TemplateStory.bind({});
Video.args = {
  variant: $Button.VIDEO,
  onClick() {
    alert("Video Button Pressed");
  },
};
