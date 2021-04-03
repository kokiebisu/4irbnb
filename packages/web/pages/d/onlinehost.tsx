import { Header, $Header } from '@header';
import { Template, $Template } from '@template/d/onlinehost/index';
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
          <Template variant={$Template.BANNER} />
        </div>
      </div>
      <div className={[layout['container']].join(' ')}>
        <Template variant={$Template.WORKS} />
      </div>
      <div
        className={[layout['container--shrink'], space['p-v--64']].join(' ')}
      >
        <Template variant={$Template.SHARING} />
      </div>
      <div className={[layout['container'], space['p-v--64']].join(' ')}>
        <Template variant={$Template.BACK} />
      </div>
      <div className={[layout['container'], space['p-v--100']].join(' ')}>
        <Template variant={$Template.FAQ} />
      </div>
      <div>
        <Template variant={$Template.MORE} />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default OnlineHost;
