import theme from 'styled-theming';
import { lighten, darken } from 'polished';
import { colors, sizes } from 'styles';
import { css } from 'styled-components';

const notificationColors = {
  description: theme('mode', {
    light: lighten(0.025, 'red'),
  }),
  header: theme('mode', {
    light: darken(0.05, 'red'),
  }),
  lock: theme('mode', {
    light: lighten(0.025, 'red'),
  }),
};

export const cookieNotificationStyles = {
  wrapper: css`
    width: 100%;
    background-color: white;
    box-shadow: 0px 0px 40px 0px rgba(0, 0, 0, 0.27);
    border-radius: 11px;
  `,
  inner: css`
    padding: 25px 20px;
    @media ${sizes.lg} {
      display: flex;
      justify-content: space-between;
    }
  `,
  header: css`
    display: flex;
    margin-bottom: 10px;
  `,
  content: css`
    width: 100%;

    &.text {
      @media ${sizes.lg} {
        width: 60%;
        margin-right: 20px;
      }
    }

    &.buttons {
      display: flex;
      align-items: center;
      margin-top: 15px;

      @media ${sizes.sm} {
        width: 40%;
        margin-top: 0px;
      }
    }
  `,
  icon: css`
    width: 13px;
    height: 15px;
    svg {
      width: 100%;
      height: 100%;
      path {
        fill: ${notificationColors.lock};
      }
    }
  `,
  buttons: css`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 10px;
    width: 100%;
  `,
  title: css`
    font-weight: 700;
    font-size: 16px;
    color: ${notificationColors.header};
    margin-right: 10px;
    letter-spacing: 0.25px;
  `,
  description: css`
    font-weight: 300;
    font-size: 14px;
    color: ${notificationColors.description};
    letter-spacing: 0.25px;
    line-height: 18px;
  `,
};
