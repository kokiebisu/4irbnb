import { useState } from "react";

import { Button } from "@atoms";
import { Bullet } from "@atoms";

import { Icon } from "@atoms";

/**
 * Modifies the content which should be displayed initially
 * @param {string} content - The content which must be hidden
 */
const renderContent = (content: string) => {
  const wordArray = content.split(" ");
  const newArray = [];
  for (let i = 0; i < 20; i++) {
    newArray.push(wordArray[i]);
  }
  return newArray;
};

export interface HostSegmentTemplateProps {
  host?: string;
  isSuperhost?: boolean;
  description?: string;
  joined?: string;
  duringStay?: string;
  numberOfReviews?: number;
  hostImgUrl?: string;
  responseTime?: string;
  responseRate?: number;
  layoutType?: string;
  verified?: boolean;
}

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
export const HostSegmentTemplate: React.FC<HostSegmentTemplateProps> = ({
  host,
  isSuperhost,
  description,
  joined,
  duringStay,
  numberOfReviews,
  hostImgUrl,
  responseTime,
  responseRate,
  layoutType,
  verified,
}) => {
  const [descriptionDisplay, setDescriptionDisplay] = useState<boolean>(false);
  const [stayDisplay, setStayDisplay] = useState<boolean>(false);
  const defaultDescription = renderContent(description);
  const defaultDuringStay = renderContent(duringStay);
  return (
    <>
      <div className="py-4">
        <div className="flex items-center mb-4 flex-wrap">
          <div className="flex justify-center">
            {hostImgUrl ? (
              <img
                className="mr-3 object-cover w-32 h-32 rounded-full"
                src={hostImgUrl}
              />
            ) : (
              <div className="bg-gray-700 rounded-full mr-3 w-32 h-32" />
            )}
          </div>
          <div>
            <div className="h-1/2">
              <h3 className="text-lg mb-2">
                {layoutType === "room"
                  ? `Hosted By ${host}`
                  : `Meet your host, ${host}`}
              </h3>
              <p className="font-thin text-gray-600 text-sm">
                {layoutType === "room"
                  ? `Joined in ${joined}`
                  : `Host on Airbnb since ${joined}`}
              </p>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`${
              layoutType === "room" && section["w__host--left"]
            } pr-8`}
          >
            <div>
              <div className="flex items-center flex-wrap">
                <div className="mr-2 mb-3 pr-1">
                  <Bullet
                    variant="primary"
                    icon={
                      <Icon
                        variant="fill"
                        fillType="star"
                        width={16}
                        height={16}
                        fill="black"
                      />
                    }
                    title={`15 Reviews`}
                  />
                </div>
                {verified && (
                  <div className="mr-2 mb-3 pr-1">
                    <Bullet
                      variant="primary"
                      icon={
                        <Icon
                          variant="fill"
                          fillType="verified"
                          width={16}
                          height={16}
                          fill="black"
                        />
                      }
                      title="Identity Verified"
                    />
                  </div>
                )}
                {layoutType === "room" && isSuperhost && (
                  <div className="mr-2 mb-3 pr-1">
                    <Bullet
                      variant="primary"
                      icon={
                        <Icon
                          variant="fill"
                          fillType="superhost"
                          width={16}
                          height={16}
                          fill="black"
                        />
                      }
                      title="Superhost"
                    />
                  </div>
                )}
              </div>
              <div className="mt-4">
                {descriptionDisplay ? (
                  <p className="leading-6 font-thin">{description}</p>
                ) : (
                  <p className="font-thin leading-6">
                    {`${defaultDescription.join(" ")}...`}
                    <button
                      className="ml-1 bg-transparent font-lg"
                      onClick={() => setDescriptionDisplay(true)}
                    >
                      <u>read more</u>
                    </button>
                  </p>
                )}
              </div>
              {layoutType === "room" && duringStay && (
                <div className="my-3">
                  <h3 className="text-md font-base mb-2">During your stay</h3>
                  {stayDisplay ? (
                    <div className="py-2">
                      <p className="leading-6 font-thin">{duringStay}</p>
                    </div>
                  ) : (
                    <p className="font-thin leading-6">
                      {`${defaultDuringStay.join(" ")}...`}
                      <button
                        className="ml-1 bg-transparent text-md"
                        onClick={() => setStayDisplay(true)}
                      >
                        <u>read more</u>
                      </button>
                    </p>
                  )}
                </div>
              )}

              {layoutType === "room" && isSuperhost && (
                <div className="py-2">
                  <p className="py-2 font-base">{host} is a Superhost</p>
                  <p className="font-thin leading-6">
                    Superhosts are experienced, highly rated hosts who are
                    committed to providing great stays for guests.
                  </p>
                </div>
              )}
            </div>
          </div>
          <div className={`pr-5 ${[section["w__host--right"]].join(" ")}`}>
            {layoutType === "room" && (
              <div>
                <div className="mb-4">
                  <p className="pb-4 font-thin">
                    Languages:&nbsp;
                    <span>English, Espanol</span>
                  </p>
                  <p className="font-thin pb-3">
                    Response rate:&nbsp;
                    <span>{responseRate}%</span>
                  </p>
                  <p className="font-thin pb-3">
                    Response time:&nbsp;
                    <span>{responseTime}</span>
                  </p>
                </div>
              </div>
            )}
            <div
              className={
                layoutType === "experience" && "mt-6 flex items-center"
              }
            >
              <div className={layoutType === "experience" && "mr-4"}>
                <Button variant="border" size="md" title="Contact host" />
              </div>
              <div
                className={`${
                  layoutType === "room" && "mt-5"
                } flex items-center`}
              >
                <div>
                  <Icon
                    variant="fill"
                    fillType="shield"
                    fill="black"
                    width={24}
                    height={24}
                  />
                </div>
                <p className="text-xs font-thin ml-3">
                  To protect your payment, never transfer money or communicate
                  outside of the Airbnb website or app.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
