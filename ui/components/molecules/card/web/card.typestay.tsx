/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";

/**
 * Renders the typestay card
 * @param {Object} card - Information about the card
 */
export const TypeStayCard: React.FC<{
  card?: any;
}> = ({
  card = {
    title: "Type",
    imgUrl:
      "https://a0.muscache.com/im/pictures/175f945a-a4ac-416c-bb10-7e49a927c42f.jpg?im_w=720",
  },
}) => {
  return (
    <div
      css={{
        display: "block",
        height: "100%",
        width: "100%",
        marginRight: 8,
      }}
    >
      <div
        css={{
          borderRadius: 12,
          boxShadow: "rgba(0, 0, 0, 0.08) 0px 1px 12px",
        }}
      >
        <div css={{ position: "relative", paddingTop: "66.6667%" }}>
          <div
            css={{
              position: "absolute",
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
            }}
          >
            <picture>
              <source srcSet={card.imgUrl}></source>
              <img
                decoding="async"
                src={card.imgUrl}
                css={{
                  objectFit: "cover",
                  borderTopLeftRadius: 12,
                  borderTopRightRadius: 12,
                }}
              />
            </picture>
          </div>
        </div>
        <div
          css={{
            padding: 16,
            backgroundColor: "white",
            borderBottomLeftRadius: 12,
            borderBottomRightRadius: 12,
          }}
        >
          <p
            css={{
              fontWeight: 500,
              fontSize: 14,
            }}
            sx={{
              color: "gray__3",
            }}
          >
            {card.title}
          </p>
        </div>
      </div>
    </div>
  );
};
