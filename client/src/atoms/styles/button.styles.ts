import { colors } from 'styles';
import theme from 'styled-theming';
import { lighten } from 'polished';
import { css } from 'styled-components';

export const buttonColors = {
  background: theme('mode', {
    light: colors.white,
  }),
  content: theme('mode', {
    light: colors.gray,
  }),
  border: theme('mode', {
    light: lighten(0.4, colors.gray),
  }),
};

export const cookieButtonStyles = {
  wrapper: css`
    padding: 14px 20px;
    font-size: 16px;
    letter-spacing: 1.1;
    font-weight: 300;
    white-space: nowrap;
    min-width: none;
  `,
  inverse: css`
    border: 1px solid red;
    background-color: transparent;
  `,
  normal: css`
    color: ${colors.white};
    background-color: red;
  `,
};

export const transparentButtonStyles = {
  wrapper: css`
    padding: 15px;
    background-color: transparent;
    border-radius: 24px;
    cursor: pointer;
    &:focus {
      outline: none;
    }
    &:hover {
      background-color: red;
    }
  `,
};

export const globeButtonStyles = {
  flex: css`
    display: flex;
    align-items: center;
  `,
  globe: css`
    position: relative;
    top: 50%;
    margin-right: 6px;
    width: 16px;
    height: 16px;
  `,
  arrow: css`
    width: 10px;
  `,
};

export const menuButtonStyles = {
  wrapper: css`
    background-color: red;
    border-radius: 48px;
    padding: 5px 6px 5px 12px;
    transition: 0.2s ease-in;
    border: 1px solid red;
    &:hover {
      box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
    }
  `,
  flex: css`
    display: flex;
    align-items: center;
  `,
  icon: css`
    svg {
      width: 100%;
      height: 100%;
      path {
        fill: red;
      }
    }
  `,
  bars: css`
    margin-right: 12px;
    height: 15px;
    width: 17px;
  `,
  avatar: css`
    height: 32px;
    width: 32px;
  `,
};

export const searchButtonStyles = {
  wrapper: css`
    background-color: rgb(215, 4, 102);
    border: none;
    padding: 15px 22px;
    color: white;
    border-radius: 8px;
    transition: 0.8s;
    &:hover {
      background-color: #ff385c;
    }
  `,
  content: css`
    display: flex;
    align-items: center;
    justify-content: center;
  `,

  icon: css`
    position: relative;
    margin-right: 8px;
    & svg {
      width: 14px;
      height: 14px;
      stroke: white;
      path {
        fill: white;
        stroke-width: 2;
      }
    }
  `,
  text: css`
    font-weight: 300;
    font-size: 16px;
  `,
};
