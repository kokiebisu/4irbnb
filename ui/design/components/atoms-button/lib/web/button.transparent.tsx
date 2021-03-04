/** @jsxRuntime classic */
/** @jsx jsx */
import { $BUTTON } from '..';
import { jsx } from 'theme-ui';
import { web, theme } from '../styles/button.transparent';

/**
 * Renders the globe button component
 * @param {boolean} inverse - Whether if the globe button is styled in inverse
 */
const TransparentButton: React.FC<{
  inverse?: boolean;
  content?: any;
}> = ({ inverse = false, content = 'Button' }) => {
  return (
    <div
      css={web.wrapper}
      sx={{
        ...(inverse ? theme.wrapper.inverse : theme.wrapper.plain),
        padding: '12px 15px',
      }}
    >
      {content}
    </div>
  );
};

export const transparent = (props) => {
  return {
    [$BUTTON.transparent]: {
      component: <TransparentButton {...props} />,
      css: {
        bg: 'transparent',
      },
    },
  };
};
