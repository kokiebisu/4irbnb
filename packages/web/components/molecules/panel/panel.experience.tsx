/**
 *
 * @param param0
 * @returns
 */
export const ExperiencePanel: React.FC<{ images?: string[] }> = ({
  images = [],
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
            className={`rounded-l-lg bg-cover ${!images[0] && 'bg-gray-500'}`}
            style={{
              backgroundImage: images[0] && `url(${images[0]})`,
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
                !images[1] && 'bg-gray-500'
              }`}
              style={{
                backgroundImage: images[1] && `url(${images[1]})`,
              }}
            />
            <div
              className={`col-start-2 col-end-3 row-start-1 row-end-2 bg-cover ${
                !images[2] && 'bg-gray-500'
              }`}
              style={{
                backgroundImage: images[2] && `url(${images[2]})`,
              }}
            />
            <div
              className={`col-start-2 col-end-3 row-start-2 row-end-3 bg-cover ${
                !images[3] && 'bg-gray-500'
              }`}
              style={{
                backgroundImage: images[3] && `url(${images[3]})`,
              }}
            />
          </div>
          <div
            className={`rounded-r-lg bg-cover ${!images[4] && 'bg-gray-500'}`}
            style={{
              backgroundImage: images[4] && `url(${images[3]})`,
            }}
          />
        </div>
      </div>
    </div>
  );
};
