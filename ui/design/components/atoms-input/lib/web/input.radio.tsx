/** @jsxRuntime classic */
/** @jsx jsx */
import { useState } from 'react';
import { jsx } from 'theme-ui';
import { $INPUT } from '../constant/appearance';

const RadioInput: React.FC<{
  title?: string;
  subtitle?: string;
  selected?: boolean;
  select?: (params?: string) => void;
  value?: string;
}> = ({ title = 'title here', subtitle, selected = null, select }) => {
  const [inputSelected, setInputSelected] = useState(false);

  const displayingValue =
    typeof selected === 'boolean' ? selected : inputSelected;

  const handleDisplayingValue = (value) => {
    if (typeof selected === 'boolean' && select) {
      return select(value);
    }
    setInputSelected(!inputSelected);
  };

  return (
    <div css={{ display: 'flex', cursor: 'pointer' }}>
      <div css={{ position: 'relative', marginRight: 12, cursor: 'pointer' }}>
        <button
          css={{
            width: 20,
            height: 20,
            border: '1px solid lightgray',
            backgroundColor: displayingValue ? 'black' : 'white',
            borderRadius: '50%',
            ':hover': {
              border: '1px solid black !important',
              transition: '0.4s border-color',
            },
          }}
          onClick={() => {
            handleDisplayingValue(title);
          }}
        />
        {displayingValue && (
          <div
            style={{
              position: 'absolute',
              top: 7,
              left: 7,
              backgroundColor: 'white',
              width: 6,
              height: 6,
              borderRadius: 9999,
              cursor: 'pointer',
            }}
          ></div>
        )}
      </div>
      <div>
        <div css={{ marginBottom: 8 }}>
          <p css={{ fontSize: 14, color: 'black' }}>{title}</p>
        </div>
        <div>
          <p css={{ fontSize: 13, color: 'grey.500' }}>{subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export const radio = (props) => {
  return {
    [$INPUT.radio]: {
      component: <RadioInput {...props} />,
      css: {},
    },
  };
};
