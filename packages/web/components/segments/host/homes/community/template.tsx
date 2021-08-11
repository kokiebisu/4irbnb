import { useRef } from "react";
import Router from "next/router";

import { Button } from "@atoms";
import { Card } from "@card";

import { useSlider, SliderProps } from "@hooks/useSlider";

export interface CommunitySegmentTemplateProps {
  title: string;
  description?: string;
  hosts: {
    name: string;
    stayType: string;
    location: string;
    imgUrl: string;
  }[];
}

/**
 * Renders the homes banner
 * @param {Object[]} hosts - List of hosts
 */
export const CommunitySegmentTemplate: React.FC<CommunitySegmentTemplateProps> = ({
  title,
  description,
  hosts,
}) => {
  const width = 366;
  const sliderRef = useRef(null);
  const { state, previous, next }: SliderProps = useSlider(
    hosts,
    width,
    "banner"
  );

  return (
    <div className="sm:flex items-center">
      <div className="relative z-70 w-full sm:w-1/2 md:w-4/10">
        <div className="pl-5 sm:pl-8">
          <div
            style={{ maxWidth: 360 }}
            className="w-full flex flex-col justify-center"
          >
            <div className="mb-6">
              <h1 style={{ lineHeight: 1 }} className="text-2xl">
                {title}
              </h1>
            </div>
            <div className="mb-6">
              <h4 className="text-lg leading-6">{description}</h4>
            </div>
            <div className="inline-block">
              <Button
                variant="primary"
                size="md"
                title="Get started"
                color="red"
                onClick={() => Router.push("/become-a-host")}
                fill="black"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="pl-4 sm:pl-7 pt-6 z-50 w-full sm:w-1/2 md:w-6/10">
        <div className="relative w-full h-full overflow-hidden rounded-md z-10">
          <div
            className="flex rounded-md h-full"
            style={{
              transform: `translateX(-${state.translate}px)`,
              transition: `transform ease-out ${state.transition}s`,
              width: width * hosts.length,
            }}
          >
            {hosts.map((host, index) => {
              return (
                <div key={index} ref={sliderRef} className="mr-4">
                  <Card
                    variant="host"
                    host={host?.name}
                    imgUrl={host?.imgUrl}
                    stayType={host?.stayType}
                    location={host?.location}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="mt-6 mr-6 flex sm:justify-end">
          <div className="flex items-center">
            <div className="mr-2">
              <Button
                variant="paginate"
                direction="chevronLeft"
                onClick={previous}
              />
            </div>
            <div>
              <Button
                variant="paginate"
                direction="chevronRight"
                onClick={next}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
