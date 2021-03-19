/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Bullet, $BULLET } from '@nextbnb/atoms-bullet/dist/bundle.esm';

const ScenariosCreate: React.FC<{}> = () => {
  return (
    <div>
      <div css={{ marginBottom: 30 }}>
        <div css={{ marginBottom: 45 }}>
          <h3>Based on your settings, here's what you could expect</h3>
        </div>
        <div>
          {['available', 'requirements', 'confirmation', 'welcome', 'paid'].map(
            (type, index) => {
              return (
                <div key={index} css={{ marginBottom: 32 }}>
                  <Bullet variant={$BULLET.SCENARIO} type={type} />
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};

export const scenarios = (props) => {
  return {
    scenarios: {
      component: <ScenariosCreate {...props} />,
      css: {},
    },
  };
};
