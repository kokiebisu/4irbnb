import React from 'react';
import { css } from 'styled-components';

// atom
import { Box } from '../../../atoms/Box';

import Card from '../card.section';

export default {
  component: Card,
  title: 'Blocks/Card/Section',
  excludeStories: /.*Data$/,
};

const cardData = {
  title: 'We stand with #BlackLivesMatter',
  description:
    'We believe in a world where everyone belongs. We reject all racism that stands in the way.',
  option: 'Donate',
};

export const BlackLivesMatter = () => {
  const extend = {
    wrapper: css`
      width: 100%;
      padding: 0 20px;
    `,
  };
  return (
    <Box styles={extend.wrapper}>
      <Card {...cardData} />
    </Box>
  );
};
