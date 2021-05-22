import { BaseIconProps } from '@icons';

export type SemanticIconTypes =
  | 'exclamation'
  | 'warning'
  | 'minus'
  | 'plus'
  | 'check'
  | 'saved';

export type SemanticIconTemplateProps = {
  semanticType: SemanticIconTypes;
  inversed?: boolean;
  circled?: boolean;
};

export const SemanticIconTemplate = ({
  semanticType,
  ...props
}: SemanticIconTemplateProps): JSX.Element => {
  const types = {
    exclamation: <ExclamationIcon {...props} />,
    warning: <WarningIcon {...props} />,
    minus: <MinusIcon {...props} />,
    plus: <PlusIcon {...props} />,
    check: <CheckIcon {...props} />,
    saved: <SavedIcon {...props} />,
  };
  return types[semanticType];
};

export const ExclamationIcon = ({
  fill = '#000',
}: BaseIconProps): JSX.Element => {
  return (
    <svg
      stroke={fill}
      strokeWidth={2}
      width="100%"
      height="auto"
      viewBox="0 0 32 32"
    >
      <circle cx="16" cy="16" r="14" fill="none" strokeWidth={2}></circle>
      <path d="m16 8v10" fill="none" strokeWidth={2}></path>
      <circle cx="16" cy="22.5" fill={fill} r=".5" strokeWidth={2}></circle>
    </svg>
  );
};

export const WarningIcon = ({ fill }: BaseIconProps): JSX.Element => {
  return (
    <svg width="100%" height="auto" viewBox="0 0 16 16">
      <path
        fill={fill}
        d="m8 12c1.1045695 0 2 .8954305 2 2s-.8954305 2-2 2-2-.8954305-2-2 .8954305-2 2-2zm1.6-12v9.6h-3.2v-9.6z"
      />
    </svg>
  );
};

export const MinusIcon = ({
  fill = 'black',
  strokeWidth = 3,
  ...props
}: BaseIconProps): JSX.Element => {
  return (
    <svg
      {...props}
      width="100%"
      height="auto"
      strokeWidth={strokeWidth}
      viewBox="0 0 24 24"
    >
      <rect fill={fill} height="2" rx="1" width="12" x="6" y="11"></rect>
    </svg>
  );
};

export const PlusIcon = ({
  fill = 'black',
  ...props
}: BaseIconProps): JSX.Element => {
  return (
    <svg {...props} width="100%" height="auto" viewBox="0 0 24 24">
      <rect fill={fill} height="2" rx="1" width="12" x="6" y="11"></rect>
      <rect fill={fill} height="12" rx="1" width="2" x="11" y="6"></rect>
    </svg>
  );
};

export const CheckIcon = ({
  fill = 'black',
  circled,
  inversed,
  strokeWidth = 3,
}: BaseIconProps): JSX.Element => {
  if (circled) {
    return (
      <svg
        width="100%"
        height="auto"
        fill={fill}
        fillOpacity={0}
        stroke={fill}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 52 52"
      >
        <path d="m19.1 25.2 4.7 6.2 12.1-11.2"></path>
      </svg>
    );
  }
  if (inversed) {
    return (
      <svg width="100%" height="auto" viewBox="0 0 32 32">
        <path
          fill={fill}
          stroke={fill}
          strokeWidth={strokeWidth}
          d="m16 1c8.2842712 0 15 6.71572875 15 15 0 8.2842712-6.7157288 15-15 15-8.28427125 0-15-6.7157288-15-15 0-8.28427125 6.71572875-15 15-15zm0 2c-7.17970175 0-13 5.82029825-13 13 0 7.1797017 5.82029825 13 13 13 7.1797017 0 13-5.8202983 13-13 0-7.17970175-5.8202983-13-13-13zm7 7.5857864 1.4142136 1.4142136-10.9142136 10.9142136-5.91421356-5.9142136 1.41421356-1.4142136 4.5 4.4992136z"
        ></path>
      </svg>
    );
  }
  return (
    <svg width="100%" height="auto" viewBox="0 0 32 32">
      <path
        strokeWidth={strokeWidth}
        stroke={fill}
        fill="none"
        d="m4 16.5 8 8 16-16"
      />
    </svg>
  );
};

export const SavedIcon = ({ fill = '#737373' }: BaseIconProps): JSX.Element => {
  return (
    <svg width="100%" height="auto" viewBox="0 0 24 24">
      <path
        fill={fill}
        d="m17.5 2.9c-2.1 0-4.1 1.3-5.4 2.8-1.6-1.6-3.8-3.2-6.2-2.7-1.5.2-2.9 1.2-3.6 2.6-2.3 4.1 1 8.3 3.9 11.1 1.4 1.3 2.8 2.5 4.3 3.6.4.3 1.1.9 1.6.9s1.2-.6 1.6-.9c3.2-2.3 6.6-5.1 8.2-8.8 1.5-3.4 0-8.6-4.4-8.6"
      ></path>
    </svg>
  );
};
