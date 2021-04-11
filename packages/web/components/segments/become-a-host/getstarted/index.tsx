import { useGetStartedSegment } from './logic';
import { Header, $Header } from '@header';

import responsive from '@styles/responsive.module.scss';
import layout from '@styles/layout.module.scss';
import { GetStartedSegmentTemplate } from './template';

export const GetStartedSegment = () => {
  const data = useGetStartedSegment();
  return (
    <div className="h-screen">
      <div style={{ zIndex: 60, height: 65 }}>
        <div className="sm:hidden">
          <Header variant={$Header.STAY} />
        </div>
      </div>
      <div className={`mt-3 ${[layout['container']].join(' ')}`}>
        <div className="sm:flex">
          <div
            style={{ paddingRight: 60, marginTop: 60 }}
            className={[responsive['w100p_to_55p--sm']].join(' ')}
          >
            <div
              className="w-full"
              style={{
                margin: '50px auto 0',
                maxWidth: 400,
              }}
            >
              <GetStartedSegmentTemplate {...data} />
            </div>
          </div>
          <div className="hidden md:block w-1/2 md:pl-6">
            <div>
              <img
                className="object-cover w-full"
                src="https://a0.muscache.com/airbnb/static/packages/start.b12a70f6.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
