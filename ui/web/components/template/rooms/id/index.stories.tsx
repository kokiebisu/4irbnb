import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { Template, TemplateProps } from "@template/rooms/id";

export default {
  title: "Templates/Rooms/ID",
  component: Template,
  argTypes: {
    onClick: { action: "clicked" },
    type: { control: { disable: true } },
    extendsTo: { control: { disable: true } },
  },
} as Meta;

const TemplateStory: Story<TemplateProps> = (args) => <Template {...args} />;

export const Reviews = TemplateStory.bind({});
Reviews.args = {
  variant: "reviews",
};

export const Arrangements = TemplateStory.bind({});
Arrangements.args = {
  variant: "arrangements",
};

export const Amenities = TemplateStory.bind({});
Amenities.args = {
  variant: "amenities",
};
Amenities.decorators = [
  (Story) => (
    <div style={{ maxWidth: 600 }}>
      <Story />
    </div>
  ),
];

export const Host = TemplateStory.bind({});
Host.args = {
  variant: "host",
};
Host.decorators = [
  (Story) => (
    <div style={{ maxWidth: 1280 }}>
      <Story />
    </div>
  ),
];

export const Panel = TemplateStory.bind({});
Panel.args = {
  variant: "panel",
};

export const Other = TemplateStory.bind({});
Other.args = {
  variant: "other",
};

// export const StayWithPagination = TemplateStory.bind({});
// StayWithPagination.args = {
//   variant: "stay",
//   pagination: true,
//   save: true,
//   isDescription: true,
// };

// export const TwoRows = TemplateStory.bind({});
// TwoRows.args = {
//   variant: "stay",
//   save: true,
//   isDescription: true,
// };
