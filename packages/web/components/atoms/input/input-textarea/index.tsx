import { useState } from 'react';
import animation from '@styles/animation.module.scss';

export interface TextAreaInputProps {
  value?: any;
  onChange?: (e: any) => void;
  limit?: number;
}

export const TextAreaInput: React.FC<TextAreaInputProps> = ({
  value,
  onChange,
  limit,
}) => {
  const [active, setActive] = useState(false);

  const renderBorder = () => {
    if (value.length >= limit) {
      return animation['border--warning'];
    }
    if (active) {
      return animation['focus-border--darkgreen__3'];
    }
    return '';
  };

  const renderBackground = () => {
    if (value.length >= limit) {
      return animation['background--lightred__0'];
    }
    if (active) {
      return animation['background--white'];
    }
    return '';
  };

  const renderColor = () => {
    if (value.length >= limit) {
      return animation['c--warning'];
    }
    return animation['c--darkgreen__3'];
  };

  return (
    <div>
      <div style={{ minHeight: 300 }} className="relative w-full">
        <textarea
          spellCheck
          value={value}
          onFocus={() => setActive(true)}
          onBlur={() => setActive(false)}
          onChange={onChange}
          className={`relative font-thin border border-gray-400 rounded text-md text-gray-700 h-full w-full p-3 outline-none ${[
            animation['transition'],
          ].join(' ')} ${renderBorder()} ${renderBackground()}`}
          style={{
            resize: 'vertical',
            minHeight: 300,
          }}
        />
        <div className="absolute bottom-5 right-5">
          <h3 className={`text-sm ${renderColor()}`}>{limit - value.length}</h3>
        </div>
      </div>
      {value.length >= limit && (
        <div>
          <h3 className="text-sm text-red-500">
            Please shorten your description to {limit} characters or less.
          </h3>
        </div>
      )}
    </div>
  );
};

export const textarea = (props) => {
  return {
    textarea: <TextAreaInput {...props} />,
  };
};
