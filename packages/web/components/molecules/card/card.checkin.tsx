import { Icon } from '@icons';
import { useCheckin } from './logic/logic.checkin';
import {
  checkInBorder,
  checkOutBorder,
  guestBorder,
} from './logic/logic.checkin';

export interface CheckInCardProps {
  length?: number;
}

/**
 * Renders the checkin card
 */
const CheckInCard: React.FC<CheckInCardProps> = () => {
  const [selected, dispatchSelected] = useCheckin();

  return (
    <>
      <div className="bg-white z-50 rounded-lg py-5 border border-gray-300 shadow-lg fixed lg:sticky right-0 bottom-0 lg:top-0">
        <div className="px-6">
          <div className="flex justify-between">
            <h3 className="py-3 text-gray-500 text-lg font-medium">
              Add dates for prices
            </h3>
            <div className="py-3 text-gray-300 text-xl font-medium w-32">
              <div className="inline-block mr-1">
                <Icon variant={'profile'} profileType="star" width={10} />
              </div>
              <span className="inline-block text-sm mr-1 text-gray-500">
                4.93
              </span>
              <span className="inline-block text-sm font-thin text-gray-500">
                (248)
              </span>
            </div>
          </div>
          <div className="rounded-md mt-3 border">
            <div className="h-16 flex w-full">
              <div
                onClick={() => {
                  dispatchSelected({ type: 'checkin' });
                }}
                className={checkInBorder(selected)}
              >
                <div className="px-3">
                  <label className="block text-left text-xs font-bold text-gray-400">
                    CHECK-IN
                  </label>
                  <input
                    className="w-full font-light text-sm border-none outline-none"
                    placeholder="Add date"
                  />
                </div>
              </div>
              <div
                onClick={() => {
                  dispatchSelected({ type: 'checkout' });
                }}
                className={checkOutBorder(selected)}
              >
                <div className="px-4">
                  <label className="block text-left text-xs font-bold text-gray-400">
                    CHECK-OUT
                  </label>
                  <input
                    placeholder="Add date"
                    className="w-full font-light text-sm border-none outline-none"
                  />
                </div>
              </div>
            </div>
            <button
              style={{ height: 60 }}
              onClick={() => {
                dispatchSelected({ type: 'guests' });
              }}
              className={
                selected.guests
                  ? 'border border-gray-400 w-full bg-transparent rounded'
                  : 'border-b border-l border-r bg-transparent rounded-br-md w-full'
              }
            >
              <div className={guestBorder(selected)}>
                <div className="px-4 flex justify-between items-center">
                  <div>
                    <label className="block text-left text-xs font-bold text-gray-400">
                      GUESTS
                    </label>
                    <p className="font-light text-sm">1 guest</p>
                  </div>
                  <div>
                    <Icon variant="action" actionType="bottom" width={14} />
                  </div>
                </div>
              </div>
            </button>
          </div>
          <div className="mt-4">
            <button className="w-full py-4 text-sm rounded bg-primary text-white font-light">
              Check availability
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export const checkin = (props) => {
  return {
    checkin: {
      component: <CheckInCard {...props} />,
      style: '',
    },
  };
};
