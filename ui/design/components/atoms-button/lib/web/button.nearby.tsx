/** @jsxRuntime classic */
/** @jsx jsx */
import { $BUTTON } from '..';
import { jsx } from 'theme-ui';
import { web, theme } from '../styles/button.nearby';

const NearbyButton: React.FC<{ label?: string }> = ({ label = 'Nearby' }) => {
  return (
    <div css={web.wrapper}>
      <div css={web.label.wrapper}>
        <h4 css={web.label.text}>{label}</h4>
      </div>
    </div>
  );
};

export const nearby = (props) => {
  return {
    [$BUTTON.nearby]: {
      component: <NearbyButton />,
      css: {},
    },
  };
};
