/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { Heart } from "../../../public/svg/original";
import { Bullet, $Bullet } from "../../../atoms/bullet/web";

import { Card, $Card } from ".";
import { $Particle, Particle } from "../../../particles/web";

/**
 * Renders the stay card component
 * @param {string[]} images - List of images to be displayed
 * @param {string} typeStay - Type of stay
 * @param {string} location - Location of the stay
 * @param {string} title - Title of the stay
 * @param {Object} accomodations - Information about the accomodations of the stay
 * @param {string[]} characteristics - List of characteristics
 */
export const StayCard: React.FC<{
  images?: string[];
  typeStay?: string;
  location?: string;
  title?: string;
  accomodations?: {
    guests: number;
    bedroom: number;
    beds: number;
    bath: number;
  };
  characteristics?: string[];
  ratings?: number;
  reviews?: number;
}> = ({
  images,
  typeStay = "Type of stay",
  location = "Location",
  title = "Title of stay",
  accomodations = {
    guests: 1,
    bedroom: 1,
    beds: 1,
    bath: 1,
  },
  characteristics = ["characteristic"],
}) => {
  return (
    <div>
      <div
        sx={{
          display: ["block", "none"],
          marginBottom: ["32px", "0"],
        }}
      >
        <Card variant={$Card.HORIZONTAL} />
      </div>
      <div
        sx={{
          display: ["none", "block"],
        }}
      >
        <div css={{ padding: "22px 0" }}>
          <div css={{ display: "flex", justifyContent: "space-between" }}>
            <div css={{ display: "flex" }}>
              <div css={{ width: 300, minHeight: 200, marginRight: 15 }}>
                <div css={{ borderRadius: 12, height: "100%" }}>
                  <Particle variant={$Particle.SLIDER} slides={images} />
                </div>
              </div>
              <div
                css={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <p css={{ fontSize: 14 }} sx={{ color: "gray__1" }}>
                    {typeStay} in {location}
                  </p>
                  <h4 css={{ fontWeight: 300, margin: "4px 0", fontSize: 17 }}>
                    {title}
                  </h4>
                  <div
                    css={{
                      margin: "8px 0",
                      height: 1,
                      width: 45,
                    }}
                    sx={{
                      bg: "white__2",
                    }}
                  ></div>
                  <div>
                    <span
                      css={{
                        fontSize: 14,
                      }}
                      sx={{
                        color: "gray__1",
                      }}
                    >
                      {accomodations.guests} guests
                    </span>
                    <span
                      css={{
                        fontSize: 14,
                      }}
                      sx={{ color: "gray__1" }}
                    >
                      {" "}
                      ·{" "}
                    </span>
                    <span
                      css={{
                        fontSize: 14,
                      }}
                      sx={{ color: "gray__1" }}
                    >
                      {accomodations.bedroom} bedroom
                    </span>
                    <span css={{ fontSize: 14 }} sx={{ color: "gray__1" }}>
                      {" "}
                      ·{" "}
                    </span>
                    <span css={{ fontSize: 14 }} sx={{ color: "gray__1" }}>
                      {accomodations.beds} beds
                    </span>
                    <span css={{ fontSize: 14 }} sx={{ color: "gray__1" }}>
                      {" "}
                      ·{" "}
                    </span>
                    <span css={{ fontSize: 14 }} sx={{ color: "gray__1" }}>
                      {accomodations.bath} bath
                    </span>
                  </div>
                  <div>
                    {characteristics.map((characteristic, index) => {
                      return (
                        <span
                          key={index}
                          css={{ fontSize: 14 }}
                          sx={{ color: "gray__1" }}
                        >
                          {characteristic}
                        </span>
                      );
                    })}
                  </div>
                </div>
                <div>
                  <Bullet variant={$Bullet.RATING} />
                </div>
              </div>
            </div>
            <div>
              <Heart fill="white" width={24} stroke="black" strokeWidth={2} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
