import React, { useReducer, useRef } from 'react';

/**
 * Styles
 */
import shape from '../../../styles/shape.module.scss';
import color from '../../../styles/color.module.scss';
import space from '../../../styles/space.module.scss';
import layout from '../../../styles/layout.module.scss';
import font from '../../../styles/font.module.scss';
import input from './input.module.scss';

/**
 * Props
 */
import { PlaceInputProps } from './props';

/**
 * Styling
 */
import { Checked } from '../../../public/svg/original';
import { ChevronDown, ChevronTop } from '../../../public/svg/regular';
import useOnClickOutside from '../../../hooks/useOnClickOutside';

const reducer = (state, action) => {
  switch (action.type) {
    case 'expand':
      return { ...state, expanded: !state.expanded };
    case 'select':
      return { ...state, expanded: !state.expanded, selected: action.payload };
  }
};

/**
 * Renders the text input component
 * @param {string} name - Type of input
 * @param {string} placeholder - Placeholder
 * @param handleChange
 * @param {string} value - Current value of the input
 * @param {string} direction - direction in which the input if attached to another
 * @param {string} inputType - Whether if the input is text-based or select-based
 */
export const PlaceInput: React.FC<PlaceInputProps> = ({
  handleChange,
  value,
  direction,
  errors = false,
}) => {
  const containerRef = useRef();
  const [state, dispatch] = useReducer(reducer, {
    selected: 'Entire place',
    expanded: false,
  });
  useOnClickOutside(containerRef, () => {
    if (state.expanded) {
      dispatch({ type: 'expand' });
    }
  });
  const renderShape = () => {
    switch (direction) {
      case 'top':
        return [
          color['b-b--white__3'],
          color['b-l--white__3'],
          color['b-r--white__3'],
          shape['bbr--10'],
        ].join(' ');
      case 'bottom':
        return [
          color['b-t--white__3'],
          color['b-l--white__3'],
          color['b-r--white__3'],
          shape['btr--10'],
        ].join(' ');
      default:
        return [color['b--white__3'], shape['br--10']].join(' ');
    }
  };

  return (
    <div
      ref={containerRef}
      style={{ height: 50 }}
      className={`${[
        layout['flex'],
        input['outside'],
        layout['relative'],
        layout['items-center'],
      ].join(' ')}`}>
      <div
        className={`${renderShape()} ${
          state.expanded && [input['container__active']].join(' ')
        }`}
        style={{
          position: 'relative',
          height: '100%',
          width: '100%',
        }}>
        <button
          style={{ height: '100%', padding: '0 12px' }}
          onChange={handleChange}
          onClick={() => dispatch({ type: 'expand' })}
          className={`${[
            layout['flex'],
            layout['justify-between'],
            layout['items-center'],
            color['bg--transparent'],
            shape['br--10'],
            space['p--0'],
            shape['w--full'],
            color['b--0'],
            font['size--16'],
            font['weight--300'],
          ].join(' ')}`}>
          <div>
            <label
              style={{ left: 0, top: 15, cursor: 'pointer', padding: '0 12px' }}
              htmlFor='place'
              className={`${[
                layout['absolute'],
                font['size--14'],
                color['c--gray__3'],
                font['weight--100'],
              ].join(' ')}`}>
              {state.selected}
            </label>
          </div>
          <div>
            {state.expanded ? (
              <ChevronTop width={13} />
            ) : (
              <ChevronDown width={13} />
            )}
          </div>
        </button>
        {state.expanded && (
          <div
            style={{
              position: 'absolute',
              top: 48,
              zIndex: 9999,
            }}>
            <div
              style={{
                borderRadius: 6,
                backgroundColor: 'white',
                border: '1px solid lightgray',
                padding: 16,
                boxShadow:
                  'rgba(0, 0, 0, 0.15) 0px 2px 6px, rgba(0, 0, 0, 0.07) 0px 0px 0px 1px !important',
              }}>
              <div>
                <div
                  style={{
                    padding: 12,
                    display: 'flex',
                    alignItems: 'center',
                    cursor: 'pointer',
                    height: '100%',
                  }}
                  className={[color['bg--transparent']].join(' ')}
                  onClick={() =>
                    dispatch({ type: 'select', payload: 'Entire place' })
                  }>
                  <div>
                    <div>
                      <h3
                        className={[font['text--left'], font['size--14']].join(
                          ' '
                        )}>
                        Entire place
                      </h3>
                    </div>
                    <div>
                      <p
                        className={[font['size--13'], font['text--left']].join(
                          ' '
                        )}>
                        Guests have the whole place to themselves--there's a
                        private entrance and no shared spaces. A bedroom,
                        bathroom, and kitchen and usually included.
                      </p>
                    </div>
                  </div>
                  {state.selected === 'Entire place' && (
                    <div
                      className={[layout['flex'], layout['items-center']].join(
                        ' '
                      )}>
                      <Checked width={32} />
                    </div>
                  )}
                </div>
              </div>
              <div>
                <div
                  style={{
                    padding: 12,
                    display: 'flex',
                    alignItems: 'center',
                    cursor: 'pointer',
                    height: '100%',
                  }}
                  className={[color['bg--transparent']].join(' ')}
                  onClick={() =>
                    dispatch({ type: 'select', payload: 'Private room' })
                  }>
                  <div>
                    <div>
                      <h3
                        className={[font['text--left'], font['size--14']].join(
                          ' '
                        )}>
                        Private room
                      </h3>
                    </div>
                    <div>
                      <p
                        className={[font['size--13'], font['text--left']].join(
                          ' '
                        )}>
                        Guests have their own private room for sleeping. Other
                        areas could be shared.
                      </p>
                    </div>
                  </div>
                  {state.selected === 'Private room' && (
                    <div
                      className={[layout['flex'], layout['items-center']].join(
                        ' '
                      )}>
                      <Checked width={32} />
                    </div>
                  )}
                </div>
              </div>
              <div>
                <div
                  style={{
                    padding: 12,
                    display: 'flex',
                    alignItems: 'center',
                    cursor: 'pointer',
                    height: '100%',
                  }}
                  className={[color['bg--transparent']].join(' ')}
                  onClick={() =>
                    dispatch({ type: 'select', payload: 'Shared room' })
                  }>
                  <div>
                    <div>
                      <h3
                        className={[font['text--left'], font['size--14']].join(
                          ' '
                        )}>
                        Shared room
                      </h3>
                    </div>
                    <div>
                      <p
                        className={[font['size--13'], font['text--left']].join(
                          ' '
                        )}>
                        Guests sleep in a bedroom or a common area that could be
                        shared with others.
                      </p>
                    </div>
                  </div>
                  {state.selected === 'Shared room' && (
                    <div
                      className={[layout['flex'], layout['items-center']].join(
                        ' '
                      )}>
                      <Checked width={32} />
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
