import { ProfileIconTemplate, ProfileIconTemplateProps } from './template';

export type ProfileIconProps = ProfileIconTemplateProps;

export const ProfileIcon = (props: ProfileIconProps): JSX.Element => {
  return <ProfileIconTemplate {...props} />;
};
