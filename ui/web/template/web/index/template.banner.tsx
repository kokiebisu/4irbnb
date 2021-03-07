/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';
import { useState } from 'react';
import Router from 'next/router';
import { Header, $HEADER } from '@nextbnb/organisms/dist/bundle.esm';
import { Button, $BUTTON } from '@nextbnb/atoms/dist/bundle.esm';
import { useHandleScroll } from '@nextbnb/design/hooks/useHandleScroll';
import { ResponsiveImage } from '@nextbnb/design/helper/img';

/**
 * Renders the banner section
 */
export const BannerTemplate: React.FC<{ data?: any }> = ({ data }) => {
  const scrollPosition = useHandleScroll();
  const [category, setCategory] = useState('stay');
  return (
    <div
      css={{
        position: 'relative',
      }}
      sx={{
        paddingTop: ['133.3%', '133.3%', '100%', '100%', '48%'],
      }}
    >
      <div
        css={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
        }}
      >
        <div
          css={{
            height: '100%',
            width: '100%',
            backgroundSize: 'cover',
            display: 'inline-block',
          }}
        >
          <ResponsiveImage />
        </div>
      </div>
      <div
        css={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
        }}
      >
        <div
          css={{
            display: 'grid',
            gridTemplateRows: 'auto 1fr',
            height: '100%',
          }}
        >
          <div>
            <div>
              <Header
                variant={$HEADER.landing}
                category={category}
                setCategory={setCategory}
                data={data}
                extendsTo={{
                  zIndex: 80,
                  ...(scrollPosition < 56
                    ? { bg: 'transparent' }
                    : {
                        bg: 'white',
                        display: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                      }),
                }}
                criteria={scrollPosition < 56}
              />
            </div>
          </div>
          <div
            css={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <div>
              <div
                css={{
                  display: ['flex', 'flex', 'block'],
                  justifyContent: 'center',
                }}
              >
                <h3
                  css={{
                    color: 'white',
                    fontSize: 28,
                  }}
                >
                  Go Near
                </h3>
              </div>
              <div
                sx={{
                  width: ['100%', '100%', 300],
                  textAlign: ['center', 'center', 'initial'],
                }}
              >
                <p
                  css={{
                    color: 'white',
                    fontWeight: 300,
                    letterSpacing: 0.3,
                  }}
                >
                  Settle in somewhere new. Discover nearby stays to live, work,
                  or just relax.
                </p>
              </div>
              <div
                css={{
                  margin: '15px 0px 0px 0px',
                }}
                sx={{
                  display: 'flex',
                  justifyContent: ['center', 'center', 'flex-start'],
                }}
              >
                <Button
                  variant={$BUTTON.banner}
                  title="Explore nearby"
                  onClick={() => Router.push('/')}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
