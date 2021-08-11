export interface AnywhereSegmentTemplateProps {
  items: {
    imgUrl: string;
    title: string;
    to: string;
  }[];
}

/**
 *
 * @param {Object[]} items - List of categories to be displayed
 */
export const AnywhereSegmentTemplate: React.FC<AnywhereSegmentTemplateProps> = ({
  items,
}) => {
  return (
    <div>
      <div
        style={{
          scrollbarWidth: "none",
          scrollPadding: "0px 2rem",
        }}
        className="w-screen px-8 -mx-8 md:mx-0 md:px-0 relative md:w-full flex md:grid md:grid-cols-4 md:gap-x-4 scroll-snap-x h-full overflow-x-scroll scrollbar-hide"
      >
        {items.map((item, index) => {
          return (
            <div
              style={{ scrollSnapAlign: "start" }}
              className="mr-4 md:mr-0 md:min-w-full min-w-72"
              key={index}
            >
              <div
                style={{
                  paddingBottom: "90%",
                  backgroundImage: `url(${item.imgUrl})`,
                }}
                className="bg-cover rounded-lg w-full"
              >
                <div className="absolute top-0 bottom-0 right-0 left-0"></div>
              </div>
              <div className="my-1">
                <div>
                  <h4 className="text-lg font-medium">{item.title}</h4>
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
