/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { web, theme } from '../styles/button.banner';
import { $BUTTON } from '..';

/**
 * Renders the banner button component
 * @param {string} title - Title of the button
 */
const BannerButton: React.FC<{ title?: string }> = ({ title = 'Button' }) => {
  return (
    <div css={web.wrapper} sx={theme.wrapper}>
      <h3 style={{ fontSize: 14 }}>{title}</h3>
    </div>
  );
};

export const banner = (props) => {
  return {
    [$BUTTON.banner]: {
      component: <BannerButton {...props} />,
      css: {},
    },
  };
};
