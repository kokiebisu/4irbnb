export interface WorksCardTemplateProps {
  imgUrl?: string;
  title?: string;
  description?: string;
}

export const WorksCardTemplate = ({
  imgUrl,
  title,
  description,
}: WorksCardTemplateProps): JSX.Element => {
  return (
    <div>
      <div className="block sm:flex items-center">
        <div className="w-full sm:w-1/2">
          <img src={imgUrl} alt="works image" />
        </div>
        <div className="w-full sm:w-1/2">
          <div className="mb-4">
            <h3>{title}</h3>
          </div>
          <div>
            <p className="text-sm">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
