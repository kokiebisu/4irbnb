/** @jsxRuntime classic */
/** @jsx jsx */
import { $Button } from '..';
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
    [$Button.LINK]: {
      component: <LinkButton {...props} />,
      css: {},
    },
  };
};
