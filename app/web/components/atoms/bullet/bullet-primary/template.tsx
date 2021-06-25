import React from 'react';

export type PrimaryBulletTemplateProps = {
  icon: JSX.Element;
  title: string;
};

export const PrimaryBulletTemplate = ({
  icon,
  title,
}: PrimaryBulletTemplateProps): JSX.Element => {
  return (
    <div className="flex my-4 items-center pr-4">
      <div className="mr-4">{icon}</div>
      <div>
        <h3 className="font-light text-base text-gray-600 tracking-tight">
          {title}
        </h3>
      </div>
    </div>
  );
};
