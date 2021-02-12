/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { Heart, Share } from "../../../../public/svg/original";
import { Panel, $Panel } from "../../../../molecules/panel/web";

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
}> = ({ images = [] }) => {
  return (
    <div>
      <div
        css={{
          position: "relative",
          zIndex: 500,
          margin: "32px 0",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div>
          <u css={{ fontSize: 14, fontWeight: 100 }}>All online experiences</u>
        </div>

        <div css={{ display: ["none", "none", "none", "inline-block"] }}>
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
                  color: "grey.700",
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
                  color: "grey.700",
                }}
              >
                Save
              </u>
            </a>
          </div>
        </div>
      </div>
      <div>
        <Panel images={images} variant={$Panel.EXPERIENCE} />
      </div>
    </div>
  );
};
