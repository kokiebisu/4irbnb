/** components */
import { MenuBarLogo } from "@svg/logo";
import { Login, Saved } from "@svg/regular";

export const BarButton = ({ type = "menu" }) => {
  const types = [
    { component: <MenuBarLogo width={25} />, name: "Explore", selected: true },
    { component: <Saved width={25} />, name: "Saved", selected: false },
    { component: <Login width={25} />, name: "Log in", selected: false },
  ];
  return (
    <div
      className={
        types[type].selected
          ? [menubar["menubar__item"], menubar["selected"]].join(" ")
          : menubar["menubar__item"]
      }
    >
      <div className={menubar["menubar__item--logo"]}>
        {types[type].component}
      </div>
      <div className={menubar["menubar__item--text"]}>
        <p>{types[type].name}</p>
      </div>
    </div>
  );
};
