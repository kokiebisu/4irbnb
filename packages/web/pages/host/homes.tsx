import space from '@styles/space.module.scss';
import color from '@styles/color.module.scss';
import { Segment, $Segment } from 'components/segments/host/homes';
import { Footer } from '@footer';
import { useTabTitle } from '@hooks/useTabTitle';
import { hosts, allItems } from '../../content';

/**
 * Renders the component for path /host/homes
 */
const Homes: () => string | JSX.Element = () => {
  useTabTitle('Host your home on Airbnb');

  return (
    <div>
      <div>
        <Segment variant={$Segment.BANNER} />
      </div>
      <div className={[space['p-v--64'], color['b-b--white__2']].join(' ')}>
        <div className={`${[space['p__homes']].join(' ')}`}>
          <Segment variant={$Segment.HOSTING} />
        </div>
      </div>
      <div className={[space['p-v--64'], color['b-b--white__2']].join(' ')}>
        <Segment
          variant={$Segment.COMMUNITY}
          hosts={hosts}
          title="Host your home on Airbnb"
        />
      </div>
      <div className={[space['p-v--64'], color['b-b--white__2']].join(' ')}>
        <div className={`${[space['p__homes']].join(' ')}`}>
          <Segment variant={$Segment.ALL} items={allItems} />
        </div>
      </div>
      <div className={[space['p-v--64']].join(' ')}>
        <div className={`${[space['p__homes']].join(' ')}`}>
          <Segment variant={$Segment.PRIORITY} />
        </div>
      </div>
      <div className={[space['p-v--64'], color['b-b--white__2']].join(' ')}>
        <div className={`${[space['p__homes']].join(' ')}`}>
          <Segment variant={$Segment.HELP} />
        </div>
      </div>
      <div className={[space['p-v--64'], color['b-b--white__2']].join(' ')}>
        <div className={`${[space['p__homes']].join(' ')}`}>
          <Segment variant={$Segment.READY} />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Homes;
