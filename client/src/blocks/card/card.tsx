import React from 'react';
import { css } from 'styled-components';
import { Box } from '../../elements/Box';

type CardProps = {
  children?: React.ReactNode;
  image: string;
  title?: string;
  description: string;
};

export default ({
  children,
  image,
  title,
  description,
  ...props
}: CardProps) => {
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
