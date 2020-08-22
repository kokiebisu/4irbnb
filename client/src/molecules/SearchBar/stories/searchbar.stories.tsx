import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import { css } from 'styled-components';
import { Box } from 'atoms';
import { SearchBar } from 'molecules/SearchBar';
import { sizes } from 'styles';

export default {
  title: 'Design Systems/SearchBar',
  component: SearchBar,
  argTypes: { onPress: { action: 'clicked' } },
};

interface SearchBarTemplateProps {
  type: string;
  onPress: () => void;
  styles?: any;
}

const SearchBarTemplate: Story<SearchBarTemplateProps> = ({
  styles,
  ...args
}) => (
  <Box styles={styles}>
    <SearchBar {...args} />
  </Box>
);

export const mobile = SearchBarTemplate.bind({});
mobile.args = {
  type: 'mobile',
  styles: css`
    width: 100%;
  `,
};

export const normal = SearchBarTemplate.bind({});
normal.args = {
  type: 'normal',
  styles: css`
    @media ${sizes.lg} {
      width: 100%;
      max-width: 1560px;
    }
  `,
};
