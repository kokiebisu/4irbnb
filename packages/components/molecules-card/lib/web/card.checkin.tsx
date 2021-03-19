/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useRef } from 'react'
import { jsx } from 'theme-ui'
import { Star } from '@nextbnb/assets/svg/original'
import { ChevronDown } from '@nextbnb/assets/svg/regular'
import { useCheckin } from '../logic/logic.checkin'
import { $CARD } from '../constant/appearance'
import { useOnClickOutside } from '@nextbnb/design/hooks/useOnClickOutside'

/**
 * Renders the checkin card
 */
export const CheckInCard: React.FC<{
  length?: number
}> = () => {
  const [selected, dispatchSelected] = useCheckin()
  const containerRef = useRef<HTMLDivElement>(null)
  useOnClickOutside(containerRef, () => {
    dispatchSelected({ type: 'reset' })
  })
  return (
    <div>
      <div
        css={{
          backgroundColor: 'white',
          zIndex: 50,
          borderRadius: 10,
          padding: '22px 0',
          boxShadow: 'rgba(0, 0, 0, 0.2) 0px 4px 8px'
        }}
        sx={{
          border: '1px solid grey.300'
        }}
      >
        <div
          css={{
            padding: '0 24px'
          }}
        >
          <div
            css={{
              display: 'flex',
              justifyContent: 'space-between'
            }}
          >
            <h3
              css={{
                padding: '10px 0',
                fontSize: 21,
                fontWeight: 500
              }}
              sx={{
                color: 'grey.700'
              }}
            >
              Add dates for prices
            </h3>
            <div
              css={{
                width: 100,
                padding: '10px 0',
                fontSize: 21,
                fontWeight: 500
              }}
              sx={{
                color: 'grey.700'
              }}
            >
              <div
                css={{
                  display: 'inline-block',
                  marginRight: 4
                }}
              >
                <Star width={10} />
              </div>
              <span
                css={{
                  display: 'inline-block',
                  fontSize: 14,
                  marginRight: 4
                }}
              >
                4.93
              </span>
              <span
                css={{
                  display: 'inline-block',
                  fontSize: 14,
                  fontWeight: 100
                }}
                sx={{
                  color: 'grey.400'
                }}
              >
                (248)
              </span>
            </div>
          </div>
          <div
            ref={containerRef}
            css={{
              borderRadius: 8,
              marginTop: 12
            }}
            sx={{
              border: '1px solid',
              borderColor: 'grey.300'
            }}
          >
            <div css={{ height: 60, display: 'flex', width: '100%' }}>
              <div
                css={{ width: '50%' }}
                onClick={() => {
                  dispatchSelected({ type: 'checkin' })
                }}
              >
                <div
                  css={{
                    ...(selected.checkin
                      ? { padding: '11px', borderRadius: 8 }
                      : { padding: '12px', borderTopLeftRadius: 8 })
                  }}
                  sx={{
                    ...(selected.checkin
                      ? { border: '2px solid', borderColor: 'grey.800' }
                      : { border: '1px solid', borderColor: 'grey.500' })
                  }}
                >
                  <label
                    css={{
                      display: 'block',
                      textAlign: 'left',
                      fontSize: 10,
                      fontWeight: 700
                    }}
                    sx={{
                      color: 'grey.800'
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
                      outline: 'none'
                    }}
                    placeholder="Add date"
                  />
                </div>
              </div>
              <div
                css={{ width: '50%' }}
                onClick={() => {
                  dispatchSelected({ type: 'checkout' })
                }}
              >
                <div
                  css={{
                    ...(selected.checkout
                      ? { padding: '11px', borderRadius: 8 }
                      : { padding: '12px', borderTopRightRadius: 8 })
                  }}
                  sx={{
                    ...(selected.checkout
                      ? { border: '2px solid', borderColor: 'grey.800' }
                      : {
                          borderTop: '1px solid',
                          borderBottom: '1px solid',
                          borderRight: '1px solid',
                          borderColor: 'grey.500'
                        })
                  }}
                >
                  <label
                    css={{
                      display: 'block',
                      textAlign: 'left',
                      fontSize: 10,
                      fontWeight: 700
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
                      outline: 'none'
                    }}
                  />
                </div>
              </div>
            </div>
            <button
              onClick={() => {
                dispatchSelected({ type: 'guests' })
              }}
              css={{
                width: '100%',
                ...(selected.guests
                  ? {
                      padding: '11px 0',
                      borderRadius: 8
                    }
                  : {
                      padding: '12px 0',
                      borderBottomRightRadius: 8,
                      borderBottomLeftRadius: 8
                    })
              }}
              sx={{
                bg: 'transparent',
                ...(selected.guests
                  ? { border: '2px solid', borderColor: 'grey.800' }
                  : {
                      border: '1px solid',
                      borderColor: 'grey.500',
                      bg: 'transparent'
                    })
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
                    alignItems: 'center'
                  }}
                >
                  <div>
                    <label
                      css={{
                        display: 'block',
                        textAlign: 'left',
                        fontSize: 10,
                        fontWeight: 700
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
                fontWeight: 300
              }}
              sx={{ bg: 'red.500', color: 'white' }}
            >
              Check availability
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export const checkin = (props) => {
  return {
    [$CARD.checkin]: {
      component: <CheckInCard {...props} />,
      css: {}
    }
  }
}
