import { Video } from '@atoms';
import { Icon } from '@atoms';

export interface StartingCardTemplateProps {
  ratings?: number;
  reviews?: number;
  country?: string;
  title?: string;
  minCost?: number;
  slots?: string[];
  imgUrl?: string;
  videoUrl?: string;
  handleIsHoveredChange?: (state: boolean) => boolean;
  isHovered?: boolean;
}

export const StartingCardTemplate: React.FC<StartingCardTemplateProps> = ({
  ratings,
  reviews,
  country,
  title,
  minCost,
  slots,
  imgUrl,
  videoUrl,
  handleIsHoveredChange,
  isHovered,
}) => {
  return (
    <div
      onMouseEnter={() => handleIsHoveredChange(true)}
      onMouseLeave={() => handleIsHoveredChange(false)}
      className="border border-gray-300 rounded-md p-3 cursor-pointer"
    >
      <div
        className="h-full grid"
        style={{
          gridTemplateColumns: '130px 1fr 20px',
        }}
      >
        <div className="mr-3">
          <div className="relative" style={{ paddingTop: '130%' }}>
            <div className="absolute top-0 bottom-0 left-0 right-0">
              <div className="relative h-full w-full">
                {isHovered && <Video videoUrl={videoUrl} />}
                <img
                  className="object-fit block rounded-md h-full"
                  src={imgUrl}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <div className="flex items-center mb-3">
            <div className="mr-1">
              <Icon variant={'profile'} profileType="star" width={10} />
            </div>
            <div className="mr-1">
              <p className="text-xs">{ratings}</p>
            </div>
            <div>
              <p className="text-gray-500 text-xs">({reviews})</p>
            </div>
            <div className="mr-1">
              <p className="text-gray-500 text-xs">&nbsp;·&nbsp;{country}</p>
            </div>
          </div>
          <div className="mb-2">
            <h4 className="text-sm">{title}</h4>
          </div>
          <div className="mb-3">
            <h3 className="text-sm">
              ${minCost}
              <span>/person</span>
            </h3>
          </div>
          <div className="flex">
            {slots.map((slot, index) => {
              return (
                <div key={index} className="mr-2">
                  <div className="border border-gray-400 rounded-md px-3 py-2">
                    <h3 className="text-xs">{slot}p.m.</h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <Icon variant="action" actionType="heart" width={20} height={20} />
        </div>
      </div>
    </div>
  );
};
