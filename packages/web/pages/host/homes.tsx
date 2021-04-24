import { Segment, $Segment } from '@template/host/homes';
import { Footer } from '@footer';
import { useTabTitle } from '@hooks/useTabTitle';

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
      <div className="py-18 border-bottom border-gray-600">
        <div className="px-5 sm:px-9">
          <Segment variant={$Segment.HOSTING} />
        </div>
      </div>
      <div className="py-18 border-bottom border-gray-600">
        <Segment
          variant={$Segment.COMMUNITY}
          title="Host your home on Airbnb"
        />
      </div>
      <div className="py-18 border-bottom border-gray-600">
        <div className="px-5 sm:px-9">
          <Segment variant={$Segment.ALL} />
        </div>
      </div>
      <div className="py-18">
        <div className="px-5 sm:px-9">
          <Segment variant={$Segment.PRIORITY} />
        </div>
      </div>
      <div className="py-18 border-bottom border-gray-700">
        <div className="px-5 sm:px-9">
          <Segment variant={$Segment.HELP} />
        </div>
      </div>
      <div className="py-18 border-bottom border-gray-700">
        <div className="px-5 sm:px-9">
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
