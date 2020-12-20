import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Section, SectionProps } from "./section.component";
import { ContextProvider } from "../../../context/provider";

export default {
  title: "Design System/Organisms/Section",
  component: Section,
  argTypes: {
    onClick: { action: "clicked" },
    type: { control: { disable: true } },
    extendsTo: { control: { disable: true } },
    layoutType: {
      control: {
        type: "select",
        options: ["room", "experience"],
      },
    },
    superhost: {
      control: "boolean",
    },
  },
  decorators: [
    (Story) => (
      <ContextProvider>
        <Story />
      </ContextProvider>
    ),
  ],
} as Meta;

const TemplateStory: Story<SectionProps> = (args) => <Section {...args} />;

export const categories = TemplateStory.bind({});
categories.args = {
  type: "category",
};

export const stayTypes = TemplateStory.bind({});
stayTypes.args = {
  type: "stay",
  carouselType: "stayTypes",
};

export const stayWithPagination = TemplateStory.bind({});
stayWithPagination.args = {
  type: "stay",
  pagination: true,
  save: true,
  isDescription: true,
};

export const twoRows = TemplateStory.bind({});
twoRows.args = {
  type: "stay",
  save: true,
  isDescription: true,
};

export const panel = TemplateStory.bind({});
panel.args = {
  type: "panel",
};

export const characteristics = TemplateStory.bind({});
characteristics.args = {
  type: "characteristics",
};

export const description = TemplateStory.bind({});
description.args = {
  type: "description",
};

description.decorators = [
  (Story) => (
    <div style={{ maxWidth: 600 }}>
      <Story />
    </div>
  ),
];

export const arrangements = TemplateStory.bind({});
arrangements.args = {
  type: "arrangements",
};

export const amenities = TemplateStory.bind({});
amenities.args = {
  type: "amenities",
};
amenities.decorators = [
  (Story) => (
    <div style={{ maxWidth: 600 }}>
      <Story />
    </div>
  ),
];

export const reviews = TemplateStory.bind({});
reviews.args = {
  type: "reviews",
};

export const host = TemplateStory.bind({});
host.args = {
  type: "host",
};
host.decorators = [
  (Story) => (
    <div style={{ maxWidth: 1280 }}>
      <Story />
    </div>
  ),
];

export const know = TemplateStory.bind({});
know.args = {
  type: "know",
};

export const other = TemplateStory.bind({});
other.args = {
  type: "other",
};

export const nearby = TemplateStory.bind({});
nearby.args = {
  type: "nearby",
};

export const destinations = TemplateStory.bind({});
destinations.args = {
  type: "destinations",
};

export const online = TemplateStory.bind({});
online.args = {
  type: "online",
};

online.argTypes = {
  dark: {
    control: "boolean",
  },
};

export const homes = TemplateStory.bind({});
homes.args = {
  type: "homes",
};

export const also = TemplateStory.bind({});
also.args = {
  type: "also",
};

export const participate = TemplateStory.bind({});
participate.args = {
  type: "participate",
};

export const bring = TemplateStory.bind({});
bring.args = {
  type: "bring",
};

export const experiences = TemplateStory.bind({});
experiences.args = {
  type: "experiences",
};

export const available = TemplateStory.bind({});
available.args = {
  type: "available",
};

export const all = TemplateStory.bind({});
all.args = {
  type: "all",
};

export const priority = TemplateStory.bind({});
priority.args = {
  type: "priority",
};

export const help = TemplateStory.bind({});
help.args = {
  type: "help",
};

export const ready = TemplateStory.bind({});
ready.args = {
  type: "ready",
};

export const works = TemplateStory.bind({});
works.args = {
  type: "works",
};

export const sharing = TemplateStory.bind({});
sharing.args = {
  type: "sharing",
};

export const back = TemplateStory.bind({});
back.args = {
  type: "back",
};

export const faq = TemplateStory.bind({});
faq.args = {
  type: "faq",
};

export const more = TemplateStory.bind({});
more.args = {
  type: "more",
};
