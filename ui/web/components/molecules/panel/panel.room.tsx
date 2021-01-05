/** styles */
import shape from "@styles/shape.module.scss";

export const RoomPanel: React.FC<{ images?: string[] }> = ({ images = [] }) => {
  return (
    <div style={{ paddingTop: "38%", position: "relative" }}>
      <div
        style={{ position: "absolute", top: 0, bottom: 0, left: 0, right: 0 }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            columnGap: 10,
            rowGap: 10,
            width: "100%",
            height: "100%",
          }}
        >
          <div>
            {images[0] ? (
              <img
                className={[
                  shape["background-cover"],
                  shape["background-repeat"],
                  shape["blr--8"],
                ].join(" ")}
                src={images[0]}
              />
            ) : (
              <div
                className={[shape["blr--16"]].join(" ")}
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundColor: "lightgray",
                }}
              />
            )}
          </div>
          <div
            style={{
              display: "grid",
              columnGap: 10,
              rowGap: 10,
              gridTemplateColumns: "repeat(2, 1fr)",
              gridTemplateRows: "repeat(2, 1fr)",
            }}
          >
            <div>
              {images[1] ? (
                <img
                  className={[
                    shape["background-cover"],
                    shape["background-repeat"],
                  ].join(" ")}
                  src={images[1]}
                />
              ) : (
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: "lightgray",
                  }}
                />
              )}
            </div>
            <div>
              {images[2] ? (
                <img
                  className={[
                    shape["btrr--16"],
                    shape["background-cover"],
                    shape["background-repeat"],
                  ].join(" ")}
                  src={images[2]}
                />
              ) : (
                <div
                  className={[shape["btrr--16"]].join(" ")}
                  style={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: "lightgray",
                  }}
                />
              )}
            </div>
            <div>
              {images[3] ? (
                <img
                  className={[
                    shape["bbrr--16"],
                    shape["background-cover"],
                    shape["background-repeat"],
                  ].join(" ")}
                  src={images[3]}
                />
              ) : (
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: "lightgray",
                  }}
                />
              )}
            </div>
            <div>
              {images[3] ? (
                <img
                  className={[
                    shape["bbrr--16"],
                    shape["background-cover"],
                    shape["background-repeat"],
                  ].join(" ")}
                  src={images[3]}
                />
              ) : (
                <div
                  className={[shape["bbrr--16"]].join(" ")}
                  style={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: "lightgray",
                  }}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
