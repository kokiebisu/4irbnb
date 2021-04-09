import { Bullet, $Bullet } from '@bullet';

export interface RequirementsCreateProps {}

/**
 * Renders the /become-a-host/requirements page content
 */
export const RequirementsCreate: React.FC<RequirementsCreateProps> = () => {
  return (
    <div>
      <div className="mb-3">
        <h3 className="text-3xl text-gray-700">
          Review Airbnb's guest requirements
        </h3>
      </div>
      <div className="mb-7">
        <p className="text-sm text-gray-700">
          Airbnb has requirements that all guests must meet before they book.
        </p>
      </div>
      <div className="mb-6">
        <div className="mb-4">
          <h4 className="text-xl">All Airbnb guests must provide:</h4>
        </div>
        {['Email address', 'Confirmed phone number', 'Payment information'].map(
          (content, index) => {
            return (
              <div key={index} className="mb-3">
                <Bullet variant={$Bullet.CHECK} title={content} />
              </div>
            );
          }
        )}
      </div>
      <div style={{ height: 1 }} className="w-full bg-gray-300 mb-6"></div>
      <div className="mb-4">
        <h4 className="text-xl">Before booking your home, each guest must:</h4>
      </div>
      {[
        'Agree to your House Rules',
        'Message you about their trip',
        'Let you know how many guests are coming',
        "Confirm their check-in time if they're arriving within 2 days",
      ].map((content, index) => {
        return (
          <div key={index} className="mb-3">
            <Bullet variant={$Bullet.CHECK} title={content} />
          </div>
        );
      })}
    </div>
  );
};
