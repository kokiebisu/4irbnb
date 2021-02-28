/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { CheckPlain } from '@nextbnb/design/assets/svg/original';
import { $Bullet } from '..';

const CheckBullet: React.FC<{ title?: string }> = ({
  title = 'Title here',
}) => {
  return (
    <div css={{ display: 'flex', alignItems: 'center' }}>
      <div css={{ marginRight: '8px' }}>
        <CheckPlain width={24} strokeWidth={2} stroke="green" />
      </div>
      <div>
        <h4 sx={{ color: 'grey.600' }} css={{ fontSize: 18 }}>
          {title}
        </h4>
      </div>
    </div>
  );
};

export const check = (props) => {
  return {
    [$Bullet.CHECK]: {
      component: <CheckBullet {...props} />,
      css: {},
    },
  };
};
