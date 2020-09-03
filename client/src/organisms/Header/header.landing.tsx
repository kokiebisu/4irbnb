import React from 'react';
import theme from 'styled-theming';
import { css } from 'styled-components';
import { Text, Box, Icon, Button } from 'atoms';
import { colors } from 'styles';
import { buttonColors, globeButtonStyles } from 'atoms/Button';
import { globe, host } from 'atoms/stories/button.stories';

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
        <Button {...globe.args} onPress={() => console.log('pressed')}>
          <Box styles={globeButtonStyles.flex}>
            <Icon
              styles={globeButtonStyles.globe}
              fillColor={buttonColors.content}
              className='globe'
              name='Globe'
            />
            <Icon
              styles={globeButtonStyles.arrow}
              fillColor={buttonColors.content}
              className='arrow'
              name='ChevronDown'
            />
          </Box>
        </Button>
        <Button {...host.args} onPress={() => console.log('pressed')} />
      </Box>
    </Box>
  );
};
