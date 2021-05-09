import { useState } from 'react';

export interface LimitInputTemplateProps {
  value?: any;
  onChange?: (e: any) => void;
  limit?: number;
}

export const LimitInputTemplate: React.FC<LimitInputTemplateProps> = ({
  value,
  onChange,
  limit,
}) => {
  const [active, setActive] = useState(false);

  const renderBorder = () => {
    if (value.length >= limit) {
      // return animation['border--warning'];
      return 'transition-colors border-red-500 ease-in-out';
    }
    if (active) {
      // return animation['focus-border--darkgreen__3'];
      return 'transition-colors focus:border-green-600 ease-in-out duration-300';
    }
    return '';
  };

  const renderBackground = () => {
    if (value.length >= limit) {
      // return animation['background--lightred__0'];
      return 'transition-colors bg-red-50 ease-in-out';
    }
    if (active) {
      // return animation['background--white'];
      return 'transition-colors bg-white ease-in-out';
    }
    return '';
  };

  const renderColor = () => {
    if (value.length >= limit) {
      // return animation['c--warning'];
      return 'transition-colors text-red-500 ease-in-out';
    }
    // return animation['c--darkgreen__3'];
    return 'transition-colors text-green-800 ease-in-out';
  };

  return (
    <div>
      <div className="min-h-full relative w-full">
        <input
          spellCheck
          value={value}
          onFocus={() => setActive(true)}
          onBlur={() => setActive(false)}
          onChange={onChange}
          className={`min-h-full h-12 outline-none relative font-light border border-gray-300 rounded-lg text-sm text-gray-700 w-full px-4 py-2 ${renderBorder()} ${renderBackground()}`}
        ></input>
        <div className="absolute bottom-1 right-2">
          <h3 className={`text-xs ${renderColor()}`}>{limit - value.length}</h3>
        </div>
      </div>
      {value.length >= limit && (
        <div>
          <h3 className="text-sm text-red-500">
            Please shorten your title to {limit} characters or less.
          </h3>
        </div>
      )}
    </div>
  );
};
