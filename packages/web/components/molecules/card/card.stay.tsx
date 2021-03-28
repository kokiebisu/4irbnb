import { Heart } from '@svg/original';

import { Bullet, $Bullet } from '@bullet';
import { ImageSlider } from '@particle/image.slider';
import { Card, $Card } from '@card';

/**
 * Renders the stay card component
 * @param {string[]} images - List of images to be displayed
 * @param {string} typeStay - Type of stay
 * @param {string} location - Location of the stay
 * @param {string} title - Title of the stay
 * @param {Object} accomodations - Information about the accomodations of the stay
 * @param {string[]} characteristics - List of characteristics
 */
export const StayCard: React.FC<{
  images?: string[];
  typeStay?: string;
  location?: string;
  title?: string;
  accomodations?: {
    guests: number;
    bedroom: number;
    beds: number;
    bath: number;
  };
  characteristics?: string[];
  ratings?: number;
  reviews?: number;
}> = ({
  images,
  typeStay = 'Type of stay',
  location = 'Location',
  title = 'Title of stay',
  accomodations = {
    guests: 1,
    bedroom: 1,
    beds: 1,
    bath: 1,
  },
  characteristics = ['characteristic'],
}) => {
  return (
    <div>
      <div className="sm:hidden sm:mb-8">
        <Card variant={$Card.HORIZONTAL} />
      </div>
      <div className="hidden sm:block">
        <div className="py-8">
          <div className="flex justify-between">
            <div className="flex">
              <div
                className="mr-6"
                style={{
                  width: 300,
                  minHeight: 200,
                }}
              >
                <div className="rounded-lg h-full">
                  <ImageSlider slides={images} />
                </div>
              </div>
              <div className="flex flex-col justify-between">
                <div>
                  <p className="text-gray-500 text-sm">
                    {typeStay} in {location}
                  </p>
                  <h4 className="font-light my-1 text-lg text-gray-600">
                    {title}
                  </h4>
                  <div className="bg-gray-400 my-2 h-0.5 w-8"></div>
                  <div>
                    <span className="text-gray-500 text-sm">
                      {accomodations.guests} guests
                    </span>
                    <span className="text-gray-500 text-sm"> · </span>
                    <span className="text-gray-500 text-sm">
                      {accomodations.bedroom} bedroom
                    </span>
                    <span className="text-gray-500 text-sm"> · </span>
                    <span className="text-gray-500 text-sm">
                      {accomodations.beds} beds
                    </span>
                    <span className="text-gray-500 text-sm"> · </span>
                    <span className="text-gray-500 text-sm">
                      {accomodations.bath} bath
                    </span>
                  </div>
                  <div>
                    {characteristics.map((characteristic, index) => {
                      return (
                        <span key={index} className="text-gray-500 text-sm">
                          {characteristic}
                        </span>
                      );
                    })}
                  </div>
                </div>
                <div>
                  <Bullet variant={$Bullet.RATING} />
                </div>
              </div>
            </div>
            <div>
              <Heart fill="white" width={24} stroke="black" strokeWidth={2} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
