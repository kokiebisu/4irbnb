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
        <h3 className="font-medium mb-4 text-gray-800 text-lg">
          Things to know
        </h3>
      </div>
      <div className="flex">
        <div className="w-1/2 mr-5">
          <div className="mb-4">
            <h3 className="text-lg">Cancellation policy</h3>
          </div>
          <div className="mb-5">
            <p>
              Any experience can be cancelled and fully refunded within 24 hours
              of purchase, or at least 7 days before the experience starts.
            </p>
          </div>
          <div>
            <u>Learn more</u>
          </div>
        </div>

        <div className="w-1/2 mr-5">
          <div className="mb-4">
            <h3 className="text-lg">Guest requirements</h3>
          </div>
          <div className="mb-5">
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
