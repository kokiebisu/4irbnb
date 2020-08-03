import React from 'react';
import { css } from 'styled-components';

// atoms
import { Text, Box, Icon } from 'atoms';

// molecules
import { CustomButton } from 'molecules/Button';

// breakpoints
import { sizes } from 'styles';

export default () => {
  return (
    <Box styles={extend.wrapper}>
      <Box styles={extend.inner}>
        <Box styles={extend.content.text}>
          <Box styles={extend.header.wrapper}>
            <Text styles={extend.header.text}>Your Privacy</Text>
            <Icon styles={extend.header.icon} name='Lock' />
          </Box>
          <Text>
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
              name='OK'
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

const extend = {
  wrapper: css`
    width: 100%;
    background-color: white;
    box-shadow: 0px 0px 40px 0px rgba(0, 0, 0, 0.27);
    border-radius: 16px;
  `,
  inner: css`
    padding: 20px;
    @media ${sizes.sm} {
      display: flex;
      justify-content: space-between;
    }
  `,
  header: {
    wrapper: css`
      display: flex;
    `,
    text: css`
      margin-right: 10px;
    `,
    icon: css`
      width: 15px;
      height: 15px;
      svg {
        width: 100%;
        height: 100%;
        path {
          fill: black;
        }
      }
    `,
  },

  content: {
    text: css`
      width: 100%;

      @media ${sizes.sm} {
        width: 60%;
        margin-right: 20px;
      }
      p {
        font-size: 16px;
        line-height: 1.3;
        font-weight: 300;
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
