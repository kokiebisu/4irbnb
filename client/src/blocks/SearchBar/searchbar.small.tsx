import React from 'react';
import { css } from 'styled-components';

// element
import { Icon } from '../../elements/Icon';
import { Box } from '../../elements/Box';
import { BaseButton } from '../../elements/Button';
import { Text } from '../../elements/Text';

type SearchBarProps = {
  onPress: () => void;
};

export default ({ ...props }: SearchBarProps) => {
  return (
    <BaseButton styles={extend.wrapper} {...props}>
      <Icon name='search' />
      <Box styles={extend.text}>
        <Text>Add a location</Text>
      </Box>
    </BaseButton>
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
