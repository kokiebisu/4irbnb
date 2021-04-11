import banner from '@banner/banner.module.scss';

import { Button } from '@button';
import { Bullet } from '@bullet';

export interface BannerTemplateProps {}

export const BannerTemplate: React.FC<BannerTemplateProps> = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="my-4">
        <h3 className="text-sm text-gray-500">AIRBNB EXPERIENCES</h3>
      </div>
      <div className="mb-4">
        <h2 className="text-5xl">Host an online experience</h2>
      </div>
      <div
        className={`my-4 ${[
          banner['w__onlinehost--subtitle'],
          banner['text__onlinehost--subtitle'],
        ].join(' ')}`}
      >
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
      <div
        className={`my-6 ${[
          banner['w__onlinehost--explanation'],
          banner['text__onlinehost--explanation'],
        ].join(' ')}`}
      >
        <h4 className="text-lg text-gray-600">
          Airbnb Experiences are engaging activities designed by locals that go
          beyond the typical tour or class. And now you can host them for
          anyone, from anywhere.
        </h4>
      </div>
      <div
        className={`my-4 ${[banner['display__onlinehost--points']].join(' ')}`}
      >
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
