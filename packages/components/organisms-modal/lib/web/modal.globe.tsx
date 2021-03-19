/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useState } from 'react';
import { Button, $BUTTON } from '@nextbnb/atoms-button/dist/bundle.esm';
import {
  Prototype,
  $PROTOTYPE,
} from '@nextbnb/prototype-globe/dist/bundle.esm';
import { $MODAL } from '../constant/appearance';

const GlobeModal: React.FC<{ toggleDispatch: (params) => void }> = ({
  toggleDispatch,
}) => {
  const [prototype, setPrototype] = useState($PROTOTYPE.language);
  return (
    <div>
      <div>
        <div>
          <Button
            variant={$BUTTON.modal}
            modal="close"
            onClick={() => toggleDispatch({ type: 'toggle_globe' })}
          />
        </div>
      </div>
      <div>
        <div
          css={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: 50,
          }}
        >
          <div css={{ marginRight: 32 }}>
            <Button
              variant={$BUTTON.underline}
              title="Language and region"
              font={16}
              bold
              unselected={prototype !== $PROTOTYPE.language}
              onClick={() => setPrototype($PROTOTYPE.language)}
            />
          </div>
          <div>
            <Button
              variant={$BUTTON.underline}
              title="Currency"
              font={16}
              bold
              unselected={prototype !== $PROTOTYPE.currency}
              onClick={() => setPrototype($PROTOTYPE.currency)}
            />
          </div>
        </div>
        <Prototype variant={prototype} />
      </div>
    </div>
  );
};

export const globe = (props) => {
  return {
    [$MODAL.globe]: {
      component: <GlobeModal {...props} />,
      css: {
        maxWidth: 720,
        padding: 25,
        height: 'fit-content',
        borderRadius: 16,
      },
    },
  };
};
