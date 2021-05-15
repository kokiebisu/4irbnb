import { Icon } from '@icons';
import { Button } from '@button';

export interface CheckModalTemplateProps {}

export const CheckModalTemplate: React.FC<CheckModalTemplateProps> = () => {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-2 gap-x-7">
        <div>
          <Calendar previous={() => alert('previous')} />
        </div>
        <div>
          <Calendar next={() => alert('next')} />
        </div>
      </div>
    </div>
  );
};

interface CalendarProps {
  next?: () => void;
  previous?: () => void;
}

const Calendar: React.FC<CalendarProps> = ({ next, previous }) => {
  return (
    <div style={{ width: 294 }}>
      <div className="flex justify-center items-center relative mt-2 mb-4">
        <div className="absolute left-0">
          {previous && <Icon variant="action" actionType="left" width={12} />}
        </div>
        <div>
          <h3 className="text-sm">December 2020</h3>
        </div>
        <div className="absolute right-0">
          {next && <Icon variant="action" actionType="right" width={12} />}
        </div>
      </div>
      <div className="w-full">
        <div style={{ display: 'table', tableLayout: 'fixed' }}>
          <div>
            {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day, index) => {
              return (
                <div key={index} style={{ display: 'table-cell', width: 42 }}>
                  <div className="flex justify-center">
                    <h4 className="text-xs">{day}</h4>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="my-1">
            {[1, 2, 3, 4, 5, 6, 7].map((number, index) => {
              return (
                <div key={index} style={{ display: 'table-cell' }}>
                  <Button variant="calendar" number={number} />
                </div>
              );
            })}
          </div>
          <div className="my-1">
            {[8, 9, 10, 11, 12, 13, 14].map((number, index) => {
              return (
                <div key={index} style={{ display: 'table-cell' }}>
                  <Button variant="calendar" number={number} />
                </div>
              );
            })}
          </div>
          <div className="my-1">
            {[15, 16, 17, 18, 19, 20, 21].map((number, index) => {
              return (
                <div key={index} style={{ display: 'table-cell' }}>
                  <Button variant="calendar" number={number} />
                </div>
              );
            })}
          </div>
          <div className="my-1">
            {[22, 23, 24, 25, 26, 27, 28].map((number, index) => {
              return (
                <div key={index} style={{ display: 'table-cell' }}>
                  <Button variant="calendar" number={number} />
                </div>
              );
            })}
          </div>
          <div className="my-1">
            {[29, 30, 31, null, null, null, null].map((number, index) => {
              return (
                <div key={index} style={{ display: 'table-cell' }}>
                  {number && <Button variant="calendar" number={number} />}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
