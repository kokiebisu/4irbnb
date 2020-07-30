import React from 'react';
import { css } from 'styled-components';

// atoms
import { Box } from 'atoms/Box';

// molecules
import Card from 'molecules/Card/card';

export default {
  title: 'Design Systems|Molecules/Card/Section',
  parameters: {
    component: Card,
    componentSubtitle: 'Displays a card that stretches full width',
  },
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
