import { Bar, $Bar } from '@bar';
import { Header, $Header } from '@header';

import space from '@styles/space.module.scss';
import responsive from '@styles/responsive.module.scss';

export const CreateLayout: React.FC<{
  title?: string;
  left?: React.ReactNode;
  right?: React.ReactNode;
  next?: () => void;
  back?: () => void;
  percentage?: number;
  criteria?: boolean;
}> = ({
  title = 'Property and guests',
  left,
  right,
  next,
  back,
  criteria = false,
  percentage,
}) => {
  return (
    <div>
      <div className="z-40 top-0 sticky">
        <div>
          <Header variant={$Header.STAY} title={title} />
        </div>
        <div>
          <Bar variant={$Bar.PROGRESS} percentage={percentage} />
        </div>
      </div>
      <div
        className="flex overflow-y-auto"
        style={{ minHeight: 'calc(100vh - 75px)' }}
      >
        <div className="w-full sm:w-3/5 flex justify-end">
          <div
            className={[responsive['full_to_maxw550--xs']].join(' ')}
            style={{
              paddingBottom: 100,
            }}
          >
            <div className="pt-12 px-5">
              <div className="z-10">{left}</div>
            </div>
          </div>
          <div
            className={[
              responsive['maxw100p_to_55p--xs'],
              responsive['justify--center_to_end--xs'],
            ].join(' ')}
            style={{
              backgroundColor: 'white',
              width: '100%',
              position: 'fixed',
              bottom: 0,
              zIndex: 60,
              display: 'flex',
            }}
          >
            <div
              style={{ width: '100%', maxWidth: 550 }}
              className={[space['p-h--32']].join(' ')}
            >
              <Bar
                variant={$Bar.CREATE}
                next={next}
                back={back}
                criteria={criteria}
              />
            </div>
          </div>
        </div>
        <div
          className={[responsive['n_to_b--xs']].join(' ')}
          style={{ width: '45%', backgroundColor: '#FAFAFA' }}
        >
          {right}
        </div>
      </div>
    </div>
  );
};
