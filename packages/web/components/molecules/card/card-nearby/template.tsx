import { renderSize } from "./util";

export type NearbyCardTemplateProps = {
  imgUrl: string;
  city: string;
  hours: number;
  size: "sm" | "lg";
};

/**
 * Renders the nearby card component
 * @param {string} imgUrl - Image of the card
 * @param {string} city - Name of the city
 * @param {number} hours - Time it takes to reach the destination
 * @param {string} size - Size of the component
 */
export const NearbyCardTemplate = ({
  imgUrl,
  city,
  hours,
  size,
}: NearbyCardTemplateProps): JSX.Element => {
  return (
    <div className="flex items-center">
      <div className={`${renderSize(size)} mr-3`}>
        {imgUrl ? (
          <img src={imgUrl} className="rounded-md" />
        ) : (
          <div className="w-full h-full rounded-md bg-gray-400" />
        )}
      </div>
      <div>
        <h3 className="text-md font-medium">{city}</h3>
        <p className="text-md font-light">{hours} hour drive</p>
      </div>
    </div>
  );
};
