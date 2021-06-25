export type TertiaryBulletTemplateProps = {
  icon: JSX.Element;
  title: string;
  description: string;
};

export const TertiaryBulletTemplate = ({
  icon,
  title,
  description,
}: TertiaryBulletTemplateProps): JSX.Element => (
  <div className="flex">
    <div className="mr-4">{icon}</div>
    <div>
      <div className="mb-2">
        <h3>{title}</h3>
      </div>
      <div>
        <h4 className="text-md leading-6">{description}</h4>
      </div>
    </div>
  </div>
);
