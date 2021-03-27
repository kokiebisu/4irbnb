/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { $LAYOUT } from '../constant/appearance';

/**
 * Renders the Input which appears in the /become-a-host
 * @param {string} title - Title of the group
 */
const InputLayout: React.FC<{
  title?: string;
}> = ({ title = 'Title here', children }) => {
  return (
    <div>
      <div css={{ marginBottom: 8 }}>
        <h3 css={{ fontSize: 16 }} sx={{ color: 'grey.500' }}>
          {title}
        </h3>
      </div>
      <div>{children}</div>
    </div>
  );
};

export const input = (props) => {
  return {
    [$LAYOUT.input]: {
      component: <InputLayout {...props} />,
      css: {},
    },
  };
};
