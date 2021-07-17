import { Icon } from "@atoms";
import { ImageSlider } from "../../../particles/particle-slider/template";

export type HorizontalCardTemplateProps = {
  images?: string[];
  type: string;
  ratings: number;
  location: string;
  title: string;
  numberOfReviews: number;
  save?: boolean;
  superhost?: boolean;
};

/**
 * Renders the horizontal card component
 * @param {string[]} images
 * @param {string} type
 * @param {number} ratings
 * @param {string} location
 * @param {string} title
 * @param {number} numberOfReviews
 * @param {boolean} superhost - Whether if host is the superhost or not
 * @param {boolean} save - Whether if the card can be saved or not
 */
export const HorizontalCardTemplate = ({
  images,
  type,
  ratings,
  location,
  title,
  numberOfReviews,
  superhost,
  save,
}: HorizontalCardTemplateProps): JSX.Element => {
  return (
    <div>
      <div className="relative" style={{ paddingTop: "66.6%" }}>
        <div className="absolute top-0 bottom-0 right-0 left-0">
          <div className="h-full">
            <div className=" relative h-full">
              {images ? (
                <div className="rounded-md h-full">
                  <ImageSlider slides={images} />
                </div>
              ) : (
                <div className="animate-pulse w-full h-full rounded-md bg-gray-500" />
              )}
              <div className="py-2 px-3 absolute top-0 flex justify-between w-full">
                <div className={`z-50 ${superhost ? "" : "text-white hidden"}`}>
                  <div className="px-3 py-1 bg-gray-100 shadow-lg rounded">
                    <h3 className="text-xs uppercase tracking-wide">
                      Superhost
                    </h3>
                  </div>
                </div>
                {save && (
                  <div className={`z-50 ${save ? "" : "text-white hidden"}`}>
                    <Icon
                      variant="action"
                      actionType="heart"
                      fill="rgba(0, 0, 0, 0.5)"
                      width={24}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center mt-2">
        <div className="mr-1">
          <svg
            className="block"
            fill="#F5385D"
            width={14}
            viewBox="0 0 1000 1000"
          >
            <path d="M972 380c9 28 2 50-20 67L725 619l87 280c11 39-18 75-54 75-12 0-23-4-33-12L499 790 273 962a58 58 0 0 1-78-12 50 50 0 0 1-8-51l86-278L46 447c-21-17-28-39-19-67 8-24 29-40 52-40h280l87-279c7-23 28-39 52-39 25 0 47 17 54 41l87 277h280c24 0 45 16 53 40z" />
          </svg>
        </div>
        <div className="mr-1">
          <p className="font-thin text-xs">{ratings.toFixed(2)}</p>
        </div>
        <div>
          <p className="font-thin text-sm text-gray-400">{`(${numberOfReviews})`}</p>
        </div>
      </div>
      <div className="flex items-center">
        <div>
          <p className="capitalize tracking-wide font-thin text-sm text-gray-500">
            {type}
          </p>
        </div>
        <div>
          <p>&nbsp; · &nbsp; </p>
        </div>
        <div>
          <p className="tracking-wide font-thin text-sm text-gray-500">
            {location}
          </p>
        </div>
      </div>
      <div>
        <p className="max-h-32 whitespace-nowrap  overflow-ellipsis tracking-wide font-thin text-sm text-gray-500">
          {title}
        </p>
      </div>
    </div>
  );
};
