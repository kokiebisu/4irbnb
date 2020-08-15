import React from 'react';
import { css } from 'styled-components';
import theme from 'styled-theming';
import { darken } from 'polished';
import { colors } from 'styles';
import { Flex } from 'layout';
import { Box, Button, Icon, Text } from 'atoms';
import { CustomButton } from 'molecules/Button';

type SearchBarProps = {
  onPress: () => void;
};

export default ({ ...props }: SearchBarProps) => {
  return (
    <Box styles={extend.wrapper}>
      <Box styles={extend.options}>
        <Box styles={extend.section.side}>
          <Button onPress={() => console.log('pressed')}>sadf</Button>
        </Box>
        <Box styles={extend.section.middle}>
          <Box styles={extend.section.button}>
            <Button onPress={() => console.log('pressed')}>sadf</Button>
          </Box>
          <Box styles={extend.section.button}>
            <Button onPress={() => console.log('pressed')}>sadf</Button>
          </Box>
        </Box>
        <Box styles={extend.section.side}>
          <Button onPress={() => console.log('pressed')}>sdaf</Button>
          {/* <CustomButton type='search' onPress={() => console.log('pressed')} /> */}
        </Box>
      </Box>
    </Box>
  );
};

const common = css`
  background-color: white;
  border-radius: 50px;
`;

const extend = {
  wrapper: css`
    width: 100%;
    max-width: 850px;
    height: 65px;
    border-radius: 50px;
    display: flex;

    box-shadow: rgb(0, 0, 0, 0.15) 0px 5px 12px;
  `,
  options: css`
    background-color: white;
    display: flex;
    flex: 1 1 0%;
    height: 100%;
    border-radius: inherit;
  `,
  section: {
    side: css`
      flex: 1.5 0 0%;
      &:first-child {
        border-top-left-radius: 50px;
        border-bottom-left-radius: 50px;
      }
      &:last-child {
        border-top-right-radius: 50px;
        border-bottom-right-radius: 50px;
      }

      button {
        height: 100%;
        width: 100%;
        padding: 20px;
        border-radius: 50px;
        ${common};
        &:hover {
          background-color: gray;
        }
      }
    `,
    middle: css`
      flex: 2 0 0%;
      width: 100%;
      display: flex;
    `,
    button: css`
      flex: 1 0 0%;
      button {
        height: 100%;
        width: 100%;
        padding: 20px;
        ${common};

        &:hover {
          background-color: gray;
        }
      }
    `,
  },
  seperator: css`
    width: 1px;
    height: 32px;
  `,

  button: css`
    padding: 8px;
    flex: 0 0 auto;
  `,
};
