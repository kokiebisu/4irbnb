/** styles */
import section from "@template/index.module.scss";

export const ExperiencePanel: React.FC<{ images?: string[] }> = ({
  images = [],
}) => {
  return (
    <div
      style={{
        paddingTop: "38%",
        height: 0,
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
        }}
      >
        <div className={[section["grid__panel"]].join(" ")}>
          <div
            style={{
              backgroundSize: "cover",
              backgroundImage: images[0] && `url(${images[0]})`,
              backgroundColor: !images[0] && "lightgray",
            }}
          ></div>
          <div className={[section["grid__panel--middle"]].join(" ")}>
            <div
              style={{
                backgroundSize: "cover",
                backgroundImage: images[1] && `url(${images[1]})`,
                backgroundColor: !images[1] && "lightgray",
              }}
            ></div>
            <div
              style={{
                backgroundSize: "cover",
                backgroundImage: images[2] && `url(${images[2]})`,
                backgroundColor: !images[2] && "lightgray",
              }}
            ></div>
            <div
              style={{
                backgroundSize: "cover",
                backgroundImage: images[3] && `url(${images[3]})`,
                backgroundColor: !images[3] && "lightgray",
              }}
            ></div>
          </div>
          <div
            style={{
              backgroundSize: "cover",
              backgroundImage: images[3] && `url(${images[3]})`,
              backgroundColor: !images[3] && "lightgray",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};
