// import { Button } from "@atoms";

export interface MoreSegmentTemplateProps {
  imgUrl?: string;
}

export const MoreSegmentTemplate = ({
  imgUrl,
}: MoreSegmentTemplateProps): JSX.Element => {
  return (
    <div>
      <div className="relative h-0" style={{ paddingTop: "50%" }}>
        <div
          className="absolute top-0 bottom-0 left-0 right-0 bg-cover bg-center"
          style={{
            backgroundImage: imgUrl && `url(${imgUrl})`,
            // backgroundColor: !imgUrl && "lightgray",
          }}
        >
          <div className="flex items-center justify-center h-full">
            <div>
              <div>
                <h2 className="leading-5 text-center text-white">
                  Learn more about hosting with Airbnb Experiences
                </h2>
              </div>
              <div className="mt-5 flex justify-center">
                {/* <Button
                  variant="border"
                  title="Let's go"
                  inverse
                  bold
                  size="md"
                /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
