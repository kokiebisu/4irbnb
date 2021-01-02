/** styles **/
import color from "@styles/color.module.scss";
import font from "@styles/font.module.scss";
import space from "@styles/space.module.scss";
// import styles from "@card/card.module.scss";
import layout from "@styles/layout.module.scss";
import shape from "@styles/shape.module.scss";

/** Renders the category card component
 * @param {string} imgUrl - Image of the card
 * @param {string} title - Title of the card
 */
export const AnywhereCard: React.FC<{
  imgUrl?: string;
  title?: string;
}> = ({ imgUrl, title = "Title" }) => {
  return (
    <div>
      <div
        className={[layout["relative"]].join(" ")}
        style={{ paddingTop: "100%" }}
      >
        <div
          className={[
            layout["absolute"],
            layout["t--0"],
            layout["b--0"],
            layout["r--0"],
            layout["l--0"],
          ].join(" ")}
        >
          <div className={[shape["w--full"], shape["h--full"]].join(" ")}>
            {imgUrl ? (
              <img
                src={imgUrl}
                alt="unique stays"
                className={[shape["br--8"]].join(" ")}
              />
            ) : (
              <div
                className={[
                  shape["w--full"],
                  shape["h--full"],
                  shape["br--8"],
                  color["bg--white__2"],
                ].join(" ")}
              />
            )}
          </div>
        </div>
      </div>
      <div className={[space["m-t--6"]].join(" ")}>
        <h3 className={[font["size--16"], color["c--gray__4"]].join(" ")}>
          {title}
        </h3>
      </div>
    </div>
  );
};
