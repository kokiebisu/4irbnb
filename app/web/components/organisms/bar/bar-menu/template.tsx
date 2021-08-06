import { Button } from "@atoms";

export interface MenuBarTemplateProps {
  items: ("menu" | "saved" | "login")[];
}

/**
 * Renders the menubar component
 */
export const MenuBarTemplate = ({
  items,
}: MenuBarTemplateProps): JSX.Element => {
  return (
    <div className="flex justify-center items-center p-3 bg-white w-full">
      {items.map((_, index) => {
        return (
          <div key={index}>
            <Button
              variant="bar"
              name="name"
              icon={<div></div>}
              onClick={() => alert("clicked")}
            />
          </div>
        );
      })}
    </div>
  );
};
