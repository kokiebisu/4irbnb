/** @jsxRuntime classic */
/** @jsx jsx */
import { $BUTTON } from '../constants/appearance';
import { jsx } from 'theme-ui';
import { web, theme } from '../styles/button.link';

const LinkButton: React.FC<{ title?: string }> = ({ title = 'Button' }) => {
  return (
    <div>
      <h4 css={web.label.text}>{title}</h4>
    </div>
  );
};

export const link = (props) => {
  return {
    [$BUTTON.link]: {
      component: <LinkButton {...props} />,
      css: {},
    },
  };
};
