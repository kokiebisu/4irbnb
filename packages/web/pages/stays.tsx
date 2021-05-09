import { Header } from '@header';
import { Footer } from '@footer';
import stays from '@styles/stays.module.scss';

/**
 * Renders /stays
 */
const StaysPage: React.FC<{}> = () => {
  return (
    <div>
      <div className="top-0 z-10 sticky">
        <Header variant="white" spread />
      </div>
      <div className="z-10 relative w-screen">
        <div className="relative px-0">
          <div className="absolute top-0 left-0 right-0 bottom-0">
            <div
              className="inline-block h-full w-full min-h-full"
              // style={{
              //   display: 'inline-block',
              //   verticalAlign: 'bottom',
              //   height: '100%',
              //   width: '100%',
              //   minHeight: 1,
              // }}
            >
              <picture>
                <source
                  srcSet="https://a0.muscache.com/im/pictures/a4568b94-29ee-49cc-ab9c-5fcc82ca878d.jpg?im_w=720 1x, https://a0.muscache.com/im/pictures/a4568b94-29ee-49cc-ab9c-5fcc82ca878d.jpg?im_w=720 2x"
                  media="(max-width: 743px)"
                ></source>
                <source
                  srcSet="https://a0.muscache.com/im/pictures/a4568b94-29ee-49cc-ab9c-5fcc82ca878d.jpg?im_w=720 1x, https://a0.muscache.com/im/pictures/a4568b94-29ee-49cc-ab9c-5fcc82ca878d.jpg?im_w=1440 2x"
                  media="(min-width: 743.1px) and (max-width: 1127px)"
                ></source>
                <source
                  srcSet="https://a0.muscache.com/im/pictures/a4568b94-29ee-49cc-ab9c-5fcc82ca878d.jpg?im_w=1200 1x, https://a0.muscache.com/im/pictures/a4568b94-29ee-49cc-ab9c-5fcc82ca878d.jpg?im_w=1920 2x"
                  media="(min-width: 1127.1px) and (max-width: 1439px)"
                ></source>
                <source
                  srcSet="https://a0.muscache.com/im/pictures/a4568b94-29ee-49cc-ab9c-5fcc82ca878d.jpg?im_w=1680 1x, https://a0.muscache.com/im/pictures/a4568b94-29ee-49cc-ab9c-5fcc82ca878d.jpg?im_w=1920 2x"
                  media="(min-width: 1439.1px)"
                ></source>
                <img
                  alt="banner img"
                  className="absolute block h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                  src="https://a0.muscache.com/im/pictures/a4568b94-29ee-49cc-ab9c-5fcc82ca878d.jpg?im_w=720"
                />
              </picture>
              <div
                className={`bg-cover h-full w-full ${[stays['support']].join(
                  ''
                )}`}
                style={{
                  backgroundImage:
                    'url("https://a0.muscache.com/im/pictures/a4568b94-29ee-49cc-ab9c-5fcc82ca878d.jpg?im_w=720")',
                  verticalAlign: 'bottom',
                  backgroundPositionX: '50%',
                  backgroundPositionY: '50%',
                  backgroundOrigin: 'border-box',
                }}
              />
            </div>
          </div>
          <div className="absolute top-0 right-0 bottom-0 left-0">
            <div className="container z-20 h-full block text-center sm:text-left sm:flex sm:flex-col sm:justify-center">
              <div className="mx-0 mt-16 mb-3 sm:mt-3">
                <h1 className="text-white text-lg sm:text-xl md:text-3xl">
                  Unique stays
                </h1>
              </div>
              <div className="text-white mx-auto my-0 sm:m-initial w-1/2 sm:w-4/10">
                <p className="text-lg font-thin tracking-wide text-white">
                  Tents, tree houses, and more—these spaces are more than just a
                  place to sleep.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="py-6">
          {/* <div className={[styles['container'], layout['relative']].join(' ')}>
            <div className={[space['m-v--16']].join(' ')}>
              <Section
                type='stay'
                carouselType='stayTypes'
                title='Explore all types of unique stays'
                items={typeStays}
              />
            </div>
            <div className={[space['m-t--8'], space['m-b--35']].join(' ')}>
              <Section
                type='stay'
                title='Nearby stays in nature'
                description='Head outdoors for less crowded spaces with more room to connect.'
                showAll={{
                  to: '/',
                  description: 'Show all nearby nature stays',
                }}
                // fetchUrl='https://34.219.3.215/stays?type=unique'
                pagination
                isDescription
                save
              />
            </div>
            <div className={[space['m-t--8'], space['m-b--35']].join(' ')}>
              <Section
                type='stay'
                title='Imaginative stays close to home'
                description='Get inspired by your surroundings in these architectural gems'
                showAll={{
                  to: '/',
                  description: 'Show all nearby imaginative stays',
                }}
                // fetchUrl='https://34.219.3.215/stays?type=tiny_house'
                pagination
                isDescription
                save
              />
            </div>
            <div className={[space['m-t--8'], space['m-b--35']].join(' ')}>
              <Section
                type='stay'
                title='Novelty stays near you'
                description='From trailers to trains, transport yourself into a one-of-a-kind getaway.'
                showAll={{
                  to: '/',
                  description: 'Show all nearby novelty stays',
                }}
                items={novelties}
                // fetchUrl='https://34.219.3.215/stays?type=camper_rv'
                pagination
                isDescription
                save
              />
            </div>
            <div className={[space['m-t--8'], space['m-b--35']].join(' ')}>
              <div>
                <Section
                  type='stay'
                  title='Unique stays around the world'
                  description='Dream about your future vacation by saving these unique homes.'
                  showAll={{
                    to: '/',
                    description: 'Show all unique stays',
                  }}
                  // fetchUrl='https://34.219.3.215/stays'
                  items={uniqueStays}
                  isDescription
                  save
                />
              </div>
            </div>
          </div> */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default StaysPage;
