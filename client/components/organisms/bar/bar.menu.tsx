import Link from "next/link";

/** styles */
import menubar from "@bar/bar.module.scss";

/** vectors */
import { MenuBarLogo } from "@svg/logo";
import { Login, Saved } from "@svg/regular";

/**
 * Renders the menubar component
 */
export const MenuBar: React.FC<{}> = () => {
  const items = [
    { component: <MenuBarLogo width={25} />, name: "Explore", selected: true },
    { component: <Saved width={25} />, name: "Saved", selected: false },
    { component: <Login width={25} />, name: "Log in", selected: false },
  ];
  return (
    <div className={menubar["menubar"]}>
      {items.map((item, index) => {
        return (
          <Link key={index} href="/">
            <a>
              <div
                className={
                  item.selected
                    ? [menubar["menubar__item"], menubar["selected"]].join(" ")
                    : menubar["menubar__item"]
                }
              >
                <div className={menubar["menubar__item--logo"]}>
                  {item.component}
                </div>
                <div className={menubar["menubar__item--text"]}>
                  <p>{item.name}</p>
                </div>
              </div>
            </a>
          </Link>
        );
      })}
    </div>
  );
};
