import {
  OnlineHostHeaderTemplate,
  OnlineHostHeaderTemplateProps,
} from "./template";

export interface OnlineHostHeaderProps extends OnlineHostHeaderTemplateProps {}

export const OnlineHostHeader = (props: OnlineHostHeaderProps): JSX.Element => {
  return <OnlineHostHeaderTemplate {...props} />;
};
