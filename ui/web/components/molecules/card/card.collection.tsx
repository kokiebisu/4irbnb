import color from "@styles/color.module.scss";
import font from "@styles/font.module.scss";
import shape from "@styles/shape.module.scss";
import space from "@styles/space.module.scss";

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
    <div style={{ paddingTop: `${paddingTop}%`, position: "relative" }}>
      <div
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
        }}
      >
        <div style={{ height: "100%", width: "100%", position: "relative" }}>
          <div
            style={{
              backgroundImage: `url(${imgUrl})`,
              height: "100%",
              width: "100%",
              borderRadius: 10,
              zIndex: 10,
              backgroundSize: "cover",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
              zIndex: 30,
            }}
          >
            <div
              style={{
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
                <div className={[space["m-b--4"]].join(" ")}>
                  <p
                    className={[color["c--white"], font["size--12"]].join(" ")}
                  >
                    Collection
                  </p>
                </div>
                <div style={{ maxWidth: 200 }}>
                  <h3
                    className={[color["c--white"], font["size--20"]].join(" ")}
                  >
                    {label}
                  </h3>
                </div>
              </div>
              <div>
                <button>
                  <div
                    className={[
                      shape["br--8"],
                      space["p-h--14"],
                      space["p-v--8"],
                      color["bg--white"],
                    ].join(" ")}
                  >
                    <h3 className={[font["size--14"]].join(" ")}>Show all</h3>
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
