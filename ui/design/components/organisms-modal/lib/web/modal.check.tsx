/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { ChevronLeft, ChevronRight } from '@nextbnb/design/assets/svg/regular';
import { Button, $BUTTON } from '@nextbnb/atoms-button';
import { $MODAL } from '../constant/appearance';

const CheckModal: React.FC<{}> = () => {
  return (
    <div css={{ display: 'flex', justifyContent: 'center' }}>
      <div
        css={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          columnGap: 50,
        }}
      >
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

const Calendar: React.FC<{
  next?: () => void;
  previous?: () => void;
}> = ({ next, previous }) => {
  return (
    <div css={{ width: 294 }}>
      <div
        css={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          marginTop: 8,
          marginBottom: 16,
        }}
      >
        <div css={{ position: 'absolute', left: 0 }}>
          {previous && (
            <ChevronLeft width={12} stroke="black" strokeWidth={3} />
          )}
        </div>
        <div>
          <h3 css={{ fontSize: 14 }}>December 2020</h3>
        </div>
        <div css={{ position: 'absolute', right: 0 }}>
          {next && <ChevronRight width={12} stroke="black" strokeWidth={3} />}
        </div>
      </div>
      <div css={{ width: '100%' }}>
        <div css={{ display: 'table', tableLayout: 'fixed' }}>
          <div>
            {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day, index) => {
              return (
                <div key={index} css={{ display: 'table-cell', width: 42 }}>
                  <div css={{ layout: 'flex', justifyContent: 'center' }}>
                    <h4 css={{ fontSize: 10 }}>{day}</h4>
                  </div>
                </div>
              );
            })}
          </div>
          <div css={{ margin: '4px 0' }}>
            {[1, 2, 3, 4, 5, 6, 7].map((number, index) => {
              return (
                <div key={index} css={{ display: 'table-cell' }}>
                  <Button variant={$BUTTON.calendar} number={number} />
                </div>
              );
            })}
          </div>
          <div css={{ margin: '4px 0' }}>
            {[8, 9, 10, 11, 12, 13, 14].map((number, index) => {
              return (
                <div key={index} css={{ display: 'table-cell' }}>
                  <Button variant={$BUTTON.calendar} number={number} />
                </div>
              );
            })}
          </div>
          <div css={{ margin: '4px 0' }}>
            {[15, 16, 17, 18, 19, 20, 21].map((number, index) => {
              return (
                <div key={index} css={{ display: 'table-cell' }}>
                  <Button variant={$BUTTON.calendar} number={number} />
                </div>
              );
            })}
          </div>
          <div css={{ margin: '4px 0' }}>
            {[22, 23, 24, 25, 26, 27, 28].map((number, index) => {
              return (
                <div key={index} css={{ display: 'table-cell' }}>
                  <Button variant={$BUTTON.calendar} number={number} />
                </div>
              );
            })}
          </div>
          <div css={{ margin: '4px 0' }}>
            {[29, 30, 31, null, null, null, null].map((number, index) => {
              return (
                <div key={index} css={{ display: 'table-cell' }}>
                  {number && (
                    <Button variant={$BUTTON.calendar} number={number} />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export const checkin = (props) => {
  return {
    [$MODAL.checkin]: {
      component: <CheckModal {...props} />,
      extendsTo: {
        maxWidth: 720,
        borderRadius: 32,
        padding: '30px 45px',
      },
    },
  };
};

export const checkout = (props) => {
  return {
    [$MODAL.checkout]: {
      component: <CheckModal {...props} />,
      extendsTo: {
        maxWidth: 720,
        borderRadius: 32,
        padding: '30px 45px',
      },
    },
  };
};
