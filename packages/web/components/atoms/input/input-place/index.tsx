import { useRef, useState } from 'react';
import color from '@styles/color.module.scss';
import input from '@input/input.module.scss';
import { Icon, $Icon } from '@icons';
import useOnClickOutside from '@hooks/useOnClickOutside';

export interface PlaceInputProps {
  value?: any;
  direction?: 'top' | 'bottom' | undefined;
  onChange?: (e: any) => void;
}

/**
 * Renders the text input component
 * @param {string} name - Type of input
 * @param {string} placeholder - Placeholder
 * @param {function} changePlace - Change the place type
 * @param {string} value - Current value of the input
 * @param {string} direction - direction in which the input if attached to another
 * @param {string} inputType - Whether if the input is text-based or select-based
 */
export const PlaceInput: React.FC<PlaceInputProps> = ({
  value,
  direction,
  onChange,
}) => {
  const containerRef = useRef();
  const [expanded, setExpanded] = useState(false);
  useOnClickOutside(containerRef, () => {
    if (expanded) {
      setExpanded(!expanded);
    }
  });

  const renderShape = () => {
    switch (direction) {
      case 'top':
        return 'border-b border-l border-r border-gray-400 rounded-b-lg';
      case 'bottom':
        return 'border-t border-l border-r border-gray-400 rounded-t-lg';
      case 'middle':
        return 'border border-gray-400';
      default:
        return 'border border-gray-400 rounded-lg';
    }
  };

  return (
    <div
      ref={containerRef}
      style={{ height: 50 }}
      className={`flex relative items-center ${[input['outside']].join(' ')}`}
    >
      <div
        className={`relative h-full w-full ${renderShape()} ${
          expanded && [input['container__active']].join(' ')
        }`}
      >
        <div
          style={{ padding: '0 12px' }}
          onClick={() => setExpanded(!expanded)}
          className={`h-full flex justify-between items-center bg-transparent p-0 w-full text-md font-light ${[
            color['b--0'],
          ].join(' ')}`}
        >
          <div>
            <label
              style={{ top: 15, padding: '0 12px' }}
              htmlFor="place"
              className="absolute text-sm text-gray-700 font-thin left-0 cursor-pointer"
            >
              {value}
            </label>
          </div>
          <div>
            {expanded ? (
              <Icon variant={$Icon.ACTION} actionType="top" width={13} />
            ) : (
              <Icon variant={$Icon.ACTION} actionType="bottom" width={13} />
            )}
          </div>
        </div>
        {expanded && (
          <div
            className="w-full"
            style={{
              position: 'absolute',
              top: 48,
              zIndex: 60,
            }}
          >
            <div
              className="rounded-md bg-white border border-gray-300 shadow-md"
              style={{
                padding: 16,
              }}
            >
              <div>
                <div
                  className="flex items-center cursor-pointer h-full justify-between bg-transparent"
                  style={{
                    padding: 12,
                  }}
                  onClick={() => {
                    onChange('Entire place');
                    setExpanded(!expanded);
                  }}
                >
                  <div>
                    <div>
                      <h3 className="text-left text-sm">Entire place</h3>
                    </div>
                    <div>
                      <p className="text-sm text-left">
                        Guests have the whole place to themselves--there's a
                        private entrance and no shared spaces. A bedroom,
                        bathroom, and kitchen and usually included.
                      </p>
                    </div>
                  </div>
                  {value === 'Entire place' && (
                    <div className="flex items-center">
                      <Icon
                        variant={$Icon.SEMANTIC}
                        semanticType="check"
                        width={32}
                      />
                    </div>
                  )}
                </div>
              </div>
              <div>
                <div
                  className="flex items-center cursor-pointer h-full bg-transparent"
                  style={{
                    padding: 12,
                  }}
                  onClick={() => {
                    onChange('Private room');
                    setExpanded(!expanded);
                  }}
                >
                  <div>
                    <div>
                      <h3 className="text-left text-sm">Private room</h3>
                    </div>
                    <div>
                      <p className="text-sm text-left">
                        Guests have their own private room for sleeping. Other
                        areas could be shared.
                      </p>
                    </div>
                  </div>
                  {value === 'Private room' && (
                    <div className="flex items-center">
                      <Icon
                        variant={$Icon.SEMANTIC}
                        semanticType="check"
                        width={32}
                      />
                    </div>
                  )}
                </div>
              </div>
              <div>
                <div
                  className="flex items-center cursor-pointer h-full bg-transparent"
                  style={{
                    padding: 12,
                  }}
                  onClick={() => {
                    onChange('Shared room');
                    setExpanded(!expanded);
                  }}
                >
                  <div>
                    <div>
                      <h3 className="text-left text-sm">Shared room</h3>
                    </div>
                    <div>
                      <p className="text-sm text-left">
                        Guests sleep in a bedroom or a common area that could be
                        shared with others.
                      </p>
                    </div>
                  </div>
                  {value === 'Shared room' && (
                    <div className="flex items-center">
                      <Icon
                        variant={$Icon.SEMANTIC}
                        semanticType="check"
                        width={32}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export const place = (props) => {
  return {
    place: <PlaceInput {...props} />,
  };
};
