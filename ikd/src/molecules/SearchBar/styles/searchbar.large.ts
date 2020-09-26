import theme from 'styled-theming';
import { css } from 'styled-components';
import { colors } from 'styles';
import { darken, lighten } from 'polished';
import * as mixins from 'styles/mixins';

const searchbarColors = {
  hover: theme('mode', {
    light: darken(0.05, colors.white),
  }),
  description: theme('mode', {
    light: lighten(0.05, colors.gray),
  }),
  border: theme('mode', {
    light: darken(0.25, colors.white),
  }),
  seperator: theme('mode', {
    light: darken(0.1, colors.white),
  }),
  category: theme('mode', {
    light: lighten(0.1, colors.gray),
  }),
};

export const searchbarLarge = {
  inputs: css`
    width: 100%;
    height: 70px;
    border-radius: 15px;
    border: 1px solid ${searchbarColors.border};
    display: flex;
    background-color: ${colors.white};
    box-shadow: rgb(0, 0, 0, 0.15) 0px 5px 12px;
  `,
  section: css`
    background-color: ${colors.white};
    height: 100%;
    width: 100%;
    border-radius: 15px;

    &.first {
      flex: 1.5 0 0%;
      order: 1;
      ${mixins.hoverMixin(5)}
    }

    &.second {
      flex: 0.8 0 0%;
      order: 3;
      ${mixins.hoverMixin(5)}
      ${mixins.hoverMixin(6)}
    }
    &.third {
      flex: 0.8 0 0%;
      order: 5;
      ${mixins.hoverMixin(6)}
      ${mixins.hoverMixin(7)}
    }
  `,
  select: css`
    width: inherit;
    height: inherit;
    border-radius: inherit;
    background-color: ${colors.white};
    text-align: left;
    padding: 0 20px;
    ${mixins.borderMixin(1, 2, 1, 2, 'transparent')};

    &.first {
      ${mixins.borderMixin(1, 2, 1, 1, 'transparent')};
    }

    &.first:hover {
      ${mixins.borderMixin(1, 2, 1, 1, searchbarColors.border)};
    }

    &.last {
      ${mixins.borderMixin(1, 1, 1, 2, 'transparent')};
    }

    &.last:hover {
      ${mixins.borderMixin(1, 1, 1, 2, searchbarColors.border)};
    }

    &:hover {
      ${mixins.borderMixin(1, 2, 1, 2, searchbarColors.border)};
    }
  `,
  lastsection: css`
    background-color: inherit;
    border-radius: 15px;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    position: relative;
    &:hover {
      background-color: ${searchbarColors.hover};
    }
    flex: 1.15 0 0%;
    order: 7;
    ${mixins.hoverMixin(7)}
  `,
  seperator: css`
    width: 1px;
    height: 100%;
    background-color: ${searchbarColors.seperator};
    align-self: center;
    &.first {
      order: 2;
    }
    &.second {
      order: 4;
    }
    &.third {
      order: 6;
    }
  `,
  search: css`
    position: absolute;
    right: 0px;
    z-index: 5px;
    margin-right: 12px;
  `,
  title: css`
    p {
      font-weight: 700;
      letter-spacing: 0.5px;
      font-size: 10px;
      text-transform: uppercase;
    }
  `,
  description: css`
    margin-top: 8px;
    p {
      font-size: 14px;
      font-weight: 300;
      color: ${searchbarColors.description};
    }
  `,
  list: css`
    background-color: transparent;
    margin-right: 20px;

    &.outline {
    }
  `,
  options: css`
    background-color: white;
    display: flex;
    flex: 1 1 0%;
    height: 100%;
    border-radius: inherit;
  `,
};
