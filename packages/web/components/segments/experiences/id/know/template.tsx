import font from '@styles/font.module.scss';
import space from '@styles/space.module.scss';
import color from '@styles/color.module.scss';

export interface KnowTemplateProps {
  houseRules?: string[];
  healths?: string[];
  layoutType?: string;
}

/**
 * Renders the know section
 * @param {string[]} houseRules - List of rules the users must follow
 * @param {string[]} healths - List of health guidelines
 * @param {string} layoutType - The type of layout
 */
export const KnowTemplate: React.FC<KnowTemplateProps> = ({
  houseRules,
  healths,
  layoutType,
}) => {
  return (
    <div>
      <div>
        <h3
          className={[
            font['weight--500'],
            space['m-b--20'],
            color['c--gray__3'],
            font['size--24'],
          ].join(' ')}
        >
          Things to know
        </h3>
      </div>
      <div
        style={{
          display: 'flex',
        }}
        className={[].join(' ')}
      >
        <div style={{ width: '50%' }} className={[space['m-r--32']].join(' ')}>
          <div className={[space['m-b--16']].join(' ')}>
            <h3 className={[font['size--16']].join(' ')}>
              Cancellation policy
            </h3>
          </div>
          <div className={[space['m-b--32']].join(' ')}>
            <p>
              Any experience can be cancelled and fully refunded within 24 hours
              of purchase, or at least 7 days before the experience starts.
            </p>
          </div>
          <div>
            <u>Learn more</u>
          </div>
        </div>

        <div style={{ width: '50%' }} className={[space['m-r--32']].join(' ')}>
          <div className={[space['m-b--16']].join(' ')}>
            <h3 className={[font['size--16']].join(' ')}>Guest requirements</h3>
          </div>
          <div className={[space['m-b--32']].join(' ')}>
            <p>
              You’ll need an internet connection and the ability to stream audio
              and video to participate. A link and details on how to join will
              be included in your booking confirmation email.
            </p>
          </div>
          <div>
            <u>Show more</u>
          </div>
        </div>
      </div>
    </div>
  );
};
