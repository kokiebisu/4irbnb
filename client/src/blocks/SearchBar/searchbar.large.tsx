import React from 'react';
import { css } from 'styled-components';

// element
import { Box } from '../../elements/Box';
import { BaseButton } from '../../elements/Button';
import { Icon } from '../../elements/Icon';
import { Text } from '../../elements/Text';

type SearchBarProps = {
  onPress: () => void;
};

export default ({ ...props }: SearchBarProps) => {
  return (
    <BaseButton styles={extend.wrapper} {...props}>
      <Icon name='search' />
      <Box styles={extend.text}>
        <Text>Where are you going?</Text>
      </Box>
    </BaseButton>
  );
};

const extend = {
  wrapper: css`
    background-color: red;
  `,
  text: css``,
};
