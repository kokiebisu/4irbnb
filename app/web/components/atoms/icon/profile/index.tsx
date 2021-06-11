import { ProfileIconTemplate, ProfileIconTemplateProps } from './template';

export type ProfileIconProps = ProfileIconTemplateProps & {
  width: number;
  height: number;
};

export const ProfileIcon = ({
  width,
  height,
  ...props
}: ProfileIconProps): JSX.Element => {
  return (
    <div>
      <ProfileIconTemplate {...props} />
    </div>
  );
};
