import { Header } from '@header';
import { Segment } from '@template/d/onlinehost';
import { Footer } from '@footer';
import { useTabTitle } from '@hooks/useTabTitle';

const OnlineHost = () => {
  useTabTitle('Airbnb Experiences: Host an Online Experience');

  return (
    <div>
      <div>
        <Header variant="onlinehost" />
      </div>
      <div>
        <div className="container">
          <Segment variant="banner" />
        </div>
      </div>
      <div className="container">
        <Segment variant="works" />
      </div>
      <div className={`py-10 container--shrink`}>
        <Segment variant="sharing" />
      </div>
      <div className="py-10 container">
        <Segment variant="back" />
      </div>
      <div className="container py-16">
        <Segment variant="faq" />
      </div>
      <div>
        <Segment variant="more" />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default OnlineHost;
