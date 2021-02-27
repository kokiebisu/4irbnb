/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Flag } from '@nextbnb/design/assets/svg/original';
import { web, theme } from '../styles/button.report';
import { $Button } from '..';

const ReportButton: React.FC<{}> = () => {
  return (
    <div css={web.wrapper}>
      <div css={web.icon.wrapper}>
        <Flag width={16} />
      </div>
      <div>
        <h3 css={web.label.text}>Report this listing</h3>
      </div>
    </div>
  );
};

export const report = (props) => {
  return {
    [$Button.REPORT]: {
      component: <ReportButton {...props} />,
      css: {},
    },
  };
};
