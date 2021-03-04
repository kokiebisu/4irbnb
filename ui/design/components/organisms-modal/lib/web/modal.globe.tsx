/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useState } from 'react';
import { Button, $BUTTON } from '@nextbnb/atoms-button';
import { Prototype, $Prototype } from '@nextbnb/prototype-globe';
import { $MODAL } from '../constant/appearance';

const GlobeModal: React.FC<{ toggleDispatch?: (params) => void }> = ({
  toggleDispatch,
}) => {
  const [prototype, setPrototype] = useState($Prototype.LANGUAGE);
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
              unselected={prototype !== $Prototype.LANGUAGE}
              onClick={() => setPrototype($Prototype.LANGUAGE)}
            />
          </div>
          <div>
            <Button
              variant={$BUTTON.underline}
              title="Currency"
              font={16}
              bold
              unselected={prototype !== $Prototype.CURRENCY}
              onClick={() => setPrototype($Prototype.CURRENCY)}
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
      extendsTo: {
        maxWidth: 720,
        padding: 25,
        height: 'fit-content',
        borderRadius: 16,
      },
    },
  };
};
