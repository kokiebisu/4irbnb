/** @jsxRuntime classic */
/** @jsx jsx */
import { $BUTTON } from '../constants/appearance';
import { jsx } from 'theme-ui';
import { web, theme } from '../styles/button.privacy';

/**
 * Renders the privacy button component
 * @param {string} title - Title of the button
 * @param {boolean} inverse - Whether if the button takes the inverse style or not
 */
export const PrivacyButton: React.FC<{ title?: string; inverse?: boolean }> = ({
  title = 'Button',
  inverse = false,
}) => {
  return (
    <div
      style={{ whiteSpace: 'nowrap' }}
      css={web.wrapper}
      sx={inverse ? theme.wrapper.inverse : theme.wrapper.plain}
    >
      <h4 sx={inverse ? theme.label.inverse : theme.label.plain}>{title}</h4>
    </div>
  );
};

export const privacy = (props) => {
  return {
    [$BUTTON.privacy]: {
      component: <PrivacyButton {...props} />,
      css: {},
    },
  };
};
