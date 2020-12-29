/** styles **/
import color from "@styles/color.module.scss";
import font from "@styles/font.module.scss";
import styles from "@card/card.module.scss";

/** Renders the category card component
 * @param {string} imgUrl - Image of the card
 * @param {string} title - Title of the card
 */
export const CategoryCard: React.FC<{
  imgUrl?: string;
  title?: string;
}> = ({
  imgUrl = "https://a0.muscache.com/im/pictures/2a16f833-464c-446c-8d74-33eb8c643975.jpg?im_w=1200",
  title = "Title should be here",
}) => {
  return (
    <div className={styles["category-section__card"]}>
      <div className={styles["category-section__card--img"]}>
        <img src={imgUrl} alt="unique stays" />
      </div>
      <div>
        <h3
          className={[
            font["weight--500"],
            font["size--17"],
            color["c--gray__4"],
          ].join(" ")}
        >
          {title}
        </h3>
      </div>
    </div>
  );
};
