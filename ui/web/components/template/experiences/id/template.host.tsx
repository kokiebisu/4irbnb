import { useState } from "react";

import color from "@styles/color.module.scss";
import font from "@styles/font.module.scss";
import space from "@styles/space.module.scss";
import layout from "@styles/layout.module.scss";
import shape from "@styles/shape.module.scss";
import section from "@template/index.module.scss";

import { Button, $Button } from "@button";
import { Bullet, $Bullet } from "@bullet";

import { Shield } from "@svg/original";

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
  host = "Host Name",
  isSuperhost = false,
  description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  joined = "February 2016",
  duringStay = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  numberOfReviews = 100,
  hostImgUrl,
  responseTime = "within an hour",
  responseRate = 54,
  layoutType = "room",
  verified = false,
}) => {
  const [descriptionDisplay, setDescriptionDisplay] = useState<boolean>(false);
  const [stayDisplay, setStayDisplay] = useState<boolean>(false);
  const defaultDescription = renderContent(description);
  const defaultDuringStay = renderContent(duringStay);
  return (
    <>
      <div className={[space["p-v--20"]].join(" ")}>
        <div
          className={[
            layout["flex"],
            layout["items-center"],
            space["m-b--18"],
            layout["flex-wrap"],
          ].join(" ")}
        >
          <div className={[layout["flex"], layout["justify-center"]].join(" ")}>
            {hostImgUrl ? (
              <img
                style={{
                  objectFit: "cover",
                  width: 64,
                  height: 64,
                  borderRadius: 9999,
                }}
                className={[space["m-r--14"]].join(" ")}
                src={hostImgUrl}
              />
            ) : (
              <div
                style={{
                  width: 64,
                  height: 64,
                }}
                className={[
                  color["bg--white__2"],
                  shape["br--circle"],
                  space["m-r--14"],
                ].join(" ")}
              />
            )}
          </div>
          <div>
            <div className={[shape["h--50p"]].join(" ")}>
              <h3 className={[font["size--24"], space["m-b--6"]].join(" ")}>
                {layoutType === "room"
                  ? `Hosted By ${host}`
                  : `Meet your host, ${host}`}
              </h3>
              <p
                className={[
                  font["weight--100"],
                  color["c--gray__1"],
                  font["size--13"],
                ].join(" ")}
              >
                {layoutType === "room"
                  ? `Joined in ${joined}`
                  : `Host on Airbnb since ${joined}`}
              </p>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`${layoutType === "room" && section["w__host--left"]} ${[
              space["p-r--50"],
            ].join(" ")}`}
          >
            <div>
              <div
                className={[
                  layout["flex"],
                  layout["items-center"],
                  layout["flex-wrap"],
                ].join(" ")}
              >
                <div
                  className={[
                    space["m-r--8"],
                    space["m-b--12"],
                    space["p-r--4"],
                  ].join(" ")}
                >
                  <Bullet
                    variant={$Bullet.HOST}
                    categoryType="review"
                    total={numberOfReviews}
                  />
                </div>
                {verified && (
                  <div
                    className={[
                      space["m-r--8"],
                      space["m-b--12"],
                      space["p-r--4"],
                    ].join(" ")}
                  >
                    <Bullet variant={$Bullet.HOST} categoryType="verified" />
                  </div>
                )}
                {layoutType === "room" && isSuperhost && (
                  <div
                    className={[
                      space["m-r--8"],
                      space["m-b--12"],
                      space["p-r--4"],
                    ].join(" ")}
                  >
                    <Bullet variant={$Bullet.HOST} categoryType="superhost" />
                  </div>
                )}
              </div>
              <div className={[space["m-t--22"]].join(" ")}>
                {descriptionDisplay ? (
                  <p
                    className={[font["lh--15"], font["weight--100"]].join(" ")}
                  >
                    {description}
                  </p>
                ) : (
                  <p
                    className={[font["weight--100"], font["lh--15"]].join(" ")}
                  >
                    {`${defaultDescription.join(" ")}...`}
                    <button
                      className={[
                        space["m-l--4"],
                        color["bg--transparent"],
                        font["size--16"],
                      ].join(" ")}
                      onClick={() => setDescriptionDisplay(true)}
                    >
                      <u>read more</u>
                    </button>
                  </p>
                )}
              </div>
              {layoutType === "room" && duringStay && (
                <div className={[space["m-v--16"]].join(" ")}>
                  <h3
                    className={[
                      font["size--16"],
                      font["weight--500"],
                      space["m-b--6"],
                    ].join(" ")}
                  >
                    During your stay
                  </h3>
                  {stayDisplay ? (
                    <div className={[space["p-v--8"]].join(" ")}>
                      <p
                        className={[font["lh--15"], font["weight--100"]].join(
                          " "
                        )}
                      >
                        {duringStay}
                      </p>
                    </div>
                  ) : (
                    <p
                      className={[font["weight--100"], font["lh--15"]].join(
                        " "
                      )}
                    >
                      {`${defaultDuringStay.join(" ")}...`}
                      <button
                        className={[
                          space["m-l--4"],
                          color["bg--transparent"],
                          font["size--16"],
                        ].join(" ")}
                        onClick={() => setStayDisplay(true)}
                      >
                        <u>read more</u>
                      </button>
                    </p>
                  )}
                </div>
              )}

              {layoutType === "room" && isSuperhost && (
                <div className={[space["p-v--6"]].join(" ")}>
                  <p
                    className={[space["p-v--6"], font["weight--500"]].join(" ")}
                  >
                    {host} is a Superhost
                  </p>
                  <p
                    className={[font["weight--100"], font["lh--15"]].join(" ")}
                  >
                    Superhosts are experienced, highly rated hosts who are
                    committed to providing great stays for guests.
                  </p>
                </div>
              )}
            </div>
          </div>
          <div
            className={[section["w__host--right"], space["p-r--50"]].join(" ")}
          >
            {layoutType === "room" && (
              <div>
                <div className={[space["m-b--16"]].join(" ")}>
                  <p
                    className={[font["weight--100"], space["p-b--12"]].join(
                      " "
                    )}
                  >
                    Languages:&nbsp;
                    <span>English, Espanol</span>
                  </p>
                  <p
                    className={[font["weight--100"], space["p-b--12"]].join(
                      " "
                    )}
                  >
                    Response rate:&nbsp;
                    <span>{responseRate}%</span>
                  </p>
                  <p
                    className={[font["weight--100"], space["p-b--12"]].join(
                      " "
                    )}
                  >
                    Response time:&nbsp;
                    <span>{responseTime}</span>
                  </p>
                </div>
              </div>
            )}
            <div
              className={
                layoutType === "experience" &&
                [space["m-t--32"], layout["flex"], layout["items-center"]].join(
                  " "
                )
              }
            >
              <div
                className={
                  layoutType === "experience" && [space["m-r--16"]].join(" ")
                }
              >
                <Button
                  variant={$Button.BORDER}
                  size="md"
                  title="Contact host"
                />
              </div>
              <div
                className={`${layoutType === "room" && space["m-t--32"]} ${[
                  layout["flex"],
                  layout["items-center"],
                ].join(" ")}`}
              >
                <div>
                  <Shield width={24} />
                </div>
                <p
                  className={[
                    font["size--12"],
                    font["weight--100"],
                    space["m-l--12"],
                  ].join(" ")}
                >
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
