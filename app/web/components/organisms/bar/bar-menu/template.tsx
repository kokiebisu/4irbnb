import { Button } from '@atoms';

export interface MenuBarTemplateProps {
  items?: ('menu' | 'saved' | 'login')[];
}

/**
 * Renders the menubar component
 */
export const MenuBarTemplate: React.FC<MenuBarTemplateProps> = ({ items }) => {
  return (
    <div className="flex justify-center items-center p-3 bg-white w-full">
      {items.map((item, index) => {
        return (
          <div key={index}>
            <Button variant="bar" barType={item} />
          </div>
        );
      })}
    </div>
  );
};
