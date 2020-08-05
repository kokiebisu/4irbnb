import React from 'react';
import { css } from 'styled-components';

// atoms
import { Text, Box, Icon } from 'atoms';

// molecules
import { CustomButton } from 'molecules/Button';

// breakpoints
import { colors, sizes } from 'styles';
import theme from 'styled-theming';
import { darken, lighten } from 'polished';

export default () => {
  return (
    <Box styles={extend.wrapper}>
      <Box styles={extend.inner}>
        <Box styles={extend.content.text}>
          <Box styles={extend.header.wrapper}>
            <Text styles={extend.header.text}>Your Privacy</Text>
            <Icon styles={extend.header.icon} name='Lock' />
          </Box>
          <Text styles={extend.description}>
            We use cookies to help personalize content, tailor and measure ads,
            and provide a safer experience. By navigating the site, you agree to
            the use of cookies to collect information on and off Airbnb. Read
            our Cookie Policy to learn more or go to Cookie Preferences to
            manage your settings
          </Text>
        </Box>
        <Box styles={extend.content.button}>
          <Box styles={extend.buttons}>
            <CustomButton
              type='cookie'
              name='Save Settings'
              onPress={() => console.log('ok')}
            />
            <CustomButton
              inverse
              type='cookie'
              name='Cookie Preferences'
              onPress={() => console.log('cookie preferences')}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const description = theme('mode', {
  light: lighten(0.025, colors.gray),
});

const header = theme('mode', {
  light: darken(0.05, colors.gray),
});

const lock = theme('mode', {
  light: lighten(0.025, colors.blue),
});

const extend = {
  wrapper: css`
    width: 100%;
    background-color: white;
    box-shadow: 0px 0px 40px 0px rgba(0, 0, 0, 0.27);
    border-radius: 11px;
  `,
  inner: css`
    padding: 25px 20px;
    @media ${sizes.lg} {
      display: flex;
      justify-content: space-between;
    }
  `,
  header: {
    wrapper: css`
      display: flex;
      margin-bottom: 10px;
    `,
    text: css`
      font-weight: 700;
      font-size: 16px;
      color: ${header};
      margin-right: 10px;
      letter-spacing: 0.25px;
    `,
    icon: css`
      width: 13px;
      height: 15px;
      svg {
        width: 100%;
        height: 100%;
        path {
          fill: ${lock};
        }
      }
    `,
  },
  description: css`
    font-weight: 300;
    font-size: 14px;
    color: ${description};
    letter-spacing: 0.25px;
    line-height: 18px;
  `,
  content: {
    text: css`
      width: 100%;

      @media ${sizes.lg} {
        width: 60%;
        margin-right: 20px;
      }
    `,
    button: css`
      display: flex;
      align-items: center;
      width: 100%;
      margin-top: 15px;

      @media ${sizes.sm} {
        width: 40%;
        margin-top: 0px;
      }
    `,
  },
  buttons: css`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 10px;
    width: 100%;
  `,
};
