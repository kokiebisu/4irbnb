/** styles */
import menubar from "@bar/bar.module.scss";

/** components */
import { Button } from "@button/button.component";

/**
 * Renders the menubar component
 */
export const MenuBar: React.FC<{}> = () => {
  const items = ["explore", "saved", "login"];
  return (
    <div className={menubar["menubar"]}>
      {items.map((item, index) => {
        return (
          <div key={index}>
            <Button variant="bar" type={item} />
          </div>
        );
      })}
    </div>
  );
};
