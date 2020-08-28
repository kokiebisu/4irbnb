import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import styled from 'styled-components';
import { Box, Text, Icon } from 'atoms';
import { CustomButton } from 'molecules/Button';
import {
  globeButtonStyles,
  transparentButtonColors,
} from 'molecules/Button/button.transparent';

export default {
  title: 'Design Systems/Button/Transparent',
  component: CustomButton,
  argTypes: { onPress: { action: 'clicked' } },
} as Meta;

interface Props {
  name?: string;
  className?: string;
  onPress: () => void;
  type: string;
  children: React.ReactNode;
}

const Wrapper = styled(Box)``;

const ButtonTemplate: Story<Props> = ({ className, ...args }) => {
  return (
    <Wrapper>
      <CustomButton {...args} />
    </Wrapper>
  );
};

export const globe = ButtonTemplate.bind({});
globe.args = {
  type: 'transparent',
  children: (
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
  ),
};

export const host = ButtonTemplate.bind({});
host.args = {
  type: 'transparent',
  children: <Text>Become a host</Text>,
};
