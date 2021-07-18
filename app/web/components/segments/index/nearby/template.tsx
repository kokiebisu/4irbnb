import { Card } from "@card";

export type NearbySegmentTemplateProps = {
  items: { to: string; imgUrl: string; city: string; hours: number }[];
};

/**
 * Renders the nearby section
 * @param {Object[]} items - List of cities which are nearby
 */
export const NearbySegmentTemplate = ({
  items,
}: NearbySegmentTemplateProps) => {
  return (
    <div>
      <div
        style={{
          scrollbarWidth: "none",
          scrollPadding: "0px 2rem",
        }}
        className="w-screen px-8 -mx-8 relative md:w-full flex md:grid md:grid-cols-4 md:gap-x-4 scroll-snap-x h-full overflow-x-scroll scrollbar-hide"
      >
        {items.map((item, index) => {
          return (
            <div
              style={{ scrollSnapAlign: "start" }}
              className="mr-4 md:mr-0 md:min-w-full min-w-72"
              key={index}
            >
              <div className="mb-3">
                <Card
                  variant="nearby"
                  // to={items[0]?.to}
                  imgUrl={item[0]?.imgUrl}
                  city={item[0]?.city}
                  hours={item[0]?.hours}
                  size="lg"
                />
              </div>
              <div className="">
                <Card
                  variant="nearby"
                  // to={items[1]?.to}
                  imgUrl={item[1]?.imgUrl}
                  city={item[1]?.city}
                  hours={item[1]?.hours}
                  size="lg"
                />
              </div>
            </div>
          );
        })}
        <div></div>
      </div>
    </div>
  );
};
