/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import Router from 'next/router';
import { footerItems } from '@nextbnb/content';
import { Globe } from '@nextbnb/design/assets/svg/original';
import { Button, $BUTTON } from '@nextbnb/atoms-button';

export interface FooterProps {
  spread?: boolean;
}

/**
 * Renders the footer
 * @param {boolean} spread - Whether if the layout should be spread out or not
 */
export const Footer: React.FC<FooterProps> = ({ spread = false }) => {
  return (
    <footer
      sx={{
        bg: 'transparent',
      }}
    >
      <div>
        <div
          sx={{
            gridTemplateColumns: [
              'auto',
              'auto',
              'auto',
              'auto',
              'repeat(4, 1fr)',
            ],
            display: ['block', 'block', 'block', 'block', 'grid'],
          }}
        >
          {footerItems.map((section, index) => {
            return (
              <div
                key={index}
                css={{
                  padding: '20px 0',
                }}
                sx={{
                  borderBottom: '1px solid',
                  borderColor: 'grey.300',
                  ':not(first-child)': {},
                }}
              >
                <div>
                  <h3 css={{ fontSize: 12, textTransform: 'uppercase' }}>
                    {section.name}
                  </h3>
                </div>
                <div
                  css={{
                    margin: '15px 0',
                  }}
                  sx={{
                    display: ['block', 'block', 'grid', 'grid', 'block'],
                    gridTemplateColumns: [
                      'auto',
                      'auto',
                      'repeat(3, 1fr)',
                      'repeat(3, 1fr)',
                      'auto',
                    ],
                  }}
                >
                  {section.items.map(({ name, url }, index) => {
                    return (
                      <div
                        sx={{
                          margin: [
                            '10px 0',
                            '10px 0',
                            '10px 0',
                            '10px 0',
                            '15px 0',
                          ],
                        }}
                        key={index}
                      >
                        <Button
                          variant={$BUTTON.link}
                          onClick={() => Router.push(url)}
                          title={name}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
        <div>
          <div
            css={{
              display: 'flex',
              alignItems: 'center',
              margin: '20px 0',
            }}
          >
            <div>
              <button
                css={{
                  display: 'flex',
                  alignItems: 'center',
                  marginRight: 10,
                  border: 'none',
                }}
                sx={{
                  bg: 'transparent',
                }}
              >
                <Globe
                  width={16}
                  css={{
                    marginRight: 5,
                  }}
                />
                <u css={{ fontSize: 14, marginRight: 7 }}>English(CA)</u>
              </button>
            </div>
            <div>
              <Button variant={$BUTTON.underline} title={`$ CAD`} bold />
            </div>
          </div>
          <div
            css={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <div>
              <h4 css={{ fontSize: 15 }}>
                &copy; 2020 Airbnb, Inc. All rights reserved
              </h4>
            </div>
            <div css={{ display: 'flex', alignItems: 'center' }}>
              <div>&nbsp;&nbsp;· &nbsp;</div>
              <div css={{ marginRight: 10 }}>
                <Button
                  variant={$BUTTON.link}
                  title="Privacy"
                  onClick={() => Router.push('/')}
                />
              </div>
              <div>&nbsp;· &nbsp;</div>
              <div css={{ marginRight: 10 }}>
                <Button
                  variant={$BUTTON.link}
                  title="Terms"
                  onClick={() => Router.push('/')}
                />
              </div>
              <div>&nbsp;· &nbsp;</div>
              <div css={{ marginRight: 10 }}>
                <Button
                  variant={$BUTTON.link}
                  title="Sitemap"
                  onClick={() => Router.push('/')}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
