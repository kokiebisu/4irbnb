import theme from 'styled-theming';
import { colors } from 'global';
import { darken, lighten } from 'polished';
import { css } from 'styled-components';

const searchbarColors = {
  primary: theme('mode', {
    light: lighten(0.25, colors.black),
  }),
  border: theme('mode', {
    light: lighten(0.4, colors.gray),
  }),
};

export const searchbarSmall = {
  wrapper: css`
    background-color: transparent;
    border: 1px solid ${searchbarColors.border};
    height: 50px;
    width: 260px;
    padding: 0 7px 0 18px;
    border-radius: 24px;
  `,
  label: css`
    color: ${searchbarColors.primary};
    font-size: 14px;
  `,
  iconwrapper: css`
    width: 32px;
    height: 32px;
    background: -webkit-linear-gradient(
      right,
      rgb(230, 30, 77) 0%,
      rgb(227, 28, 95) 50%,
      rgb(215, 4, 102) 100%
    );
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
  `,
  icon: css`
    position: relative;

    & svg {
      width: 12px;
      height: 12px;
      stroke: ${colors.white};
      & path {
        fill: ${colors.white};
        stroke-width: 2;
      }
    }
  `,
  flex: css`
    display: flex;
    height: 100%;
    justify-content: space-between;
    align-items: center;
  `,
};
