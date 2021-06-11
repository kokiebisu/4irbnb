import { Button } from '@button';
import { Bullet } from '@atoms';

export interface BannerSegmentTemplateProps {}

export const BannerSegmentTemplate: React.FC<BannerSegmentTemplateProps> = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="my-4">
        <h3 className="text-sm text-gray-500">AIRBNB EXPERIENCES</h3>
      </div>
      <div className="mb-4">
        <h2 className="text-5xl">Host an online experience</h2>
      </div>
      <div style={{ width: 600 }} className="my-4 text-center">
        <h4 className="text-lg text-gray-600">
          Join a commmunity of hosts bringing the world together in a whole new
          way.
        </h4>
      </div>
      <div className="my-6">
        <Button variant="primary" title="Get started" />
      </div>
      <div className="my-5">
        <img
          src="https://a0.muscache.com/pictures/4bab4990-eda1-4b94-996e-0940464575b7.jpg"
          alt="banner image"
        />
      </div>
      <div style={{ width: 550 }} className={`my-6 text-center`}>
        <h4 className="text-lg text-gray-600">
          Airbnb Experiences are engaging activities designed by locals that go
          beyond the typical tour or class. And now you can host them for
          anyone, from anywhere.
        </h4>
      </div>
      <div className="my-4 block sm:grid sm:grid-cols-3 sm:col-gap-6">
        {['home', 'global', 'business'].map(
          (type: 'home' | 'global' | 'business', index) => {
            return (
              <div key={index} className="mb-4">
                <Bullet variant="onlinehost" onlinehostType={type} />
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};
