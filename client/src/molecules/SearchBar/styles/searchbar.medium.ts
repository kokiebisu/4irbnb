import { css } from 'styled-components';
import { colors } from 'global';
import { lighten, darken } from 'polished';
import theme from 'styled-theming';

const searchbarColors = {
  primary: theme('mode', {
    light: colors.gray,
  }),
  secondary: theme('mode', {
    light: darken(0.7, colors.gray),
  }),
  border: theme('mode', {
    light: lighten(0.4, colors.gray),
  }),
};

export const searchbarMedium = {
  wrapper: css`
    background-color: transparent;
    box-shadow: rgb(0, 0, 0, 0.15) 0px 5px 12px;
    height: 50px;
    width: 100%;
    padding: 0 10px 0 18px;
    border-radius: 24px;
  `,
  flex: css`
    display: flex;
    align-items: center;
  `,
  icon: css`
    position: relative;
    top: 2px;
    margin-right: 16px;
    & svg {
      width: 16px;
      height: 16px;
      stroke: ${searchbarColors.secondary};
      & path {
        fill: ${searchbarColors.secondary};
        stroke-width: 2;
      }
    }
  `,
  label: css`
    color: ${searchbarColors.primary};
    font-size: 16px;
    font-weight: 500;
  `,
};
