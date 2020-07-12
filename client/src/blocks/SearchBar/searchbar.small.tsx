import React from 'react';
import { css } from 'styled-components';

// element
import { Button } from '../../elements/Button';

type SearchBarProps = {};

export default ({ ...props }: SearchBarProps) => {
  return (
    <Button
      onPress={() => console.log('searchbar button pressed')}
      styles={extend.wrapper}
      {...props}>
      hello
    </Button>
  );
};

const extend = {
  wrapper: css``,
};
