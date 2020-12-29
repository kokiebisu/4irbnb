/** styles **/
import section from "@section/section.module.scss";
import space from "@styles/space.module.scss";
import font from "@styles/font.module.scss";
import color from "@styles/color.module.scss";
import layout from "@styles/layout.module.scss";

/** Content */
import { destinationByCategories, destinations } from "@content";

/**
 * Renders the destinations section
 * @param {Object[]} categories - List of categories for the travel
 * @param {Object[]} locations - List of locations under the category
 */
export const DestinationsSection: React.FC<{
  categories?: any;
  locations?: any;
}> = ({ categories = destinationByCategories, locations = destinations }) => {
  return (
    <div>
      <div
        className={[section["destinations__categories"], space["m-t--12"]].join(
          " "
        )}
      >
        {categories.map((destinationByCategory, index) => {
          return (
            <div key={index}>
              <h5
                className={[
                  font["size--14"],
                  font["no-wrap"],
                  font["weight--500"],
                  color["c--gray__0"],
                ].join(" ")}
              >
                {destinationByCategory.name}
              </h5>
            </div>
          );
        })}
      </div>
      <div className={layout["grid-c--2"]}>
        {locations.map((destination, index) => {
          return (
            <div
              key={index}
              className={[space["p-v--15"], space["p-h--0"]].join(" ")}
            >
              <div>
                <p
                  className={[
                    font["size--14"],
                    font["weight--300"],
                    font["c--gray__4"],
                  ].join(" ")}
                >
                  {destination.city}
                </p>
              </div>
              <div>
                <p
                  className={[
                    font["size--14"],
                    font["weight--300"],
                    color["c--gray__1"],
                  ].join(" ")}
                >
                  {destination.state}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
