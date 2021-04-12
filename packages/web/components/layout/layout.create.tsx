import { Bar, $Bar } from '@bar';
import { Header, $Header } from '@header';
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
      <div className="sticky z-50 top-0">
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
        <div
          className={`flex justify-end ${[responsive['w100p_to_55p--xs']].join(
            ' '
          )}`}
        >
          <div
            className={[responsive['full_to_maxw550--xs']].join(' ')}
            style={{
              paddingBottom: 100,
            }}
          >
            <div className="pt-10 px-8">
              <div className="z-10">{left}</div>
            </div>
          </div>
          <div
            className={`justify-center sm:justify-end bg-white w-full fixed bottom-0 z-50 flex ${[
              responsive['maxw100p_to_55p--xs'],
            ].join(' ')}`}
          >
            <div style={{ maxWidth: 550 }} className="px-8 w-full">
              <Bar
                variant={$Bar.CREATE}
                next={next}
                back={back}
                criteria={criteria}
              />
            </div>
          </div>
        </div>
        <div className="hidden sm:block bg-gray-100" style={{ width: '45%' }}>
          {right}
        </div>
      </div>
    </div>
  );
};
