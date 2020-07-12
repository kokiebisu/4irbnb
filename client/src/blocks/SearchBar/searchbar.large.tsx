import React from 'react';
import { css } from 'styled-components';

// element
import { Button } from '../../elements/Button';

type SearchBarProps = {
  onPress: () => void;
};

export default ({ ...props }: SearchBarProps) => {
  return (
    <Button styles={extend.wrapper} {...props}>
      hello
    </Button>
  );
};

const extend = {
  wrapper: css`
    background-color: red;
  `,
};
