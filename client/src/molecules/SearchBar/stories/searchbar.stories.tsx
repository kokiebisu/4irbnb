import React from 'react';
import { css } from 'styled-components';

// element
import { Box } from 'atoms';

// block
import { SearchBar } from 'molecules/SearchBar';

export default {
  title: 'Design Systems|Molecules/SearchBar',
  parameters: {
    component: SearchBar,
    componentSubtitle: 'Displays the searchbars',
  },
  excludeStories: /.*Data$/,
};

export const Mobile = () => {
  const extend = {
    wrapper: css`
      width: 100%;
      margin: 0 15px;
    `,
  };
  return (
    <Box styles={extend.wrapper}>
      <SearchBar type='mobile' onPress={() => console.log('hello!')} />
    </Box>
  );
};

export const Normal = () => {
  return <SearchBar type='normal' onPress={() => console.log('hello!')} />;
};
