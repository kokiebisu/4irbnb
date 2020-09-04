import theme from 'styled-theming';
import { css } from 'styled-components';
import { colors } from 'styles';

export const landingHeaderColors = {
  fill: theme('mode', {
    light: colors.white,
  }),
};

export const landingHeaderStyles = {
  wrapper: css`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,
  left: css``,
  middle: css`
    display: flex;
  `,
  right: css``,
};
