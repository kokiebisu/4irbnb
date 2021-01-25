import layout from "@styles/layout.module.scss";
import space from "@styles/space.module.scss";
import font from "@styles/font.module.scss";

import { Modal } from "@modal";
import { Header } from "@header";

import * as $header from "@header/variants";
import * as $modal from "@modal/variants";

export const BannerTemplate: React.FC<{}> = () => {
  return (
    <div
      className={[space["p-b--64"]].join(" ")}
      style={{ backgroundColor: "#F2ECE2" }}
    >
      <div>
        <Header variant={$header.HOMES} />
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
          <Modal variant={$modal.LISTING} />
        </div>
      </div>
    </div>
  );
};
