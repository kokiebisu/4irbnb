import React from 'react';
import { css } from 'styled-components';

// block
import { BaseButton } from './button';

// element
import { Text } from '../../elements/Text';
import { colorpallete } from '../../styles/colorpallete';
import theme from 'styled-theming';

type props = {
  children: React.ReactNode;
  inverse?: boolean;
  onPress: () => void;
};

export default ({ inverse, children, ...props }: props) => {
  return (
    <BaseButton styles={inverse ? inverseButton : button} {...props}>
      <Text styles={inverse ? inverseText : text}>{children}</Text>
    </BaseButton>
  );
};

const primary = theme('mode', {
  default: colorpallete.bluegreen__5,
});

const secondary = theme('mode', {
  default: colorpallete.white,
});

const common = css`
  padding: 15px 0;
  font-size: 12px;
  font-weight: 700;
  min-width: 125px;
`;

const inverseButton = css`
  ${common}
  background-color: ${secondary};

  border: 1px solid ${primary};
`;

const button = css`
  ${common}
  background-color: ${primary};
`;

const inverseText = css`
  color: ${primary};
`;

const text = css`
  color: ${secondary};
`;
