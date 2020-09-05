import { css } from 'styled-components';
import { colors, breakpoints } from 'styles';
import theme from 'styled-theming';
import { lighten } from 'polished';

const sectionColors = {
  description: theme('mode', {
    light: lighten(0.05, colors.gray),
  }),
};

export const sectionAStyles = {
  flex: css`
    display: block;
    @media ${breakpoints.md} {
      display: flex;
      width: 100%;
    }
  `,
  title: css`
    width: 100%;
    padding-right: 0px;
    margin-bottom: 20px;
    @media ${breakpoints.md} {
      width: 50%;
      padding-right: 25px;
      margin-bottom: 0;
    }
    & p {
      font-weight: 300;
      font-size: 24px;
      @media ${breakpoints.md} {
        font-weight: 500;
        font-size: 26px;
      }
      @media ${breakpoints.lg} {
        font-weight: 700;
        font-size: 30px;
      }
    }
    & button {
      display: none;
      @media ${breakpoints.md} {
        display: block;
        margin-top: 20px;
      }
    }
  `,
  description: css`
    width: 100%;
    padding-right: 0px;
    @media ${breakpoints.md} {
      width: 50%;
      padding-right: 25px;
    }
    & p {
      font-weight: 100;
      font-size: 15px;
      line-height: 1.4;
      color: ${sectionColors.description};
      @media ${breakpoints.md} {
        font-size: 18px;
        line-height: 1.5;
      }
    }
  `,
  button: css`
    margin-top: 20px;
    display: block;
    @media ${breakpoints.md} {
      display: none;
    }
  `,
};
