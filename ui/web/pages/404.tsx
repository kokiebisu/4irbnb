import React from "react";
import Link from "next/link";

/** Component */
import { Header } from "@header";

/** styles */
import layout from "@styles/layout.module.scss";
import font from "@styles/font.module.scss";
import color from "@styles/color.module.scss";
import space from "@styles/space.module.scss";
import responsive from "@styles/responsive.module.scss";

import { useTabTitle } from "@hooks/useTabTitle";

// pages/404.js
const ErrorPage = () => {
  useTabTitle("Page not found - Airbnb");
  const links = [
    { name: "Home", url: "/" },
    { name: "Hosting on Airbnb", url: "/d/onlinehost" },
  ];

  return (
    <div>
      <div>
        <Header variant="homes" />
      </div>
      <div
        style={{ height: "calc(100vh - 80px)" }}
        className={[layout["flex"], layout["items-center"]].join(" ")}
      >
        <div className={[layout["container"]].join(" ")}>
          <div className={[layout["flex"]].join(" ")}>
            <div
              className={[responsive["w50p_to_100--sm"]].join(" ")}
              style={{ width: "50%" }}
            >
              <div>
                <h1 className={[font["size--100"]].join(" ")}>Ooops!</h1>
              </div>
              <div>
                <h4 className={[font["size--30"]].join(" ")}>
                  We can't seem to find the page you're looking for.
                </h4>
              </div>
              <div className={[space["m-t--16"]].join(" ")}>
                <h3 className={[font["size--14"]].join(" ")}>
                  Error code: 404
                </h3>
              </div>
              <div className={[space["m-v--16"]].join(" ")}>
                <div>
                  <p>Here are some helpful links instead:</p>
                </div>
                <div>
                  <div>
                    {links.map(({ name, url }, index) => {
                      return (
                        <div
                          key={index}
                          className={[space["m-v--8"]].join(" ")}
                        >
                          <Link href={url}>
                            <a
                              className={[
                                font["size--14"],
                                font["weight--100"],
                                color["c--darkgreen__3"],
                              ].join(" ")}
                            >
                              {name}
                            </a>
                          </Link>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div
              className={[space["p-l--16"], responsive["n_to_b--sm"]].join(" ")}
            >
              <div style={{ width: 350 }}>
                <img src="https://a0.muscache.com/airbnb/static/error_pages/404-Airbnb_final-d652ff855b1335dd3eedc3baa8dc8b69.gif" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
