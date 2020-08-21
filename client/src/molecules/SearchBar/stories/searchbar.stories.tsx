import React from 'react';
import { css } from 'styled-components';

// element
import { Box } from 'atoms';

// block
import { SearchBar } from 'molecules/SearchBar';

import { sizes } from 'styles';

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

// export const Full = () => {
//   const extend = {
//     wrapper: css`
//       margin: 0 80px;

//       @media ${sizes.lg} {
//         width: 100%;
//         max-width: 1560px;
//       }
//     `,
//   };
//   return (
//     <Box styles={extend.wrapper}>
//       <SearchBar type='full' onPress={() => console.log('hello!')} />
//     </Box>
//   );
// };
