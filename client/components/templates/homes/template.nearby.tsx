/** styles **/
import layout from "@styles/layout.module.scss";
import homes from "@styles/homes.module.scss";
import space from "@styles/space.module.scss";
import color from "@styles/color.module.scss";
import responsive from "@styles/responsive.module.scss";
import font from "@styles/font.module.scss";
import shape from "@styles/shape.module.scss";

/** components */
import { Header } from "@header/header.component";
import { Section } from "@section/section.component";
import { Bar } from "@bar/bar.component";
import { Footer } from "@footer/footer.component";
import { Button } from "@button/button.component";

/** stories */
import { filter } from "@button/button.stories";

/**
 * Renders the nearby template component
 * @param param0 Prop
 */
export const NearbyTemplate: React.FC<{
  city?: string;
  filterCount?: number;
  guests?: number;
  average?: number;
  filters?: any;
}> = ({
  city = "location",
  filterCount = 1,
  guests = 8000,
  average = 4.9,
  filters = [
    { name: "Cancellation flexibility" },
    { name: "Type of place" },
    { name: "Price" },
    { name: "Instant Book" },
    { name: "More filters" },
  ],
}) => {
  const displayPlace = city.match(/_/g) ? city.split("_").join(" ") : city;

  return (
    <div>
      <div style={{ zIndex: 60, position: "sticky", top: 0 }}>
        <Header variant="white" spread />
      </div>
      <div
        className={[layout["relative"], homes["display__content"]].join(" ")}
      >
        <div className={[homes["w__section"]].join(" ")}>
          <div className={[space["p--24"]].join(" ")}>
            <div>
              <p className={[font["size--14"]].join(" ")}>300+ stays</p>
            </div>
            <div>
              <h3 className={[font["size--32"]].join(" ")}>
                Stays in{" "}
                <span
                  className={[font["weight--500"]].join(" ")}
                  style={{ textTransform: "capitalize" }}
                >
                  {displayPlace}
                </span>
              </h3>
            </div>
            <div className={[space["m-v--22"]].join(" ")}>
              <div className={[shape["from__md--flex"]].join(" ")}>
                {filters.map((filter, index) => {
                  return (
                    <div key={index} className={[space["m-r--8"]].join(" ")}>
                      <Button {...filter.args} name={filter.name} />
                    </div>
                  );
                })}
              </div>
              <div className={[shape["only__sm"]].join(" ")}>
                <Button {...filter.args} name={`filters ${filterCount}`} />
              </div>
            </div>
            {city && (
              <div>
                <div className={[space["m-b--16"]].join(" ")}>
                  <p
                    className={[color["c--gray__1"], font["size--14"]].join(
                      " "
                    )}
                  >
                    Enter dates and number of guests to see the total price per
                    night.
                  </p>
                </div>
                <div
                  style={{
                    backgroundColor: "lightgray",
                    height: 1,
                    width: "100%",
                  }}
                />
                <div
                  className={[layout["flex"], layout["items-center"]].join(" ")}
                >
                  <div
                    className={[
                      space["m-r--12"],
                      space["p-v--8"],
                      space["m-v--8"],
                    ].join(" ")}
                  >
                    <img
                      src="https://a0.muscache.com/airbnb/static/packages/icon-uc-trophy.9ee78aa1.gif"
                      style={{ width: 40 }}
                    />
                  </div>
                  <div>
                    <h3 className={[font["size--14"]].join(" ")}>
                      More than {guests} guests have stayed in{" "}
                      <span
                        className={[font["weight--500"]].join(" ")}
                        style={{ textTransform: "capitalize" }}
                      >
                        {displayPlace}
                      </span>
                      . On average they rated their stays {average} out of 5
                      stars.
                    </h3>
                  </div>
                </div>
              </div>
            )}
            <div>
              <Section variant="homes" />
            </div>
            <div
              className={[
                space["m-t--16"],
                layout["flex"],
                layout["justify-center"],
              ].join(" ")}
            >
              <Bar variant="paginate" animate />
            </div>
          </div>
          <div className={[space["p--24"], color["bg--white__1"]].join(" ")}>
            <Section variant="also" />
          </div>
        </div>
        <div
          className={[responsive["n_to_b--md"]].join(" ")}
          style={{
            position: "absolute",
            backgroundColor: "gray",
            overflow: "hidden",
            width: "calc(100% - 840px)",
            height: "100%",
            top: 0,
            bottom: 0,
            right: 0,
            left: "auto",
          }}
        >
          map
        </div>
      </div>
      <Footer />
    </div>
  );
};
