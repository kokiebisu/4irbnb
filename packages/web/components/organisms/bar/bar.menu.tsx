import { Button } from '@button';

/**
 * Renders the menubar component
 */
export const MenuBar: React.FC<{}> = () => {
  const items = ['explore', 'saved', 'login'];
  return (
    <div className="flex justify-center items-center p-3 bg-white w-full">
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
