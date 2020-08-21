import React from 'react';
import { css } from 'styled-components';

// atoms
import { Icon, Button, Text, Box } from 'atoms';

// type
import { CustomProps } from 'molecules/Button';

export default ({ name, ...props }: CustomProps) => {
  return (
    <Button styles={extend.wrapper} {...props}>
      <Box styles={extend.content}>
        <Icon styles={extend.icon} name='Search' />
        <Text styles={extend.text}>Search</Text>
      </Box>
    </Button>
  );
};

const extend = {
  wrapper: css`
    background-color: rgb(215, 4, 102);
    border: none;
    padding: 15px 22px;
    color: white;
    border-radius: 8px;
    transition: 0.8s;
    &:hover {
      background-color: #ff385c;
    }
  `,
  content: css`
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  icon: css`
    position: relative;
    margin-right: 8px;
    & svg {
      width: 14px;
      height: 14px;
      stroke: white;
      path {
        fill: white;
        stroke-width: 2;
      }
    }
  `,
  text: css`
    font-weight: 300;
    font-size: 16px;
  `,
};
