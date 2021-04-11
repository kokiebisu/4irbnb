import { Header, $Header } from '@header';
import { Bar, $Bar } from '@bar';
import { Segment, $Segment } from '@template/s/experiences/online';
import { Modal, $Modal } from '@modal';
import { Footer } from '@footer';

import layout from '@styles/layout.module.scss';
import space from '@styles/space.module.scss';
import shape from '@styles/shape.module.scss';
import color from '@styles/color.module.scss';

import { useToggleState } from '@context/toggle';

import { Button, $Button } from '@button';

const OnlinePage = () => {
  const toggleState = useToggleState();
  return (
    <div>
      <div className="shadow-sm">
        <div className={[layout['container--spread']].join(' ')}>
          <Header variant={$Header.WHITE} />
        </div>
      </div>
      <div className="my-3">
        <div className={[layout['container--spread']].join(' ')}>
          <Segment variant={$Segment.BANNER} />
        </div>
      </div>
      <div className="sticky top-0 z-50">
        <div className="bg-white">
          <div
            className={[layout['container--spread'], space['p-v--16']].join(
              ' '
            )}
          >
            <Bar variant={$Bar.FILTERS} />
          </div>
          <div
            className="w-full bg-gray-500"
            style={{
              height: 1,
            }}
          />
        </div>
      </div>
      <div
        className={[
          layout['container--spread'],
          space['m-b--12'],
          space['m-t--20'],
        ].join(' ')}
      >
        <Segment variant={$Segment.CARDS} />
      </div>
      <div
        className={[layout['container--spread'], space['m-v--12']].join(' ')}
      >
        <Segment variant={$Segment.CARDS} />
      </div>
      <div
        className={[layout['container--spread'], space['m-v--12']].join(' ')}
      >
        <Segment variant={$Segment.STARTING} />
      </div>
      <div
        className={[layout['container--spread'], space['m-v--12']].join(' ')}
      >
        <Segment variant={$Segment.COLLECTIONS} />
      </div>
      <div
        className={[layout['container--spread'], space['m-v--12']].join(' ')}
      >
        <Segment variant={$Segment.CARDS} />
      </div>
      <div
        className="flex justify-center"
        style={{
          padding: '40px 0 56px 0',
        }}
      >
        <Button variant={$Button.PRIMARY} title="Load more" fill="black" />
      </div>
      <div>
        <Footer />
      </div>
      {toggleState.auth && (
        <div
          className="fixed bottom-0 left-0 right-0 top-0"
          style={{
            zIndex: 60,
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
          }}
        >
          <div className="h-screen flex justify-center items-center">
            <Modal
              variant={$Modal.AUTH}
              animate="slideup"
              criteria={toggleState.auth}
              lock
            />
          </div>
        </div>
      )}
      {toggleState.globe && (
        <div
          className="fixed bottom-0 left-0 right-0 top-0"
          style={{
            zIndex: 60,
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
          }}
        >
          <div className="flex justify-center items-center h-screen">
            <Modal
              variant={$Modal.GLOBE}
              extendsTo={[
                shape['w--full'],
                shape['h--full'],
                space['p--40'],
                shape['max-w--1100'],
              ].join(' ')}
              animate="slideup"
              criteria={toggleState.globe}
              lock
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default OnlinePage;
