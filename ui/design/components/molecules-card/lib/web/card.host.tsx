/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import Router from "next/router";
import { Button, $Button } from "@nextbnb/atoms-button";

/**
 * Renders the host card component
 * @param {string} imgUrl - Image of the host
 * @param {string} host - Name of the host
 * @param {string} stayType - Type of stay
 * @param {string} location - Location of the stay
 */
export const HostCard: React.FC<{
  imgUrl?: string;
  host?: string;
  stayType?: string;
  location?: string;
}> = ({ imgUrl, host = "Host", stayType = "Type", location = "Location" }) => {
  return (
    <div>
      <div>
        {imgUrl ? (
          <img
            css={{
              borderRadius: 20,
              objectFit: "cover",
              height: 434,
              width: 350,
            }}
            src={imgUrl}
          />
        ) : (
          <div
            css={{ borderRadius: 20, height: 434, width: 350 }}
            sx={{ bg: "grey.300" }}
          />
        )}
      </div>
      <div css={{ marginTop: 6 }}>
        <h3>{host}</h3>
      </div>
      <div css={{ margin: "8px 0" }}>
        <h4
          css={{
            textTransform: "capitalize",
            letterSpacing: 0.4,
            fontSize: 15,
          }}
          sx={{ color: "grey.900" }}
        >
          Hosts a {stayType} in {location}
        </h4>
      </div>
      <div>
        <Button
          onClick={() => Router.push("/")}
          variant={$Button.UNDERLINE}
          title={`Check out some ${stayType}s`}
        />
      </div>
    </div>
  );
};
