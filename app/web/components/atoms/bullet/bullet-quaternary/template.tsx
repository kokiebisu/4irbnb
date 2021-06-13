import { Button, Icon } from '@atoms';
import React from 'react';

export type QuaternaryBulletTemplateProps = {
  icon: JSX.Element;
  title: string;
  description: string;
  link: string;
  onClick: () => void;
};

export const QuaternaryBulletTemplate = ({
  icon,
  title,
  description,
  link,
  onClick,
}: QuaternaryBulletTemplateProps): JSX.Element => (
  <div>
    <div>{icon}</div>
    <div className="my-4">
      <h3 className="font-2xl">{title}</h3>
    </div>
    <div className="mb-8">
      <p>{description}</p>
    </div>
    {link ? (
      <div>
        <Button title={link} variant="underline" onClick={onClick} />
      </div>
    ) : null}
  </div>
);
