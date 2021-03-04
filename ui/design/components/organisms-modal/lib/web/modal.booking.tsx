/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Button, $BUTTON } from '@nextbnb/atoms-button';
import { $MODAL } from '../constant/appearance';

/**
 * Renders the booking modal
 * @param {Object[]} availables - Lists all the available dates
 */
const BookingModal: React.FC<{
  availables?: any;
}> = ({
  availables = [
    {
      date: 'Tue., Nov. 10',
      from: '1:00 a.m. ',
      to: '3:00 a.m. ',
      standard: 'PST',
      price: 31,
    },
    {
      date: 'Tue., Nov. 10',
      from: '1:00 a.m. ',
      to: '3:00 a.m. ',
      standard: 'PST',
      price: 31,
    },
    {
      date: 'Tue., Nov. 10',
      from: '1:00 a.m. ',
      to: '3:00 a.m. ',
      standard: 'PST',
      price: 31,
    },
  ],
}) => {
  const displayingAvailables = [...availables].splice(0, 3);
  return (
    <div
      css={{
        width: '100%',
        display: 'inline-block',
      }}
    >
      <div>
        <div>
          <div>
            <span css={{ padding: '10px 0', fontSize: 21 }}>
              <b
                css={{
                  fontWeight: 500,
                  padding: '10px 0',
                  fontSize: 21,
                }}
              >
                From $31
              </b>
            </span>
            <span> /person</span>
          </div>
          <div>
            <u
              css={{
                fontSize: 14,
                fontWeight: 100,
              }}
              sx={{
                color: 'grey.600',
              }}
            >
              Show all prices
            </u>
          </div>
        </div>
        <div>input</div>
        <div>
          {displayingAvailables.map((available, index) => {
            return (
              <div
                key={index}
                css={{
                  display: [
                    'block',
                    'block',
                    'block',
                    'block',
                    'block',
                    'block',
                    'block',
                    'flex',
                  ],
                  justifyContent: 'space-between',
                  marginTop: 16,
                }}
              >
                <div>
                  <div css={{ marginBottom: 6 }}>
                    <h3 css={{ fontSize: 15 }}>{available.date}</h3>
                  </div>
                  <div>
                    <p css={{ fontSize: 12 }}>
                      {available.from} - {available.to} {available.standard}
                    </p>
                  </div>
                  <div>
                    <u css={{ fontSize: 12 }}>Book for a private group</u>
                  </div>
                </div>
                <div>
                  <div css={{ margin: '4px 0' }}>
                    <span css={{ fontSize: 13 }}>
                      <b>${available.price}</b>
                    </span>
                    <span css={{ fontSize: 13 }}> /person</span>
                  </div>
                  <div>
                    <Button
                      variant={$BUTTON.primary}
                      size="sm"
                      title="Choose"
                      spread
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div css={{ marginTop: 24 }}>
          <div>
            <Button
              variant={$BUTTON.border}
              extendsTo={{ bg: 'transparent' }}
              size="md"
              title="See more dates"
              block
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export const booking = (props) => {
  return {
    [$MODAL.booking]: {
      component: <BookingModal {...props} />,
      css: {
        padding: 24,
        border: '1px solid grey.300',
        borderRadius: 18,
      },
    },
  };
};
