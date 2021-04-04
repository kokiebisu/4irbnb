import { Header, $Header } from '@header';
import { Segment, $Segment } from '@template/d/onlinehost';
import { Footer } from '@footer';

import layout from '@styles/layout.module.scss';
import space from '@styles/space.module.scss';

import { useTabTitle } from '@hooks/useTabTitle';

const OnlineHost = () => {
  useTabTitle('Airbnb Experiences: Host an Online Experience');

  return (
    <div>
      <div>
        <Header variant={$Header.ONLINEHOST} />
      </div>
      <div>
        <div className={[layout['container']].join(' ')}>
          <Segment variant={$Segment.BANNER} />
        </div>
      </div>
      <div className={[layout['container']].join(' ')}>
        <Segment variant={$Segment.WORKS} />
      </div>
      <div
        className={[layout['container--shrink'], space['p-v--64']].join(' ')}
      >
        <Segment variant={$Segment.SHARING} />
      </div>
      <div className={[layout['container'], space['p-v--64']].join(' ')}>
        <Segment variant={$Segment.BACK} />
      </div>
      <div className={[layout['container'], space['p-v--100']].join(' ')}>
        <Segment variant={$Segment.FAQ} />
      </div>
      <div>
        <Segment variant={$Segment.MORE} />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default OnlineHost;
