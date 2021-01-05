/** styles */
import layout from "@styles/layout.module.scss";
import space from "@styles/space.module.scss";
import font from "@styles/font.module.scss";

/** components */
import { Modal } from "@modal";
import { Header } from "@header";

export const BannerTemplate = () => {
  return (
    <div
      className={[space["p-b--64"]].join(" ")}
      style={{ backgroundColor: "#F2ECE2" }}
    >
      <div>
        <Header variant="homes" />
      </div>
      <div className={[layout["container--spread"], layout["flex"]].join(" ")}>
        <div
          className={[layout["flex"], layout["items-center"]].join(" ")}
          style={{ width: "50%" }}
        >
          <div>
            <div>
              <div className={[space["m-v--32"]].join(" ")}>
                <h2
                  style={{ letterSpacing: 1.2 }}
                  className={[font["size--16"]].join(" ")}
                >
                  SEE WHAT'S POSSIBLE
                </h2>
              </div>
            </div>
            <div>
              <h2 className={[font["size--40"]].join(" ")}>
                Share your passion for hospitality--become a host
              </h2>
            </div>
          </div>
        </div>
        <div
          className={[
            layout["flex"],
            layout["justify-center"],
            layout["items-center"],
          ].join(" ")}
          style={{ width: "50%" }}
        >
          <Modal variant="listing" />
        </div>
      </div>
    </div>
  );
};
