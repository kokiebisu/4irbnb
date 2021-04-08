/**
 *
 * @param param0
 * @returns
 */
const RoomPanel: React.FC<{ images?: string[] }> = ({ images = [] }) => {
  return (
    <div className="relative" style={{ paddingTop: '42%' }}>
      <div className="animate-pulse absolute top-0 bottom-0 left-0 right-0">
        <div className="grid grid-cols-2 gap-3 w-full h-full">
          <div>
            {images[0] ? (
              <img
                className="bg-cover bg-repeat rounded-lr-lg"
                src={images[0]}
              />
            ) : (
              <div className="rounded-l-lg w-full h-full bg-gray-500" />
            )}
          </div>
          <div className="grid gap-3 grid-cols-2 grid-rows-2">
            <div>
              {images[1] ? (
                <img className="bg-cover bg-repeat" src={images[1]} />
              ) : (
                <div className="w-full h-full bg-gray-500" />
              )}
            </div>
            <div>
              {images[2] ? (
                <img
                  className="rounded-tr-lg bg-cover bg-repeat"
                  src={images[2]}
                />
              ) : (
                <div className="rounded-tr-lg w-full h-full bg-gray-500" />
              )}
            </div>
            <div>
              {images[3] ? (
                <img
                  className="rounded-br-lg bg-cover bg-repeat"
                  src={images[3]}
                />
              ) : (
                <div className="w-full h-full bg-gray-500" />
              )}
            </div>
            <div>
              {images[3] ? (
                <img
                  className="rounded-br-lg bg-cover bg-repeat"
                  src={images[3]}
                />
              ) : (
                <div className="rounded-br-lg w-full h-full bg-gray-500" />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const room = (props) => {
  return {
    room: {
      component: <RoomPanel {...props} />,
      style: '',
    },
  };
};
