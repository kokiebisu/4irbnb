import { Header, $Header } from '@header';
import { Bar, $Bar } from '@bar';
import { Segment, $Segment } from '@template/s/experiences/online';
import { Modal, $Modal } from '@modal';
import { Footer } from '@footer';
import { useToggleState } from '@context/toggle';
import { Button } from '@button';

const OnlinePage = () => {
  const toggleState = useToggleState();
  return (
    <div>
      <div className="shadow-sm">
        <div className="container-spread">
          <Header variant={$Header.WHITE} />
        </div>
      </div>
      <div className="my-3">
        <div className="container-spread">
          <Segment variant={$Segment.BANNER} />
        </div>
      </div>
      <div className="sticky top-0 z-50">
        <div className="bg-white">
          <div className="container-spread py-4">
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
      <div className={`mb-4 mt-5 container-spread`}>
        <Segment variant={$Segment.CARDS} />
      </div>
      <div className="my-1 container-spread">
        <Segment variant={$Segment.CARDS} />
      </div>
      <div className="my-1 container-spread">
        <Segment variant={$Segment.STARTING} />
      </div>
      <div className="my-1 container-spread">
        <Segment variant={$Segment.COLLECTIONS} />
      </div>
      <div className="my-1 container-spread">
        <Segment variant={$Segment.CARDS} />
      </div>
      <div
        className="flex justify-center"
        style={{
          padding: '40px 0 56px 0',
        }}
      >
        <Button variant="primary" title="Load more" fill="black" />
      </div>
      <div>
        <Footer />
      </div>
      {toggleState.auth && (
        <div className="z-60 bg-blur fixed bottom-0 left-0 right-0 top-0">
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
