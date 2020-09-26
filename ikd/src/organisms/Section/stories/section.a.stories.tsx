import React from 'react';
import { Box, Text, Button } from 'atoms';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Section } from 'organisms/Section';
import { inverse } from 'atoms/stories/button.stories';
import { sectionAStyles } from '../styles/section.a.styles';
import { Props } from 'organisms/Section';

export default {
  title: 'Design System/Section',
  component: Section,
} as Meta;

const SectionTemplate: Story<Props> = (args) => <Section {...args} />;

export const typeA = SectionTemplate.bind({});
typeA.args = {
  styles: sectionAStyles,
  type: 'a',
  children: (
    <Box styles={sectionAStyles.flex}>
      <Box styles={sectionAStyles.title}>
        <Text>
          We embrace a world where everyone belongs, and stand with
          #BlackLivesMatter.
        </Text>
        <Button size='sm' onPress={() => console.log('what')} {...inverse.args}>
          Donate
        </Button>
      </Box>
      <Box styles={sectionAStyles.description}>
        <Text>
          No one should have to encounter racism—no matter who you are, where
          you’re from, who you love, or who you worship. Discrimination is not
          tolerated in our community. Which is why when you agree to book or
          host on Airbnb, you pledge not to tolerate it either.
        </Text>
      </Box>
      <Box styles={sectionAStyles.button}>
        <Button size='sm' onPress={() => console.log('what')} {...inverse.args}>
          Donate
        </Button>
      </Box>
    </Box>
  ),
};
