import font from "@styles/font.module.scss";
import color from "@styles/color.module.scss";

export const DestinationButton: React.FC<{
  city?: String;
  location?: String;
}> = ({ city = "City", location = "Location" }) => {
  return (
    <div>
      <div>
        <h4 className={[font["size--14"], font["text--left"]].join(" ")}>
          {city}
        </h4>
      </div>
      <div>
        <h4 className={[font["size--14"], color["c--gray__0"]].join(" ")}>
          {location}
        </h4>
      </div>
    </div>
  );
};
