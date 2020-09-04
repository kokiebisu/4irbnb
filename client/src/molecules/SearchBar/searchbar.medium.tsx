import React from 'react';
import styled, { css } from 'styled-components';
import theme from 'styled-theming';
import { darken } from 'polished';
import { colors } from 'styles';
import { Box, Button, Icon, Text } from 'atoms';

interface Props {
  styles?: any;
}

export const SearchbarMedium: React.FC<Props> = ({ styles }) => {
  return (
    <Button styles={styles.wrapper} onPress={() => console.log('clicked')}>
      <Box styles={styles.flex}>
        <Icon styles={styles.icon} name='Search' />
        <Text styles={styles.label}>Where are you going?</Text>
      </Box>
    </Button>
  );
};
