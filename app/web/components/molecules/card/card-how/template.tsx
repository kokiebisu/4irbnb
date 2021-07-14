export type HowCardTemplateProps = {
  icon?: string;
  title?: string;
  description?: string;
  more?: string;
};

/**
 * Renders the participate card component
 * @param {string} categoryType - Type of participate card
 */
export const HowCardTemplate = ({
  icon,
  title,
  description,
  more,
}: HowCardTemplateProps): JSX.Element => {
  return (
    <div
      style={{ minHeight: 350 }}
      className="h-full p-6 border border-gray-300 rounded"
    >
      <div className="pt-3 pb-6 px-auto flex justify-content">
        <div
          className="w-32 h-28 bg-cover bg-no-repeat bg-center"
          style={{
            backgroundImage: `url(${icon})`,
          }}
        />
      </div>
      <div className="my-3">
        <h3 className="text-base">{title}</h3>
      </div>
      <div className="mb-3">
        <p className="text-sm">{description}</p>
      </div>
      {more && (
        <div>
          <h3 className="text-xs text-green-500">
            <u>{more}</u>
          </h3>
        </div>
      )}
    </div>
  );
};
