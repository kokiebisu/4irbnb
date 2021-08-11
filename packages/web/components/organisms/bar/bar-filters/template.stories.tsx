import { Meta, Story } from "@storybook/react";
import { FiltersBarTemplate, FiltersBarTemplateProps } from "./template";
import * as content from "./content";

export default {
  title: "Organisms/Bar",
  component: FiltersBarTemplate,
} as Meta;

const BarStory: Story<FiltersBarTemplateProps> = (args) => (
  <FiltersBarTemplate {...args} />
);

export const Filters = BarStory.bind({});
Filters.args = {
  ...content,
  state: {
    activeSlide: 0,
    translate: 0,
    transition: 0.45,
  },
  // width: 500,
};
