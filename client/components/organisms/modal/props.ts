export type PrivacyModalProps = {};

export type MenuModalProps = {
  refProp?: any;
};

export type RegisterModalProps = {};

export type AvailabilityModalProps = {
  ratings?: number;
  reviews?: number;
};

export type ModalProps = (
  | MenuModalProps
  | PrivacyModalProps
  | RegisterModalProps
) & {
  extendsTo?: string;
  type: string;
  dispatchType?: string;
  criteria?: any;
};
