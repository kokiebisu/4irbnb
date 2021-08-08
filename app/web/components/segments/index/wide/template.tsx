import { Button } from "@atoms";

export type WideSegmentTemplateProps = {
  handleRedirectToHostPage: () => void;
  title: string;
  description: string;
  inverse?: boolean;
  bannerImg: string;
};

/**
 * @param {function} onRedirect - Triggered when user clicked 'Become a host' button
 */
export const WideSegmentTemplate = ({
  handleRedirectToHostPage,
  title,
  description,
  inverse,
  bannerImg,
}: WideSegmentTemplateProps & {
  handleRedirectToHostPage: () => void;
}): JSX.Element => {
  return (
    <div className="relative w-full rounded-3xl">
      <div className="w-full relative pt-96 lg:pt-112">
        <div
          className="absolute top-0 bottom-0 right-0 left-0 bg-no-repeat bg-cover bg-right rounded-3xl w-full h-full"
          style={{
            backgroundImage: `url(${bannerImg})`,
            backgroundPositionY: "50%",
            verticalAlign: "bottom",
          }}
        >
          <div className="absolute top-1/2 transform -translate-y-1/2 pl-4 md:pl-12 lg:pl-24 w-112">
            <div className="">
              <h1
                className={`${
                  inverse ? "text-white" : "text-black"
                } text-3xl lg:text-5xl font-normal leading-16`}
              >
                {title}
              </h1>
            </div>
            <div className="mt-3 mb-5">
              <h3
                className={`${
                  inverse ? "text-white" : "text-black"
                } font-thin leading-7 text-md lg:text-lg`}
              >
                {description}
              </h3>
            </div>
            <div>
              <Button
                variant="primary"
                color={inverse ? "black" : "white"}
                fill={inverse ? "white" : "black"}
                size="md"
                title="Become a host"
                onClick={handleRedirectToHostPage}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
