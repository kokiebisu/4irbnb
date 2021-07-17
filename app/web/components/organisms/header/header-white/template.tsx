import Router from "next/router";
import { Modal } from "@modal";
import { Button } from "@atoms";
import { useToggleDispatch, useToggleState } from "@context/toggle";
import { Icon } from "@atoms";
// import { Content } from '@atoms/button-transparent/content.transparent';

export type WhiteHeaderTemplateProps = {
  spread?: boolean;
  data: any;
};

/**
 * Renders the white header
 * @param {boolean} spread - Whether if the layout should be spread out or not
 */
export const WhiteHeaderTemplate = ({
  data,
}: WhiteHeaderTemplateProps): JSX.Element => {
  const toggleState = useToggleState();
  const toggleDispatch = useToggleDispatch();
  return (
    <header className="py-3 bg-white">
      <div className="md:flex relative justify-between items-center">
        <div className="hidden sm:block md:hidden">
          <Button
            fill="white"
            variant="logo"
            noName
            onClick={() => Router.push("/")}
          />
        </div>
        <div className="hidden md:block">
          <Button
            fill="white"
            variant="logo"
            onClick={() => Router.push("/")}
          />
        </div>
        <div className="flex items-center">
          <div className="mx-1">
            <Button
              variant="transparent"
              onClick={() => Router.push("/host/homes")}
            >
              <h5 className="text-white text-sm font-light ">Become a Host</h5>
            </Button>
          </div>
          <div className="mx-1">
            <Button
              variant="transparent"
              onClick={() => toggleDispatch({ type: "toggle_globe" })}
            >
              <Icon
                variant="general"
                generalType="globe"
                fill="white"
                width={16}
                height={16}
              />
            </Button>
          </div>
          <div className="ml-1">
            <Button
              variant="menu"
              inverse
              authenticated={data}
              onClick={() => toggleDispatch({ type: "toggle_menu" })}
            />
          </div>
        </div>
        <div
          style={{ width: 230 }}
          className="absolute right-0 top-1/2 bg-transparent z-70"
        >
          <div style={{ width: 200 }}>
            <Modal
              variant="menu"
              authenticated={data}
              criteria={toggleState.menu}
              dispatch="toggle_menu"
              options={{
                login: { name: "login", handleClick: () => alert("y") },
              }}
            />
          </div>
        </div>
      </div>
      <div className="md:hidden">
        <div className={`flex justify-center items-center`}>
          <div style={{ width: 30 }}>
            <Icon variant="action" actionType="left" width={12} />
          </div>
          <div className="flex-1 w-full">
            <Button
              variant="searchbar"
              onClick={() => console.log("pressed")}
            />
          </div>
          <div style={{ width: 30, visibility: "hidden" }}></div>
        </div>
      </div>
    </header>
  );
};
