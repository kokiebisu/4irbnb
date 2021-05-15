export interface ExperiencePanelTemplateProps {
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
export const ExperiencePanelTemplate: React.FC<ExperiencePanelTemplateProps> = ({
  firstImage,
  secondImage,
  thirdImage,
  fourthImage,
  fifthImage,
}) => {
  return (
    <div
      className="overflow-hidden relative h-0"
      style={{
        paddingTop: '38%',
      }}
    >
      <div className="absolute top-0 bottom-0 right-0 left-0">
        <div
          style={{ gridTemplateColumns: '1fr 1.5fr 1fr' }}
          className="h-full grid gap-3"
        >
          <div
            className={`rounded-l-lg bg-cover ${
              !firstImage && 'bg-gray-400 animate-pulse'
            }`}
            style={{
              backgroundImage: firstImage && `url(${firstImage})`,
            }}
          />
          <div
            style={{
              gridTemplateColumns: '2fr 1fr',
              gridTemplateRows: 'auto auto',
            }}
            className="grid h-full gap-3"
          >
            <div
              className={`col-start-1 col-end-2 row-start-1 row-end-3 bg-cover ${
                !secondImage && 'bg-gray-400 animate-pulse'
              }`}
              style={{
                backgroundImage: secondImage && `url(${secondImage})`,
              }}
            />
            <div
              className={`col-start-2 col-end-3 row-start-1 row-end-2 bg-cover ${
                !thirdImage && 'bg-gray-400 animate-pulse'
              }`}
              style={{
                backgroundImage: thirdImage && `url(${thirdImage})`,
              }}
            />
            <div
              className={`col-start-2 col-end-3 row-start-2 row-end-3 bg-cover ${
                !fourthImage && 'bg-gray-400 animate-pulse'
              }`}
              style={{
                backgroundImage: fourthImage && `url(${fourthImage})`,
              }}
            />
          </div>
          <div
            className={`rounded-r-lg bg-cover ${
              !fifthImage && 'bg-gray-400 animate-pulse'
            }`}
            style={{
              backgroundImage: fifthImage && `url(${fifthImage})`,
            }}
          />
        </div>
      </div>
    </div>
  );
};
