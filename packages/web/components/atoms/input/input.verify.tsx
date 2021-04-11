import { useState } from 'react';

import layout from '@styles/layout.module.scss';
import font from '@styles/font.module.scss';
import color from '@styles/color.module.scss';
import shape from '@styles/shape.module.scss';
import space from '@styles/space.module.scss';
import animation from '@styles/animation.module.scss';

import { Button } from '@button';

export const VerifyInput: React.FC<{
  value?: string;
  handleChange?: () => void;
}> = ({ value = '', handleChange }) => {
  const [active, setActive] = useState(false);

  const renderBorder = () => {
    // if (value.length > 0 && !valid) {
    //   return animation["border--warning"];
    // }
    if (active) {
      return animation['focus-border--darkgreen__3'];
    }
    return '';
  };

  const renderBackground = () => {
    // if (value.length > 0 && !valid) {
    //   return animation["background--lightred__0"];
    // }
    if (active) {
      return animation['background--white'];
    }
    return '';
  };

  const renderColor = () => {
    // if (value.length > 0 && !valid) {
    //   return animation["c--warning"];
    // }
    return animation['c--darkgreen__3'];
  };

  return (
    <div>
      <div
        style={{ minHeight: 50 }}
        className={[layout['relative'], shape['w--full'], space['m-b--4']].join(
          ' '
        )}
      >
        <input
          type="tel"
          spellCheck
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          onFocus={() => setActive(true)}
          onBlur={() => setActive(false)}
          onChange={handleChange}
          className={`${[
            layout['relative'],
            font['weight--300'],
            color['b--white__2'],
            shape['br--6'],
            font['size--15'],
            color['c--gray__2'],
            shape['h--full'],
            shape['w--full'],
            space['p--12'],
            animation['transition'],
          ].join(' ')} ${renderBorder()} ${renderBackground()}`}
          style={{
            outline: 'none',
            minHeight: 50,
          }}
        ></input>

        <div className="absolute top-1/2 transform -translate-y-1/2 right-4">
          <Button
            content="Verify"
            variant="verify"
            onClick={() => alert('verify')}
          />
        </div>
      </div>
    </div>
  );
};
