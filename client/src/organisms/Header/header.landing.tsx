import React from 'react';
import { Text, Box, Icon, Button } from 'atoms';
import { buttonColors, globeButtonStyles } from 'atoms/styles/button.styles';
import { globe, host } from 'atoms/stories/button.stories';
import { landingHeaderColors } from 'organisms/Header/styles/header.landing.styles';

interface Props {
  styles?: any;
}

export const LandingHeader: React.FC<Props> = ({ styles }) => {
  return (
    <Box styles={styles.wrapper}>
      <Box styles={styles.left}>
        <Icon
          name='NoColorLogo'
          fillColor={landingHeaderColors.fill}
          width={102}
          height={32}
        />
      </Box>
      <Box styles={styles.middle}>
        <Text>header</Text>
      </Box>
      <Box styles={styles.right}>
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
