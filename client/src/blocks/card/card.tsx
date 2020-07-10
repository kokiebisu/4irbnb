import React from 'react';
import { css } from 'styled-components';

// Elements
import { Box } from '../../elements/Box';
import { Text } from '../../elements/Text';
import { Img } from '../../elements/Img';

type CardProps = {
  image: string;
  title?: string;
  description: string;
};

export default ({ image, title, description, ...props }: CardProps) => {
  return (
    <Box styles={wrapperStyles} {...props}>
      <Box styles={imgwrapperStyles}>
        <Img styles={imgStyles} src={image} alt='card-image' />
      </Box>
      <Box>
        {title && <Text styles={titleStyles}>{title}</Text>}
        <Text>{description}</Text>
      </Box>
    </Box>
  );
};

const wrapperStyles = css`
  background: red;
  border-radius: 16px;
  max-height: min-content;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
`;

const imgwrapperStyles = css`
  object-fit: cover;
`;

const imgStyles = css`
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
`;

const titleStyles = css``;
