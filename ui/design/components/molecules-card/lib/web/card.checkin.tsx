/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';
import { Star } from '@nextbnb/design/assets/svg/original';
import { ChevronDown } from '@nextbnb/design/assets/svg/regular';
import { useCheckin } from '../logic/logic.checkin';
import {
  checkInBorder,
  checkOutBorder,
  guestBorder,
} from '../logic/logic.checkin';
import { $CARD } from '../constant/appearance';

/**
 * Renders the checkin card
 */
export const CheckInCard: React.FC<{
  length?: number;
}> = () => {
  const [selected, dispatchSelected] = useCheckin();

  return (
    <div>
      <div
        css={{
          backgroundColor: 'white',
          zIndex: 50,
          borderRadius: 10,
          padding: '22px 0',
          boxShadow: 'rgba(0, 0, 0, 0.2) 0px 4px 8px',
        }}
        sx={{
          border: '1px solid grey.300',
        }}
      >
        <div
          css={{
            padding: '0 24px',
          }}
        >
          <div
            css={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <h3
              css={{
                padding: '10px 0',
                fontSize: 21,
                fontWeight: 500,
              }}
              sx={{
                color: 'grey.700',
              }}
            >
              Add dates for prices
            </h3>
            <div
              css={{
                width: 100,
                padding: '10px 0',
                fontSize: 21,
                fontWeight: 500,
              }}
              sx={{
                color: 'grey.700',
              }}
            >
              <div
                css={{
                  display: 'inline-block',
                  marginRight: 4,
                }}
              >
                <Star width={10} />
              </div>
              <span
                css={{
                  display: 'inline-block',
                  fontSize: 14,
                  marginRight: 4,
                }}
              >
                4.93
              </span>
              <span
                css={{
                  display: 'inline-block',
                  fontSize: 14,
                  fontWeight: 100,
                }}
                sx={{
                  color: 'grey.400',
                }}
              >
                (248)
              </span>
            </div>
          </div>
          <div
            css={{
              borderRadius: 8,
              marginTop: 12,
            }}
            sx={{
              border: '1px solid grey.300',
            }}
          >
            <div css={{ height: 60, display: 'flex', width: '100%' }}>
              <div
              css={{width: '50%'}}
                onClick={() => {
                  dispatchSelected({ type: 'checkin' });
                }}
              >
                <div css={{ padding: '0 12px' }}>
                  <label
                    css={{
                      display: 'block',
                      textAlign: 'left',
                      fontSize: 10,
                      fontWeight: 700,
                    }}
                    sx={{
                      color: 'grey.80`0',
                      ...(selected ? {border: '2px solid', borderColor: 'grey.800'}: {border: '1px solid', borderColor: 'grey.300'})
                    }}
                  >
                    CHECK-IN
                  </label>
                  <input
                    css={{
                      width: '100%',
                      fontWeight: 300,
                      fontSize: 14,
                      border: 'none',
                      outline: 'none',
                    }}
                    placeholder="Add date"
                  />
                </div>
              </div>
              <div
                css={{width: '50%'}}
                onClick={() => {
                  dispatchSelected({ type: 'checkout' });
                }}
              >
                <div css={{ padding: '0 12px' }}>
                  <label
                    css={{
                      display: 'block',
                      textAlign: 'left',
                      fontSize: 10,
                      fontWeight: 700,
                    }}
                    sx={{ color: 'grey.800' }}
                  >
                    CHECK-OUT
                  </label>
                  <input
                    placeholder="Add date"
                    css={{
                      width: '100%',
                      fontWeight: 300,
                      fontSize: 14,
                      border: 'none',
                      outline: 'none',
                    }}
                  />
                </div>
              </div>
            </div>
            <button
              onClick={() => {
                dispatchSelected({ type: 'guests' });
              }}
              css={{
                height: 60,
                ...(selected.guests
                  ? { borderRadius: 6 }
                  : {
                      borderTop: '1px solid transparent',
                      borderBottom: '1px solid grey.400',
                      borderLeft: '1px solid grey.400',
                      borderRight: '1px solid grey.400',
                      borderBottomLeftRadius: 6,
                      borderBottomRightRadius: 6,
                      width: '100%',
                    }),
              }}
              sx={{
                bg: 'transparent',
                ...(selected.guests
                  ? { border: '1px solid grey.800' }
                  : {
                      bg: 'transparent',
                    }),
              }}
            >
              <div
              // className={guestBorder(selected)}
              >
                <div
                  css={{
                    padding: '0 12px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <div>
                    <label
                      css={{
                        display: 'block',
                        textAlign: 'left',
                        fontSize: 10,
                        fontWeight: 700,
                      }}
                      sx={{ color: 'grey.800' }}
                    >
                      GUESTS
                    </label>
                    <p css={{ fontWeight: 300, fontSize: 14 }}>1 guest</p>
                  </div>
                  <div>
                    <ChevronDown width={14} />
                  </div>
                </div>
              </div>
            </button>
          </div>
          <div css={{ marginTop: 24 }}>
            <button
              css={{
                width: '100%',
                padding: '14px 0',
                fontSize: 15,
                borderRadius: 5,
                fontWeight: 300,
              }}
              sx={{ bg: 'red.500', color: 'white' }}
            >
              Check availability
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const checkin = (props) => {
  return {
    [$CARD.checkin]: {
      component: <CheckInCard {...props} />,
      css: {},
    },
  };
};
