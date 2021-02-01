/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
export const CollectionCard: React.FC<{
  label?: string;
  imgUrl?: string;
  paddingTop?: number;
}> = ({
  label = "Wellness in the New Year",
  imgUrl = "https://a0.muscache.com/im/pictures/67494b8d-129d-493b-94e7-6141b2b454e3.jpg?im_w=720",
  paddingTop,
}) => {
  return (
    <div css={{ paddingTop: `${paddingTop}%`, position: "relative" }}>
      <div
        css={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
        }}
      >
        <div css={{ height: "100%", width: "100%", position: "relative" }}>
          <div
            css={{
              backgroundImage: `url(${imgUrl})`,
              height: "100%",
              width: "100%",
              borderRadius: 10,
              zIndex: 10,
              backgroundSize: "cover",
            }}
          />
          <div
            css={{
              position: "absolute",
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
              zIndex: 30,
            }}
          >
            <div
              css={{
                position: "relative",
                height: "100%",
                width: "100%",
                padding: 20,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                <div css={{ marginBottom: 4 }}>
                  <p css={{ fontSize: 12 }} sx={{ color: "white" }}>
                    Collection
                  </p>
                </div>
                <div css={{ maxWidth: 200 }}>
                  <h3 css={{ fontSize: 20 }} sx={{ color: "white" }}>
                    {label}
                  </h3>
                </div>
              </div>
              <div>
                <button>
                  <div
                    css={{ borderRadius: 8, padding: "8px 14px" }}
                    sx={{ bg: "white" }}
                  >
                    <h3 css={{ fontSize: 14 }}>Show all</h3>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
