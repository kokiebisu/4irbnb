import Router from 'next/router';
import { Button, $Button } from '@button';

/**
 * Renders the host card component
 * @param {string} imgUrl - Image of the host
 * @param {string} host - Name of the host
 * @param {string} stayType - Type of stay
 * @param {string} location - Location of the stay
 */
export const HostCard: React.FC<{
  imgUrl?: string;
  host?: string;
  stayType?: string;
  location?: string;
}> = ({ imgUrl, host = 'Host', stayType = 'Type', location = 'Location' }) => {
  return (
    <div>
      <div className="animate-pulse">
        {imgUrl ? (
          <img
            className="rounded-md object-fit"
            style={{
              height: 434,
              width: 350,
            }}
            src={imgUrl}
          />
        ) : (
          <div
            className="rounded-md bg-gray-400"
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
          variant={$Button.UNDERLINE}
          title={`Check out some ${stayType}s`}
        />
      </div>
    </div>
  );
};
