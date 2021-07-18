export type DiscoverSegmentTemplateProps = {
  items: {
    title: string;
    description: string;
    imgUrl: string;
  }[];
};

export const DiscoverSegmentTemplate = ({
  items,
}: DiscoverSegmentTemplateProps): JSX.Element => {
  return (
    <div>
      <div
        style={{
          scrollbarWidth: "none",
          scrollPadding: "0px 2rem",
        }}
        className="w-screen px-8 -mx-8 relative md:w-full flex md:grid md:grid-cols-3 md:gap-x-4 scroll-snap-x h-full overflow-x-scroll scrollbar-hide"
      >
        {items.map(({ title, description, imgUrl }, index) => {
          return (
            <div
              style={{ scrollSnapAlign: "start" }}
              className="mr-4 md:mr-0 md:min-w-full min-w-72"
              key={index}
            >
              {/* card */}
              <div
                style={{
                  paddingBottom: "90%",
                  backgroundImage: `url(${imgUrl})`,
                }}
                className="bg-cover rounded-lg w-full"
              >
                <div className="absolute top-0 bottom-0 right-0 left-0"></div>
              </div>
              <div className="my-1">
                <div>
                  <h4 className="text-lg font-medium">{title}</h4>
                </div>
                <div>
                  <p className="text-sm">{description}</p>
                </div>
              </div>
            </div>
          );
        })}
        <div className="min-w-5 h-16"></div>
      </div>
    </div>
  );
};
