import React from 'react';
import theme from 'styled-theming';
import { darken, lighten } from 'polished';
import styled, { css } from 'styled-components';
import { Text, Box, Icon } from 'atoms';
import { Button } from 'atoms';
import { colors, sizes } from 'styles';
import { cookie, cookieInverse } from 'atoms/stories/button.stories';

const description = theme('mode', {
  light: lighten(0.025, colors.gray),
});

const header = theme('mode', {
  light: darken(0.05, colors.gray),
});

const lock = theme('mode', {
  light: lighten(0.025, colors.blue),
});

const Wrapper = styled(Box)`
  width: 100%;
  background-color: white;
  box-shadow: 0px 0px 40px 0px rgba(0, 0, 0, 0.27);
  border-radius: 11px;
`;

const Inner = styled(Box)`
  padding: 25px 20px;
  @media ${sizes.lg} {
    display: flex;
    justify-content: space-between;
  }
`;

const Header = styled(Box)`
  display: flex;
  margin-bottom: 10px;
`;

const Content = styled(Box)`
  width: 100%;

  &.text {
    @media ${sizes.lg} {
      width: 60%;
      margin-right: 20px;
    }
  }

  &.buttons {
    display: flex;
    align-items: center;
    margin-top: 15px;

    @media ${sizes.sm} {
      width: 40%;
      margin-top: 0px;
    }
  }
`;

const CustomIcon = styled(Icon)`
  width: 13px;
  height: 15px;
  svg {
    width: 100%;
    height: 100%;
    path {
      fill: ${lock};
    }
  }
`;

const Buttons = styled(Box)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 10px;
  width: 100%;
`;

const Title = styled(Text)`
  font-weight: 700;
  font-size: 16px;
  color: ${header};
  margin-right: 10px;
  letter-spacing: 0.25px;
`;

const Description = styled(Text)`
  font-weight: 300;
  font-size: 14px;
  color: ${description};
  letter-spacing: 0.25px;
  line-height: 18px;
`;

export default () => {
  return (
    <Wrapper>
      <Inner>
        <Content className='text'>
          <Header>
            <Title>Your Privacy</Title>
            <CustomIcon name='Lock' />
          </Header>
          <Description>
            We use cookies to help personalize content, tailor and measure ads,
            and provide a safer experience. By navigating the site, you agree to
            the use of cookies to collect information on and off Airbnb. Read
            our Cookie Policy to learn more or go to Cookie Preferences to
            manage your settings
          </Description>
        </Content>
        <Content className='buttons'>
          <Buttons>
            <Button
              {...cookie.args}
              name='Save Settings'
              onPress={() => console.log('clicked')}
            />
            <Button
              {...cookieInverse.args}
              name='Cookie Preferences'
              onPress={() => console.log('clicked')}
            />
          </Buttons>
        </Content>
      </Inner>
    </Wrapper>
  );
};
