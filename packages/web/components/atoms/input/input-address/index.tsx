import { AddressInputTemplate, AddressInputTemplateProps } from "./template";

export type AddressInputProps = AddressInputTemplateProps;

export const AddressInput = ({ ...props }: AddressInputProps): JSX.Element => {
  return <AddressInputTemplate {...props} />;
};
