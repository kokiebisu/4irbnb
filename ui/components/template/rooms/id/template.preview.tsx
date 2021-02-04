/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { Heart, Star, Share, Superhost } from "@airbnb/components/assets";
import { Panel, $Panel } from "@airbnb/components/web";

/**
 * Renders the panel section
 * @param {string} title - Title of the section
 * @param {number} ratings - Rating of the room/experience
 * @param {number} numberOfReviews - Number of reviews for the room/experience
 * @param {boolean} superhost - Whether if the host is superhost or not
 * @param {string} location - Location of the room/experience
 * @param {string} province - Province of the room/experience
 * @param {string} country - Country of the room/experience
 * @param {string} layoutType - Type of layout
 * @param {string[]} images - Images for the panel
 */
export const PreviewTemplate: React.FC<{
  title?: string;
  ratings?: number;
  numberOfReviews?: number;
  superhost?: boolean;
  location?: string;
  province?: string;
  country?: string;
  layoutType?: string;
  images?: string[];
}> = ({
  title = "Title here",
  ratings = 5.0,
  numberOfReviews = 100,
  superhost = false,
  location = "City",
  province = "Province",
  country = "Country",
}) => {
  return (
    <div>
      <div>
        <div>
          <h3
            css={{
              color: "gray__4",
              fontSize: 28,
              fontWeight: 500,
            }}
          >
            {title}
          </h3>
        </div>
        <div
          css={{
            marginTop: 16,
            marginBottom: 28,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            css={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <div>
              <Star height={14} />
            </div>
            <span
              css={{
                paddingLeft: 4,
                color: "gray__2",
                fontSize: 14,
                fontWeight: 700,
              }}
            >
              {ratings}
            </span>
            <span
              css={{
                paddingLeft: 4,
                color: "gray__1",
                fontSize: 14,
                fontWeight: 300,
              }}
            >
              ({numberOfReviews})
            </span>
            {superhost && (
              <>
                <span
                  css={{
                    color: "gray__1",
                  }}
                >
                  &nbsp;·&nbsp;
                </span>
                <div>
                  <Superhost height={14} fill="#E61E4D" />
                </div>
                <p
                  css={{
                    paddingLeft: 3,
                    color: "gray__1",
                    fontSize: 14,
                    fontWeight: 300,
                  }}
                >
                  Superhost
                </p>
              </>
            )}
            <span
              css={{
                fontWeight: 300,
                color: "gray__1",
              }}
            >
              &nbsp;·&nbsp;
            </span>
            <a
              css={{
                fontSize: 14,
                color: "gray__1",
              }}
              href=""
            >
              <u>
                {location}, {province}, {country}
              </u>
            </a>
          </div>
          <div
            css={{
              display: "flex",
            }}
            // className={[section["hidden__options"]].join(" ")}
          >
            <div
              css={{
                paddingRight: 6,
                display: "flex",
                alignItems: "center",
              }}
            >
              <a
                href="#"
                css={{
                  display: "flex",
                  paddingLeft: 6,
                  alignItems: "center",
                }}
              >
                <div>
                  <Share height={14} fill="#484848" />
                </div>
                <p
                  css={{
                    paddingLeft: 10,
                    fontSize: 14,
                    color: "gray__2",
                  }}
                >
                  <u>Share</u>
                </p>
              </a>
              <a
                css={{
                  display: "flex",
                  marginLeft: 12,
                  alignItems: "center",
                }}
              >
                <div>
                  <Heart fill="#484848" height={17} />
                </div>
                <u
                  css={{
                    paddingLeft: 10,
                    fontSize: 14,
                    color: "gray__2",
                  }}
                >
                  Save
                </u>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Panel variant={$Panel.ROOM} />
      </div>
    </div>
  );
};
