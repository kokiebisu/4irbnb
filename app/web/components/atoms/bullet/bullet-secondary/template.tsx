export type SecondaryBulletTemplateProps = {
  icon: JSX.Element;
  title: string;
  description: string;
};

export const SecondaryBulletTemplate = ({
  icon,
  title,
  description,
}: SecondaryBulletTemplateProps): JSX.Element => (
  <div className="flex my-4 items-center pr-4">
    <div className="mr-4">{icon}</div>
    <div>
      <h3 className="mb-1 font-base text-base text-gray-600 tracking-tight">
        {title}
      </h3>
      <p className="text-gray-500 font-thin text-sm">{description}</p>
    </div>
  </div>
);
