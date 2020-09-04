import React from 'react';
import theme from 'styled-theming';
import { darken, lighten } from 'polished';
import styled, { css } from 'styled-components';
import { Text, Box, Icon } from 'atoms';
import { Button } from 'atoms';
import { cookie, cookieInverse } from 'atoms/stories/button.stories';

interface Props {
  styles?: any;
}

export const CookieNotification: React.FC<Props> = ({ styles }) => {
  return (
    <Box styles={styles.wrapper}>
      <Box styles={styles.inner}>
        <Box styles={styles.content} className='text'>
          <Box styles={styles.header}>
            <Text styles={styles.title}>Your Privacy</Text>
            <Icon styles={styles.customicon} name='Lock' />
          </Box>
          <Text styles={styles.description}>
            We use cookies to help personalize content, tailor and measure ads,
            and provide a safer experience. By navigating the site, you agree to
            the use of cookies to collect information on and off Airbnb. Read
            our Cookie Policy to learn more or go to Cookie Preferences to
            manage your settings
          </Text>
        </Box>
        <Box styles={styles.content} className='buttons'>
          <Box styles={styles.buttons}>
            <Button {...cookie.args} onPress={() => console.log('clicked')} />
            <Button
              {...cookieInverse.args}
              onPress={() => console.log('clicked')}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
