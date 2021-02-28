/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useState } from 'react';
import { styleContainer, styleInput, styleLabel } from './styling.select';
import { renderShape } from '../logic/logic.region';
import { $INPUT } from '../constant/appearance';

/**
 * Renders the text input component
 * @param {string} name - Type of input
 * @param {string} placeholder - Placeholder
 * @param {function} handleChange
 * @param {string} value - Current value of the input
 * @param {string} direction - direction in which the input if attached to another
 * @param {string} inputType - Whether if the input is text-based or select-based
 */
const RegionInput: React.FC<{
  handleChange?: any;
  value?: string;
  direction?: string;
  errors?: boolean;
}> = ({ handleChange, value = null, direction = '', errors = false }) => {
  const [inputValue, setInputValue] = useState('');
  const [fieldActive, setFieldActive] = useState(false);

  const handleDisplayingValue = (e) => {
    setInputValue(e.target.value);
  };

  const displayingValue = typeof value === 'string' ? value : inputValue;

  return (
    <div
      css={{
        height: 60,
        display: 'flex',
        position: 'relative',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          padding: '0 12px',
          position: 'relative',
          height: '100%',
          width: '100%',
        }}
        sx={{
          ...styleContainer(errors, fieldActive, displayingValue),
        }}
      >
        <select
          id="region"
          onChange={
            typeof value === 'string' ? handleChange : handleDisplayingValue
          }
          value={value}
          onFocus={() => setFieldActive(true)}
          onBlur={() => setFieldActive(false)}
          css={{
            height: '100%',
            borderRadius: 10,
            padding: 0,
            width: '100%',
            display: 'block',
            border: 'none',
            fontSize: 16,
            fontWeight: 300,
            position: 'relative',
            top: '0px',
            outline: 'none',
            paddingTop: '20px',
            color: 'rgb(104, 104, 104)',
          }}
          sx={{
            '::placeholder': {
              color: 'grey.500',
            },
            ...styleInput(errors, fieldActive),
          }}
        >
          <option value="canada">Canada (+1)</option>
          <option value="japan">Afghanistan (+1)</option>
          <option value="japan">United States (+1)</option>
          <option value="japan">Korea (+1)</option>
          <option value="japan">Mexico (+1)</option>
        </select>
        <label
          htmlFor="region"
          style={{ position: 'absolute' }}
          sx={{
            ...styleLabel(errors, fieldActive),
          }}
        >
          Country/Region
        </label>
      </div>
    </div>
  );
};

export const region = (props) => {
  return {
    [$INPUT.region]: {
      component: <RegionInput {...props} />,
      css: {},
    },
  };
};
