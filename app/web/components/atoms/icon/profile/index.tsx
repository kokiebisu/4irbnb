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
    <div data-testid="profile-icon" style={{ width, height }}>
      <ProfileIconTemplate {...props} />
    </div>
  );
};
