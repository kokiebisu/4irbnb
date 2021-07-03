import { Button } from '@atoms';

export interface WorthSegmentTemplateProps {
  handleRedirectToHostPage: () => void;
}

/**
 * @param {function} onRedirect - Triggered when user clicked 'Become a host' button
 */
export const WorthSegmentTemplate: React.FC<WorthSegmentTemplateProps> = ({
  handleRedirectToHostPage,
}) => {
  return (
    <div className="relative w-full rounded-3xl">
      <div className="w-full relative pt-96 lg:pt-112">
        <div
          className="absolute top-0 bottom-0 right-0 left-0 bg-no-repeat bg-cover bg-right rounded-3xl w-full h-full"
          style={{
            backgroundImage:
              'url(https://a0.muscache.com/im/pictures/eff28e1d-51c4-49ff-8266-68d6929ea1ec.jpg?im_w=1200)',
          }}
        >
          <div className="absolute top-1/2 transform -translate-y-1/2 pl-4 md:pl-12 lg:pl-24 w-112">
            <div className="">
              <h1 className="text-white text-3xl lg:text-5xl font-normal leading-16">
                Your world is <br />
                worth sharing
              </h1>
            </div>
            <div className="mt-3 mb-5">
              <h3 className="text-white font-thin leading-7 text-md lg:text-lg">
                Turn your extra space into your next opportunity.
              </h3>
            </div>
            <div>
              <Button
                variant="primary"
                color="black"
                fill="white"
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
