/** vectors */
import { MagnifyGlass } from "@svg/original";

/** styles */
import color from "@styles/color.module.scss";
import layout from "@styles/layout.module.scss";
import font from "@styles/font.module.scss";
import space from "@styles/space.module.scss";

export const SearchButton: React.FC<{ expand?: boolean }> = ({
  expand = false,
}) => {
  return (
    <div
      className={[
        layout["flex"],
        layout["items-center"],
        color["bg--primary"],
      ].join(" ")}
      style={{
        transitionDelay: expand ? "0s" : "0.25s",
        transition: "0.25s all ease",
        width: expand ? 95 : 40,
        height: 40,
        borderRadius: 50,
      }}
    >
      <div
        className={`${[space["p-l--14"]].join(" ")} ${[space["m-r--4"]].join(
          " "
        )}`}
      >
        <MagnifyGlass width={13} height={13} stroke="white" strokeWidth={4} />
      </div>
      <div
        style={{
          transition: "0.25s all ease",
          transitionDelay: expand ? "0.25s" : "0s",
          opacity: expand ? 1 : 0,
          visibility: expand ? "visible" : "hidden",
        }}
      >
        <p className={[font["size--15"], color["c--white"]].join(" ")}>
          Search
        </p>
      </div>
    </div>
  );
};
