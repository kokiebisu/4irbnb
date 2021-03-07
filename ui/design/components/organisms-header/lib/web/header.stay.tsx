/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Button, $BUTTON } from '@nextbnb/atoms-button';
import { $HEADER } from '../constant/appearance';

/**
 * Renders the header for the homes page
 * @param {boolean} spread - Whether if the layout should be spread out or not
 */
const StayHeader: React.FC<{
  title?: string;
  navigate?: any;
}> = ({ title, navigate }) => {
  return (
    <header
      css={{
        height: 65,
        padding: '0px 0px',
        bg: 'white',
        boxShadow: 'rgba(0, 0, 0, 0.08) 0px 1px 12px',
      }}
    >
      <div css={{ display: 'flex', alignItems: 'center' }}>
        <div>
          <Button
            variant={$BUTTON.logo}
            noName
            fill="##008489"
            onClick={() => navigate('/')}
            extendsTo={{
              display: 'inline-block',
              padding: 14,
              borderRadius: 9999,
            }}
          />
        </div>
        {title && (
          <div css={{ position: 'relative', bottom: 2 }}>
            <h4 css={{ fontSize: 16, color: 'grey.600' }}>{title}</h4>
          </div>
        )}
      </div>
    </header>
  );
};

export const stay = (props) => {
  return {
    [$HEADER.stay]: {
      component: <StayHeader {...props} />,
      css: {},
    },
  };
};
