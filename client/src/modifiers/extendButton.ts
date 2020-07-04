import React, { PropsWithChildren } from 'react';
import styled, {
  ThemedCssFunction,
  DefaultTheme,
  StyledComponent,
} from 'styled-components';

interface Props {
  Base: React.ReactNode;
  styles: () => ThemedCssFunction<DefaultTheme>;
}

export const extendButton: (
  Base: PropsWithChildren<Props>,
  styles: any
) => StyledComponent<'button', any, { styles: any }, 'styles'> = (
  Base,
  styles
) => {
  const NewStyled = styled.button.attrs((props) => ({
    Base,
  }))`
    ${styles}
  `;
  return NewStyled;
};
