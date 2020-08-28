import React from 'react';
import theme from 'styled-theming';
import styled, { css } from 'styled-components';
import { Text, Box, Icon } from 'atoms';
import { CustomButton } from 'molecules/Button';
import { colors } from 'styles';
import {
  transparentButtonStyles,
  transparentButtonColors,
  globeButtonStyles,
} from 'molecules/Button/button.transparent';

const landingHeaderColors = {
  fill: theme('mode', {
    light: colors.white,
  }),
};

const landingHeaderStyles = {
  wrapper: css`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,
  left: css``,
  middle: css`
    display: flex;
  `,
  right: css``,
};

export default () => {
  return (
    <Box styles={landingHeaderStyles.wrapper}>
      <Box styles={landingHeaderStyles.left}>
        <Icon
          name='NoColorLogo'
          fillColor={landingHeaderColors.fill}
          width={102}
          height={32}
        />
      </Box>
      <Box styles={landingHeaderStyles.middle}>
        <Text>header</Text>
      </Box>
      <Box styles={landingHeaderStyles.right}>
        <CustomButton type='transparent' onPress={() => console.log('pressed')}>
          <Box styles={globeButtonStyles.flex}>
            <Icon
              styles={globeButtonStyles.globe}
              fillColor={transparentButtonColors.stroke}
              className='globe'
              name='Globe'
            />
            <Icon
              styles={globeButtonStyles.arrow}
              fillColor={transparentButtonColors.stroke}
              className='arrow'
              name='ChevronDown'
            />
          </Box>
        </CustomButton>
        <CustomButton type='menu' onPress={() => console.log('pressed')} />
      </Box>
    </Box>
  );
};
