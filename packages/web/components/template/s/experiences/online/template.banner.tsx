import space from "@styles/space.module.scss";
import font from "@styles/font.module.scss";
import { ResponsiveImage } from "@helper/img";

export const BannerTemplate = () => {
  return (
    <div style={{ position: "relative", paddingTop: "40%", width: "100%" }}>
      <div
        style={{ position: "absolute", top: 0, bottom: 0, right: 0, left: 0 }}
      >
        <div style={{ display: "flex", height: "100%" }}>
          <div
            style={{
              flex: 2,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div className={[space["m-b--16"]].join(" ")}>
              <h2 className={[font["size--50"]].join(" ")}>
                Online Experiences
              </h2>
            </div>
            <div>
              <h4 className={[font["size--18"]].join(" ")}>
                Find unique activities led by one-of-a-kind hosts—all without
                leaving home.
              </h4>
            </div>
          </div>
          <div
            style={{
              flex: 8,
            }}
          >
            <ResponsiveImage
              largeImg="https://a0.muscache.com/im/pictures/a22b70e5-31e1-4f22-bc27-52e5fc8492a4.jpg"
              mediumImg="https://a0.muscache.com/im/pictures/a22b70e5-31e1-4f22-bc27-52e5fc8492a4.jpg"
              smallImg="https://a0.muscache.com/im/pictures/a22b70e5-31e1-4f22-bc27-52e5fc8492a4.jpg"
              styling={{ objectPosition: "85% 50%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
