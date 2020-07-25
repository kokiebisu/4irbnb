import React from 'react';
import { css } from 'styled-components';

// components
import { Box } from '../../atoms/Box';
import { Button } from '../../molecules/Button/button';
import { Flex } from '../../layout/flex';
import { Text } from '../../atoms/Text';

export default () => {
  return (
    <Box styles={extend.wrapper}>
      <Box styles={extend.inner}>
        <Box styles={extend.content.text}>
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
            <Box styles={extend.ok}>
              <Button
                type='cookie'
                name='OK'
                onPress={() => console.log('ok')}
              />
            </Box>
            <Button
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
    display: flex;
    justify-content: space-between;
    padding: 20px;
  `,
  content: {
    text: css`
      width: 60%;
      margin-right: 20px;
      p {
        font-size: 16px;
        line-height: 1.3;
        font-weight: 300;
      }
    `,
    button: css`
      width: 40%;
    `,
  },
  buttons: css`
    display: flex;
  `,
  ok: css`
    margin-right: 15px;
  `,
};
