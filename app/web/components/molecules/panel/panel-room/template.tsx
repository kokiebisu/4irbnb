export interface RoomPanelTemplateProps {
  firstImage?: string;
  secondImage?: string;
  thirdImage?: string;
  fourthImage?: string;
  fifthImage?: string;
}

/**
 *
 * @param param0
 * @returns
 */
export const RoomPanelTemplate: React.FC<RoomPanelTemplateProps> = ({
  firstImage,
  secondImage,
  thirdImage,
  fourthImage,
  fifthImage,
}) => {
  return (
    <div className="relative" style={{ paddingTop: '42%' }}>
      <div className="animate-pulse absolute top-0 bottom-0 left-0 right-0">
        <div className="grid grid-cols-2 gap-3 w-full h-full">
          <div>
            {firstImage ? (
              <img
                className="bg-cover bg-repeat rounded-lr-lg"
                src={firstImage}
              />
            ) : (
              <div className="rounded-l-lg w-full h-full bg-gray-500" />
            )}
          </div>
          <div className="grid gap-3 grid-cols-2 grid-rows-2">
            <div>
              {secondImage ? (
                <img className="bg-cover bg-repeat" src={secondImage} />
              ) : (
                <div className="w-full h-full bg-gray-500" />
              )}
            </div>
            <div>
              {thirdImage ? (
                <img
                  className="rounded-tr-lg bg-cover bg-repeat"
                  src={thirdImage}
                />
              ) : (
                <div className="rounded-tr-lg w-full h-full bg-gray-500" />
              )}
            </div>
            <div>
              {fourthImage ? (
                <img
                  className="rounded-br-lg bg-cover bg-repeat"
                  src={fourthImage}
                />
              ) : (
                <div className="w-full h-full bg-gray-500" />
              )}
            </div>
            <div>
              {fifthImage ? (
                <img
                  className="rounded-br-lg bg-cover bg-repeat"
                  src={fifthImage}
                />
              ) : (
                <div className="rounded-br-lg w-full h-full bg-gray-500" />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
