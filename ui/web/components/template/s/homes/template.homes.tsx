/** styles */
import font from "@styles/font.module.scss";
import space from "@styles/space.module.scss";
import color from "@styles/color.module.scss";

/** components */
import { Card } from "@card";

/**
 * Renders the homes section
 * @param {string} layout - Layout of how to list the items
 * @param {string} title - Title of the section
 * @param {Object[]} stays - List of objects containing the stays
 */
export const HomesTemplate: React.FC<{
  filterCount?: number;
  place?: string;
  guests?: number;
  average?: number;
  stays?: any;
  title?: string;
  layout?: "vertical" | "horizontal";
}> = ({
  layout = "vertical",
  title = "Section Title",
  stays = [undefined, undefined, undefined],
}) => {
  const layouts = {
    vertical: (
      <div
        className={
          title ? [space["m-t--45"]].join(" ") : [space["m-t--24"]].join(" ")
        }
      >
        {title && (
          <div>
            <h3 className={[font["size--22"]].join(" ")}>{title}</h3>
          </div>
        )}
        <div>
          {stays.map((stay, index) => {
            return (
              <div key={index}>
                <Card
                  extendsTo={!title && [color["b-t--white__2"]].join(" ")}
                  variant="stay"
                  {...stay}
                />
              </div>
            );
          })}
        </div>
      </div>
    ),
  };

  return layouts[layout];
};
