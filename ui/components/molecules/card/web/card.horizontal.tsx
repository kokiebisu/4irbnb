/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { Heart } from "../../../public/svg/original";
import { renderType } from "../logic/logic.horizontal";
/** Particles */
// import { ImageSlider } from "../../../web/components/particles/image.slider";

/**
 * Renders the horizontal card component
 * @param {Object} card - Information about the card
 * @param {boolean} superhost - Whether if host is the superhost or not
 * @param {boolean} save - Whether if the card can be saved or not
 */
export const HorizontalCard: React.FC<{
  card?: any;
  save?: boolean;
  superhost?: boolean;
}> = ({
  card = {
    images: undefined,
    type: "Type of Stay",
    ratings: 5.0,
    location: "Location",
    title: "Title should be here",
    number_of_reviews: 100,
  },
  superhost = false,
  save = false,
}) => {
  return (
    <div>
      <div css={{ position: "relative", paddingTop: "66.6%" }}>
        <div
          css={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
          }}
        >
          <div css={{ height: "100%" }}>
            <div css={{ position: "relative", height: "100%" }}>
              {card.images ? (
                <div css={{ borderRadius: 12, height: "100%" }}>
                  {/* <ImageSlider slides={card.images} /> */}
                </div>
              ) : (
                <div
                  css={{
                    width: "100%",
                    height: "100%",
                    borderRadius: 12,
                    backgroundColor: "lightgray",
                  }}
                />
              )}
              <div
                css={{
                  padding: "8px 10px",
                  position: "absolute",
                  top: 0,
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <div
                  css={{
                    zIndex: 50,
                    ...(!superhost && { visibility: "hidden" }),
                  }}
                  sx={{ ...(!superhost && { color: "white" }) }}
                >
                  <div
                    css={{
                      padding: "4px 8px",
                      boxShadow: "rgba(0, 0, 0, 0.2) 0px 4px 8px",
                      borderRadius: 3,
                    }}
                    sx={{
                      bg: "white__1",
                    }}
                  >
                    <h3
                      css={{
                        fontSize: 12,
                        textTransform: "uppercase",
                        letterSpacing: 0.3,
                      }}
                    >
                      Superhost
                    </h3>
                  </div>
                </div>
                {save && (
                  <div
                  // css={{ zIndex: 50, ...(!save && { visibility: "hidden" }) }}
                  // sx={{ ...(!save && { color: "white" }) }}
                  >
                    <Heart
                      fill="rgba(0, 0, 0, 0.5)"
                      width={24}
                      stroke="rgb(255, 255, 255)"
                      strokeWidth={2}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div css={{ display: "flex", marginTop: 6 }}>
        <div css={{ marginRight: 3 }}>
          <svg fill="#F5385D" width={14} viewBox="0 0 1000 1000">
            <path d="M972 380c9 28 2 50-20 67L725 619l87 280c11 39-18 75-54 75-12 0-23-4-33-12L499 790 273 962a58 58 0 0 1-78-12 50 50 0 0 1-8-51l86-278L46 447c-21-17-28-39-19-67 8-24 29-40 52-40h280l87-279c7-23 28-39 52-39 25 0 47 17 54 41l87 277h280c24 0 45 16 53 40z" />
          </svg>
        </div>
        <div css={{ marginRight: 3 }}>
          <p css={{ fontWeight: 100, fontSize: 13 }}>
            {card.ratings.toFixed(2)}
          </p>
        </div>
        <div>
          <p
            css={{ fontWeight: 100, fontSize: 13, color: "gray__0" }}
          >{`(${card.number_of_reviews})`}</p>
        </div>
      </div>
      <div css={{ display: "flex", alignItems: "center" }}>
        <div>
          <p
            css={{
              letterSpacing: 0.4,
              fontWeight: 100,
              fontSize: 15,
              color: "gray__4",
              textTransform: "capitalize",
            }}
          >
            {renderType(card)}
          </p>
        </div>
        <div>
          <p>&nbsp; · &nbsp; </p>
        </div>
        <div>
          <p
            css={{
              letterSpacing: 0.4,
              fontWeight: 100,
              fontSize: 15,
              color: "gray__4",
            }}
          >
            {card.location}
          </p>
        </div>
      </div>
      <div>
        <p
          css={{
            maxHeight: 250,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            letterSpacing: 0.4,
            fontWeight: 100,
            fontSize: 15,
            color: "gray__4",
          }}
        >
          {card.title}
        </p>
      </div>
    </div>
  );
};
