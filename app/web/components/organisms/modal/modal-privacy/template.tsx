import { Button } from '@button';
import { Icon } from '@atoms';

export interface PrivacyModalTemplateProps {
  handleSave: () => void;
  handleSettings: () => void;
}

/**
 * Renders the privacy modal
 */
export const PrivacyModalTemplate: React.FC<PrivacyModalTemplateProps> = ({
  handleSave,
  handleSettings,
}) => {
  return (
    <div>
      <div className="block lg:flex lg:items-center">
        <div>
          <div className="flex items-center mt-2 mb-2 ml-0 mr-0">
            <div className="mr-3">Your Privacy</div>
            <div className="relative top-1">
              <Icon
                variant="general"
                generalType="lock"
                width={16}
                fill="#428BFF"
              />
            </div>
          </div>
          <div className="mb-5">
            <p className="text-sm font-light leading-6 text-gray-500">
              We use cookies to help personalize content, tailor and measure
              ads, and provide a safer experience. By navigating the site, you
              agree to the use of cookies to collect information on and off
              Airbnb. Read our{' '}
              <u>
                <b>Cookie Policy</b>
              </u>{' '}
              to learn more or go to Cookie Preferences to manage your settings.
            </p>
          </div>
        </div>
        <div className="sm:flex">
          <div className="mt-2 mb-2 ml-0 mr-0 sm:mr-3">
            <Button variant="privacy" title="Save" onClick={handleSave} />
          </div>
          <div className="mt-2 mb-2 ml-0 mr-0">
            <Button
              variant="privacy"
              title="Cookie Preferences"
              inverse
              onClick={handleSettings}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
