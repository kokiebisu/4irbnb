import Router from 'next/router';
import { Button } from '@atoms';

export interface HostCardTemplateProps {
  imgUrl?: string;
  host?: string;
  stayType?: string;
  location?: string;
}

/**
 * Renders the host card component
 * @param {string} imgUrl - Image of the host
 * @param {string} host - Name of the host
 * @param {string} stayType - Type of stay
 * @param {string} location - Location of the stay
 */
export const HostCardTemplate: React.FC<HostCardTemplateProps> = ({
  imgUrl,
  host,
  stayType,
  location,
}) => {
  return (
    <div>
      <div className="">
        {imgUrl ? (
          <img
            className="rounded-md object-cover"
            style={{
              height: 434,
              width: 350,
            }}
            src={imgUrl}
          />
        ) : (
          <div
            className="animate-pulse rounded-md bg-gray-400"
            style={{ height: 434, width: 350 }}
          />
        )}
      </div>
      <div className="mt-2">
        <h3>{host}</h3>
      </div>
      <div className="my-1">
        <h4 className="capitalize tracking-wide text-sm text-gray-500">
          Hosts a {stayType} in {location}
        </h4>
      </div>
      <div>
        <Button
          onClick={() => Router.push('/')}
          variant="underline"
          title={`Check out some ${stayType}s`}
        />
      </div>
    </div>
  );
};
