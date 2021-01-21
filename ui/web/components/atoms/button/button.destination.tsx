import font from "@styles/font.module.scss";
import color from "@styles/color.module.scss";
import space from "@styles/space.module.scss";

export const DestinationButton: React.FC<{
  city?: String;
  location?: String;
}> = ({ city = "City", location = "Location" }) => {
  return (
    <div className={[space["p-v--16"], space["p-r--16"]].join(" ")}>
      <div>
        <h4 className={[font["size--14"], font["text--left"]].join(" ")}>
          {city}
        </h4>
      </div>
      <div>
        <h4
          className={[
            font["size--14"],
            color["c--gray__0"],
            font["text--left"],
          ].join(" ")}
        >
          {location}
        </h4>
      </div>
    </div>
  );
};
