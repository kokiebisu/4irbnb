import React from 'react';
import { css } from 'styled-components';

// element
import { Icon } from '../../elements/Icon';
import { Box } from '../../elements/Box';
import { Button } from '../../elements/Button';
import { Text } from '../../elements/Text';

type SearchBarProps = {
  onPress: () => void;
};

export default ({ ...props }: SearchBarProps) => {
  return (
    <Button styles={extend.wrapper} {...props}>
      <Icon name='search' />
      <Box styles={extend.text}>
        <Text>Add a location</Text>
      </Box>
    </Button>
  );
};

const extend = {
  wrapper: css`
    background-color: transparent;
    border: 1px solid black;
    padding: 5px;
  `,
  text: css``,
};
