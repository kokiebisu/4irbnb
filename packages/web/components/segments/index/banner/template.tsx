import layout from '@styles/layout.module.scss';
import index from '@styles/index.module.scss';

import { Header, $Header } from '@header';
import { Button } from '@button';
import { ResponsiveImage } from '@helper/img';

export interface BannerTemplateProps {
  scrollPosition?: number;
  category?: string;
  data?: any;
  handleCategoryChange?: (value: string) => void;
  handleHomeRedirect?: () => void;
}

/**
 * Renders the banner section
 */
export const BannerTemplate: React.FC<BannerTemplateProps> = ({
  scrollPosition,
  category,
  data,
  handleCategoryChange,
  handleHomeRedirect,
}) => {
  return (
    <div className="banner">
      <div className="absolute top-0 bottom-0 right-0 left-0">
        <div className={index['banner__background--picture']}>
          <ResponsiveImage />
        </div>
      </div>
      <div className="absolute top-0 bottom-0 left-0 right-0">
        <div
          className="grid h-full"
          style={{
            gridTemplateRows: 'auto 1fr',
          }}
        >
          <div className="z-30">
            <Header
              variant={$Header.LANDING}
              category={category}
              setCategory={handleCategoryChange}
              data={data}
              extendsTo={`${
                scrollPosition < 56
                  ? 'bg-transparent'
                  : 'bg-white fixed top-0 left-0 right-0 shadow'
              }`}
              criteria={scrollPosition < 56}
            />
          </div>
          <div
            className={[layout['container--spread']].join(' ')}
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <div>
              <div className="flex sm:block justify-center">
                <h3 className="text-white text-3xl">Go Near</h3>
              </div>
              <div
                className={[
                  index['w__explore--subtitle'],
                  index['text__explore--subtitle'],
                ].join(' ')}
              >
                <p
                  className={`text-white font-light tracking-tight ${[
                    index['size__explore--subtitle'],
                  ].join(' ')}`}
                >
                  Settle in somewhere new. Discover nearby stays to live, work,
                  or just relax.
                </p>
              </div>
              <div
                className={`mt-4 mx-0${[index['justify__explore--button']].join(
                  ' '
                )}`}
              >
                <Button
                  variant="banner"
                  title="Explore nearby"
                  onClick={handleHomeRedirect}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
