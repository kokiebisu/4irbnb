export interface ParticipateCardTemplateProps {
  icon?: any;
  title?: string;
  description?: string;
  more?: string;
}

/**
 * Renders the participate card component
 * @param {string} categoryType - Type of participate card
 */
export const ParticipateCardTemplate: React.FC<ParticipateCardTemplateProps> = ({
  icon,
  title,
  description,
  more,
}) => {
  return (
    <div
      style={{ minHeight: 300, width: 210 }}
      className="h-full p-4 border border-gray-300 rounded-md"
    >
      <div className="my-3">{icon}</div>
      <div className="mb-3">
        <h3 className="text-base">{title}</h3>
      </div>
      <div className="mb-3">
        <p className="text-sm">{description}</p>
      </div>
      {more && (
        <div>
          <h3 className="text-base">
            <u>{more}</u>
          </h3>
        </div>
      )}
    </div>
  );
};
