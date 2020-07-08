import React from 'react';
import styled, { css } from 'styled-components';
import { Box } from '../../elements/Box';

type CardProps = { children?: React.ReactNode };

export default ({ children, ...props }: CardProps) => {
  return (
    <Box styles={box} {...props}>
      {children}
    </Box>
  );
};

const box = css`
  background: red;
  border-radius: 5px;
`;
