import React from 'react';
import { css } from 'styled-components';

// Elements
import { Box } from '../../elements/Box';
import { Text } from '../../elements/Text';

type CardProps = {
  image: string;
  title?: string;
  description: string;
};

export default ({ image, title, description, ...props }: CardProps) => {
  return (
    <Box styles={box} {...props}>
      <Box>
        <img src={image} alt='card-image' />
      </Box>
      <Box>
        {title && <Text styles={title}>{image}</Text>}
        <Text>{description}</Text>
      </Box>
    </Box>
  );
};

const box = css`
  background: red;
  border-radius: 5px;
`;

const title = css``;
