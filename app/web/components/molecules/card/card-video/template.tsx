import { Icon } from '@icons';
import { Video } from '@video';

export interface VideoCardTemplateProps {
  imgUrl?: string;
  videoUrl?: string;
  superhost?: boolean;
  ratings?: number;
  save?: boolean;
  numberOfReviews?: number;
  country?: string;
  title?: string;
  cost?: number;
  isHovered?: boolean;
  handleIsHoveredChange?: (state: boolean) => boolean;
}

/**
 * Renders the vertical card component
 * @param {Object} card - Information about the card
 * @param {boolean} save - Whether if the card can be saved
 */
export const VideoCardTemplate: React.FC<VideoCardTemplateProps> = ({
  imgUrl,
  videoUrl,
  ratings,
  numberOfReviews,
  country,
  title,
  cost,
  isHovered,
  handleIsHoveredChange,
}) => {
  return (
    <div>
      <div
        onMouseEnter={() => {
          if (handleIsHoveredChange) {
            handleIsHoveredChange(true);
          }
        }}
        onMouseLeave={() => {
          if (handleIsHoveredChange) {
            handleIsHoveredChange(false);
          }
        }}
        style={{ paddingTop: '133%' }}
        className="relative"
      >
        <div className="absolute top-0 bottom-0 right-0 left-0">
          <div className="absolute pointer-events-none z-40 top-3 right-3">
            <Icon
              variant="action"
              actionType="heart"
              fill="rgba(0, 0, 0, 0.5)"
              width={24}
            />
          </div>
          <div className="h-full w-full">
            {isHovered && <Video videoUrl={videoUrl} />}
            <img
              className="h-full rounded-lg cursor-pointer object-cover"
              src={imgUrl}
            />
          </div>
        </div>
      </div>

      <div className="mt-1 flex items-center">
        <div className="mr-1">
          <Icon variant={'profile'} profileType="star" width={15} />
        </div>
        <div className="mr-1">
          <p className="font-thin text-xs">{ratings}</p>
        </div>
        <div>
          <p className="font-thin text-sm text-gray-500">{`(${numberOfReviews})`}</p>
        </div>
        <div>
          <p className="text-gray-500">&nbsp; · &nbsp; </p>
        </div>
        <div>
          <p className="text-sm font-thin text-gray-500">{country}</p>
        </div>
      </div>
      <div>
        <p className="tracking-tight font-thin text-sm text-gray-500">
          {title}
        </p>
      </div>
      <div>
        <p className="font-thin">
          <span className="font-medium">From ${cost}</span>
          /person
        </p>
      </div>
    </div>
  );
};
