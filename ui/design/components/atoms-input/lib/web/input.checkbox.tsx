/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { CheckPlain } from '@nextbnb/design/assets/svg/original';
import { $INPUT } from '../constant/appearance';
import { useState } from 'react';

const CheckboxInput: React.FC<{
  check?: () => void;
  checked?: boolean;
  title?: string;
  description?: string;
}> = ({ check, checked = null, title = 'Title here', description }) => {
  const [inputValue, setInputValue] = useState(false);

  const handleDisplayingValue = () => {
    if (typeof checked === 'boolean' && check) {
      check();
    }
    setInputValue(!inputValue);
  };
  const displayingValue = checked ? checked : inputValue;

  return (
    <div css={{ display: 'flex' }}>
      <div css={{ marginRight: 16 }}>
        <div
          onClick={handleDisplayingValue}
          style={{ cursor: 'pointer', height: 24, width: 24 }}
          css={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid',
            borderColor: 'grey.400',
            borderRadius: 4,
          }}
          sx={{ ...(displayingValue ? { bg: 'black' } : { bg: 'white' }) }}
        >
          <div
            css={{
              position: 'relative',
              padding: 12,
              bottom: 1,
            }}
          >
            <CheckPlain width={15} stroke="white" strokeWidth={5} />
          </div>
        </div>
      </div>
      <div css={{ position: 'relative', top: 2 }}>
        <div>
          <h4>{title}</h4>
        </div>
        <div>
          <h4 css={{ fontSize: 14, color: 'grey.500' }}>{description}</h4>
        </div>
      </div>
    </div>
  );
};

export const checkbox = (props) => {
  return {
    [$INPUT.checkbox]: {
      component: <CheckboxInput {...props} />,
      css: {},
    },
  };
};
