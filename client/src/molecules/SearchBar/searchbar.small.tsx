import React from 'react';
import styled, { css } from 'styled-components';
import theme from 'styled-theming';
import { darken, lighten } from 'polished';
import { Icon, Box, Button, Text } from 'atoms';
import { colors } from 'styles';

interface Props {
  styles?: any;
}

export const SearchbarSmall: React.FC<Props> = ({ styles }) => {
  return (
    <Button styles={styles.wrapper} onPress={() => console.log('clicked')}>
      <Box styles={styles.flex}>
        <Text styles={styles.label}>Start your search</Text>
        <Box styles={styles.iconwrapper}>
          <Icon styles={styles.icon} name='Search' />
        </Box>
      </Box>
    </Button>
  );
};
