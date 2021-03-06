/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';
import { useState } from 'react';
import { Button, $BUTTON, Bullet, $BULLET } from '@nextbnb/atoms';
import { Shield } from '@nextbnb/design/assets/svg/original';
import { $Layout } from '@nextbnb/layout';

/**
 * Modifies the content which should be displayed initially
 * @param {string} content - The content which must be hidden
 */
const renderContent = (content: string) => {
  const wordArray = content.split(' ');
  const newArray = [];
  for (let i = 0; i < 20; i++) {
    newArray.push(wordArray[i]);
  }
  return newArray;
};

/**
 * Renders the host section
 * @param {string} host - Name of host
 * @param {boolean} isSuperhost - Whether is the host is a superhost or not
 * @param {string} description - Description of the host
 * @param {string} joined - Date which the host joined
 * @param {string} duringStay - Description about during the stay
 * @param {number} numberOfReviews - Number of reviews by the users
 * @param {string} hostImgUrl - Image of the host
 * @param {string} responseTime - How soon the host responds
 * @param {string} responseRate - The percentage in which the host responds
 * @param {string} layoutType - Type of either room or experience
 * @param {boolean} verified - Whether is the user if verified or not
 */
export const HostTemplate: React.FC<{
  host?: string;
  isSuperhost?: boolean;
  description?: string;
  joined?: string;
  duringStay?: string;
  numberOfReviews?: number;
  hostImgUrl?: string;
  responseTime?: number;
  responseRate?: number;
  layoutType?: string;
  verified?: boolean;
}> = ({
  host = 'Host Name',
  isSuperhost = false,
  description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  joined = 'February 2016',
  duringStay = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  numberOfReviews = 100,
  hostImgUrl,
  responseTime = 'within an hour',
  responseRate = 54,
  layoutType = 'room',
  verified = false,
}) => {
  const [descriptionDisplay, setDescriptionDisplay] = useState<boolean>(false);
  const [stayDisplay, setStayDisplay] = useState<boolean>(false);
  const defaultDescription = renderContent(description);
  const defaultDuringStay = renderContent(duringStay);
  return (
    <div>
      <div
        css={{
          padding: '20px 0',
        }}
      >
        <div
          css={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: 18,
            flexWrap: 'wrap',
          }}
        >
          <div
            css={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            {hostImgUrl ? (
              <img
                css={{
                  objectFit: 'cover',
                  width: 64,
                  height: 64,
                  borderRadius: 9999,
                  marginRight: 14,
                }}
                src={hostImgUrl}
              />
            ) : (
              <div
                css={{
                  width: 64,
                  height: 64,
                  bg: 'grey.300',
                  borderRadius: 9999,
                  marginRight: 14,
                }}
              />
            )}
          </div>
          <div>
            <div
              css={{
                height: '50%',
              }}
            >
              <h3
                css={{
                  fontSize: 24,
                  marginBottom: 6,
                }}
              >
                {layoutType === 'room'
                  ? `Hosted By ${host}`
                  : `Meet your host, ${host}`}
              </h3>
              <p
                css={{
                  fontWeight: 100,
                  color: 'grey.600',
                  fontSize: 13,
                }}
              >
                {layoutType === 'room'
                  ? `Joined in ${joined}`
                  : `Host on Airbnb since ${joined}`}
              </p>
            </div>
          </div>
        </div>
        <div>
          <div
            css={{
              paddingRight: 50,
              ...(layoutType === 'room' && {}),
            }}
          >
            <div>
              <div
                css={{
                  display: 'flex',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                }}
              >
                <div
                  css={{
                    marginRight: 8,
                    marginBottom: 12,
                    paddingRight: 4,
                  }}
                >
                  <Bullet
                    variant={$BULLET.host}
                    categoryType="review"
                    total={numberOfReviews}
                  />
                </div>
                {verified && (
                  <div
                    css={{
                      marginRight: 8,
                      marginBottom: 12,
                      paddingRight: 4,
                    }}
                  >
                    <Bullet variant={$BULLET.host} categoryType="verified" />
                  </div>
                )}
                {layoutType === 'room' && isSuperhost && (
                  <div
                    css={{
                      marginRight: 8,
                      marginBottom: 12,
                      paddingRight: 4,
                    }}
                  >
                    <Bullet variant={$BULLET.host} categoryType="superhost" />
                  </div>
                )}
              </div>
              <div
                css={{
                  marginTop: 22,
                }}
              >
                {descriptionDisplay ? (
                  <p
                    css={{
                      lineHeight: 1.5,
                      fontWeight: 100,
                    }}
                  >
                    {description}
                  </p>
                ) : (
                  <p
                    css={{
                      fontWeight: 100,
                      lineHeight: 1.5,
                    }}
                  >
                    {`${defaultDescription.join(' ')}...`}
                    <button
                      css={{
                        marginLeft: 4,
                        fontSize: 16,
                      }}
                      sx={{
                        bg: 'transparent',
                      }}
                      onClick={() => setDescriptionDisplay(true)}
                    >
                      <u>read more</u>
                    </button>
                  </p>
                )}
              </div>
              {layoutType === 'room' && duringStay && (
                <div
                  css={{
                    margin: '16px 0',
                  }}
                >
                  <h3
                    css={{
                      fontSize: 16,
                      fontWeight: 500,
                      marginBottom: 6,
                    }}
                  >
                    During your stay
                  </h3>
                  {stayDisplay ? (
                    <div
                      css={{
                        padding: '8px 0',
                      }}
                    >
                      <p
                        css={{
                          lineHeight: 1.5,
                          fontWeight: 100,
                        }}
                      >
                        {duringStay}
                      </p>
                    </div>
                  ) : (
                    <p
                      css={{
                        fontWeight: 100,
                        lineHeight: 1.5,
                      }}
                    >
                      {`${defaultDuringStay.join(' ')}...`}
                      <button
                        css={{
                          marginLeft: 4,
                          fontSize: 16,
                        }}
                        sx={{
                          bg: 'transparent',
                        }}
                        onClick={() => setStayDisplay(true)}
                      >
                        <u>read more</u>
                      </button>
                    </p>
                  )}
                </div>
              )}

              {layoutType === 'room' && isSuperhost && (
                <div
                  css={{
                    padding: '6px 0',
                  }}
                >
                  <p
                    css={{
                      padding: '6px 0',
                      fontWeight: 500,
                    }}
                  >
                    {host} is a Superhost
                  </p>
                  <p
                    css={{
                      fontWeight: 100,
                      lineHeight: 1.5,
                    }}
                  >
                    Superhosts are experienced, highly rated hosts who are
                    committed to providing great stays for guests.
                  </p>
                </div>
              )}
            </div>
          </div>
          <div
            css={{
              paddingRight: 50,
            }}
            // className={[section["w__host--right"],}
          >
            {layoutType === 'room' && (
              <div>
                <div
                  css={{
                    marginBottom: 16,
                  }}
                >
                  <p
                    css={{
                      fontWeight: 100,
                      paddingBottom: 12,
                    }}
                  >
                    Languages:&nbsp;
                    <span>English, Espanol</span>
                  </p>
                  <p
                    css={{
                      fontWeight: 100,
                      paddingBottom: 12,
                    }}
                  >
                    Response rate:&nbsp;
                    <span>{responseRate}%</span>
                  </p>
                  <p
                    css={{
                      fontWeight: 100,
                      paddingBottom: 12,
                    }}
                  >
                    Response time:&nbsp;
                    <span>{responseTime}</span>
                  </p>
                </div>
              </div>
            )}
            <div
              css={{
                ...(layoutType === 'experience' && {
                  marginTop: 32,
                  display: 'flex',
                  alignItems: 'center',
                }),
              }}
            >
              <div
                css={{
                  ...(layoutType === 'experience' && { marginRight: 16 }),
                }}
              >
                <Button
                  variant={$BUTTON.border}
                  size="md"
                  title="Contact host"
                />
              </div>
              <div
                css={{
                  display: 'flex',
                  alignItems: 'center',
                  ...(layoutType === 'room' && { marginTop: 32 }),
                }}
              >
                <div>
                  <Shield width={24} />
                </div>
                <p
                  css={{
                    fontSize: 12,
                    fontWeight: 100,
                    marginLeft: 12,
                  }}
                >
                  To protect your payment, never transfer money or communicate
                  outside of the Airbnb website or app.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
