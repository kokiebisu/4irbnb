/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Button, $BUTTON } from '@nextbnb/atoms-button/dist/bundle.esm.js';
import { $INPUT } from '../constant/appearance';
import { useState } from 'react';

const ClosedInput: React.FC<{
  title?: string;
  data?: { value: boolean };
  selected?: true;
  value?: string;
  setData?: any;
}> = ({
  title = 'Title here',
  data = { value: null },
  selected = false,
  setData,
  value = '',
}) => {
  const [inputValue, setInputValue] = useState(false);

  const handleDisplayingValue = (newValue) => {
    if (typeof data.value === 'boolean' && setData) {
      return setData({ ...data, [value]: newValue });
    }
    setInputValue(newValue);
  };

  const displayingValue =
    typeof data.value === 'boolean' ? data.value : inputValue;
  return (
    <div
      css={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <div>
        <h4 css={{ fontSize: 15 }}>{title}</h4>
      </div>
      <div css={{ display: 'flex' }}>
        <div css={{ marginRight: 12 }}>
          <Button
            variant={$BUTTON.closed}
            content="close"
            onClick={() => handleDisplayingValue(false)}
            selected={!displayingValue}
          />
        </div>
        <div>
          <Button
            variant={$BUTTON.closed}
            content="check"
            onClick={() => handleDisplayingValue(true)}
            selected={displayingValue}
          />
        </div>
      </div>
    </div>
  );
};

export const closed = (props) => {
  return {
    [$INPUT.closed]: {
      component: <ClosedInput {...props} />,
      css: {},
    },
  };
};
