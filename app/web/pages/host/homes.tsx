import { Segment } from "@template/host/homes";
import { Footer } from "@footer";
import { useTabTitle } from "@hooks/useTabTitle";

/**
 * Renders the component for path /host/homes
 */
const Homes: () => string | JSX.Element = () => {
  useTabTitle("Host your home on Airbnb");

  return (
    <div>
      <div>
        <Segment variant="banner" />
      </div>
      <div className="py-18 border-bottom border-gray-600">
        <div className="px-5 sm:px-9">
          <Segment variant="hosting" />
        </div>
      </div>
      {/* <div className="py-18 border-bottom border-gray-600">
        <Segment variant="community" />
      </div>
      <div className="py-18 border-bottom border-gray-600">
        <div className="px-5 sm:px-9">
          <Segment variant="all" />
        </div>
      </div>
      <div className="py-18">
        <div className="px-5 sm:px-9">
          <Segment variant="priority" />
        </div>
      </div>
      <div className="py-18 border-bottom border-gray-700">
        <div className="px-5 sm:px-9">
          <Segment variant="help" />
        </div>
      </div>
      <div className="py-18 border-bottom border-gray-700">
        <div className="px-5 sm:px-9">
          <Segment variant="ready" />
        </div>
      </div> */}
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Homes;
