import React from "react";

/** components */
import { Header } from "@header";

import { Footer } from "@footer";

/**
 * Styles
 */
import space from "@styles/space.module.scss";
import layout from "@styles/layout.module.scss";
import stays from "@styles/stays.module.scss";
import styles from "@styles/index.module.scss";
import shape from "@styles/shape.module.scss";
import font from "@styles/font.module.scss";
import color from "@styles/color.module.scss";

/**
 * Renders /stays
 */
const StaysPage: () => string | JSX.Element = () => {
  return (
    <>
      <div
        style={{ top: 0, zIndex: 10 }}
        className={[layout["sticky"]].join(" ")}
      >
        <Header variant="white" spread />
      </div>
      <div
        style={{
          zIndex: 1,
          position: "relative",
          width: "100vw",
        }}
      >
        <div className={[layout["relative"], stays["p__background"]].join(" ")}>
          <div className={[layout["all-sides"]].join(" ")}>
            <div
              style={{
                display: "inline-block",
                verticalAlign: "bottom",
                height: "100%",
                width: "100%",
                minHeight: 1,
              }}
            >
              <picture>
                <source
                  srcSet="https://a0.muscache.com/im/pictures/a4568b94-29ee-49cc-ab9c-5fcc82ca878d.jpg?im_w=720 1x, https://a0.muscache.com/im/pictures/a4568b94-29ee-49cc-ab9c-5fcc82ca878d.jpg?im_w=720 2x"
                  media="(max-width: 743px)"
                ></source>
                <source
                  srcSet="https://a0.muscache.com/im/pictures/a4568b94-29ee-49cc-ab9c-5fcc82ca878d.jpg?im_w=720 1x, https://a0.muscache.com/im/pictures/a4568b94-29ee-49cc-ab9c-5fcc82ca878d.jpg?im_w=1440 2x"
                  media="(min-width: 743.1px) and (max-width: 1127px)"
                ></source>
                <source
                  srcSet="https://a0.muscache.com/im/pictures/a4568b94-29ee-49cc-ab9c-5fcc82ca878d.jpg?im_w=1200 1x, https://a0.muscache.com/im/pictures/a4568b94-29ee-49cc-ab9c-5fcc82ca878d.jpg?im_w=1920 2x"
                  media="(min-width: 1127.1px) and (max-width: 1439px)"
                ></source>
                <source
                  srcSet="https://a0.muscache.com/im/pictures/a4568b94-29ee-49cc-ab9c-5fcc82ca878d.jpg?im_w=1680 1x, https://a0.muscache.com/im/pictures/a4568b94-29ee-49cc-ab9c-5fcc82ca878d.jpg?im_w=1920 2x"
                  media="(min-width: 1439.1px)"
                ></source>
                <img
                  alt="banner img"
                  className={[layout["absolute"]].join(" ")}
                  style={{
                    height: "100%",
                    width: "100%",
                    objectFit: "cover",
                    verticalAlign: "bottom",
                  }}
                  loading="lazy"
                  decoding="async"
                  src="https://a0.muscache.com/im/pictures/a4568b94-29ee-49cc-ab9c-5fcc82ca878d.jpg?im_w=720"
                />
              </picture>
              <div
                className={stays["support"]}
                style={{
                  backgroundImage:
                    'url("https://a0.muscache.com/im/pictures/a4568b94-29ee-49cc-ab9c-5fcc82ca878d.jpg?im_w=720")',
                  backgroundSize: "cover",
                  height: "100%",
                  width: "100%",
                  verticalAlign: "bottom",
                  backgroundPositionX: "50%",
                  backgroundPositionY: "50%",
                  backgroundOrigin: "border-box",
                }}
              />
            </div>
          </div>
          <div className={[layout["all-sides"]].join(" ")}>
            <div
              className={[
                styles["container"],
                layout["z--20"],
                shape["h--full"],
                styles["flex__explore"],
              ].join(" ")}
            >
              <div
                className={[stays["m-v__banner"], space["m-h--0"]].join(" ")}
              >
                <h1
                  className={[color["c--white"], stays["size__banner"]].join(
                    " "
                  )}
                >
                  Unique stays
                </h1>
              </div>
              <div
                className={[
                  font["c--white"],
                  stays["w__banner"],
                  stays["m__banner"],
                ].join(" ")}
              >
                <p
                  className={[
                    font["size--18"],
                    font["weight--100"],
                    font["ls--3"],
                    color["c--white"],
                  ].join(" ")}
                >
                  Tents, tree houses, and more—these spaces are more than just a
                  place to sleep.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={[space["p-v--38"]].join(" ")}>
          {/* <div className={[styles['container'], layout['relative']].join(' ')}>
            <div className={[space['m-v--16']].join(' ')}>
              <Section
                type='stay'
                carouselType='stayTypes'
                title='Explore all types of unique stays'
                items={typeStays}
              />
            </div>
            <div className={[space['m-t--8'], space['m-b--35']].join(' ')}>
              <Section
                type='stay'
                title='Nearby stays in nature'
                description='Head outdoors for less crowded spaces with more room to connect.'
                showAll={{
                  to: '/',
                  description: 'Show all nearby nature stays',
                }}
                // fetchUrl='https://34.219.3.215/stays?type=unique'
                pagination
                isDescription
                save
              />
            </div>
            <div className={[space['m-t--8'], space['m-b--35']].join(' ')}>
              <Section
                type='stay'
                title='Imaginative stays close to home'
                description='Get inspired by your surroundings in these architectural gems'
                showAll={{
                  to: '/',
                  description: 'Show all nearby imaginative stays',
                }}
                // fetchUrl='https://34.219.3.215/stays?type=tiny_house'
                pagination
                isDescription
                save
              />
            </div>
            <div className={[space['m-t--8'], space['m-b--35']].join(' ')}>
              <Section
                type='stay'
                title='Novelty stays near you'
                description='From trailers to trains, transport yourself into a one-of-a-kind getaway.'
                showAll={{
                  to: '/',
                  description: 'Show all nearby novelty stays',
                }}
                items={novelties}
                // fetchUrl='https://34.219.3.215/stays?type=camper_rv'
                pagination
                isDescription
                save
              />
            </div>
            <div className={[space['m-t--8'], space['m-b--35']].join(' ')}>
              <div>
                <Section
                  type='stay'
                  title='Unique stays around the world'
                  description='Dream about your future vacation by saving these unique homes.'
                  showAll={{
                    to: '/',
                    description: 'Show all unique stays',
                  }}
                  // fetchUrl='https://34.219.3.215/stays'
                  items={uniqueStays}
                  isDescription
                  save
                />
              </div>
            </div>
          </div> */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default StaysPage;
