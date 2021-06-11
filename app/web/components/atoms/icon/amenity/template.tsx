import { BaseIconProps } from 'components/atoms/icon';

export type AmenityIconTypes =
  | 'smokeAlarm'
  | 'tv'
  | 'kitchen'
  | 'heating'
  | 'privateEntrance'
  | 'carbonAlarm';

export interface AmenityIconTemplateProps {
  amenityType: AmenityIconTypes;
}

export const AmenityIconTemplate = ({
  amenityType,
}: AmenityIconTemplateProps): JSX.Element => {
  const types = {
    smokeAlarm: <SmokeAlarmIcon />,
    tv: <TVIcon />,
    kitchen: <KitchenIcon />,
    heating: <HeatingIcon />,
    privateEntrance: <PrivateEntranceIcon />,
    carbonAlarm: <CarbonMonoxideAlarmIcon />,
  };
  return types[amenityType];
};

export const SmokeAlarmIcon = ({
  fill = 'black',
}: BaseIconProps): JSX.Element => {
  return (
    <svg display="block" width="100%" height="auto" viewBox="0 0 32 32">
      <path
        fill={fill}
        d="M16 1c8.284 0 15 6.716 15 15 0 8.284-6.716 15-15 15-8.284 0-15-6.716-15-15C1 7.716 7.716 1 16 1zm0 2C8.82 3 3 8.82 3 16s5.82 13 13 13 13-5.82 13-13S23.18 3 16 3zm-4.9 14a5.006 5.006 0 0 0 3.9 3.9v2.03A7.005 7.005 0 0 1 9.071 17zm9.8 0l2.029.001a7.005 7.005 0 0 1-5.928 5.928v-2.03A5.006 5.006 0 0 0 20.9 17zM16 13a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm1.001-5.929A7.005 7.005 0 0 1 22.929 15H20.9A5.006 5.006 0 0 0 17 11.1zm-2.001 0v2.03A5.006 5.006 0 0 0 11.1 15H9.07A7.005 7.005 0 0 1 15 9.07zM23 8a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
      ></path>
    </svg>
  );
};

export const TVIcon = ({ fill = 'black' }: BaseIconProps): JSX.Element => {
  return (
    <svg display="block" width="100%" height="auto" viewBox="0 0 32 32">
      <path
        fill={fill}
        d="M9 29v-2h2v-2H6a5 5 0 0 1-4.995-4.783L1 20V8a5 5 0 0 1 4.783-4.995L6 3h20a5 5 0 0 1 4.995 4.783L31 8v12a5 5 0 0 1-4.783 4.995L26 25h-5v2h2v2zm10-4h-6v2h6zm7-20H6a3 3 0 0 0-2.995 2.824L3 8v12a3 3 0 0 0 2.824 2.995L6 23h20a3 3 0 0 0 2.995-2.824L29 20V8a3 3 0 0 0-2.824-2.995z"
      ></path>
    </svg>
  );
};

export const KitchenIcon = ({ fill = 'black' }: BaseIconProps): JSX.Element => {
  return (
    <svg display="block" width="100%" height="auto" viewBox="0 0 32 32">
      <path
        fill={fill}
        d="M26 1a5 5 0 0 1 5 5c0 6.389-1.592 13.187-4 14.693V31h-2V20.694c-2.364-1.478-3.942-8.062-3.998-14.349L21 6l.005-.217A5 5 0 0 1 26 1zm-9 0v18.118c2.317.557 4 3.01 4 5.882 0 3.27-2.183 6-5 6s-5-2.73-5-6c0-2.872 1.683-5.326 4-5.882V1zM2 1h1c4.47 0 6.934 6.365 6.999 18.505L10 21H3.999L4 31H2zm14 20c-1.602 0-3 1.748-3 4s1.398 4 3 4 3-1.748 3-4-1.398-4-3-4zM4 3.239V19h3.995l-.017-.964-.027-.949C7.673 9.157 6.235 4.623 4.224 3.364l-.12-.07zm19.005 2.585L23 6l.002.31c.045 4.321 1.031 9.133 1.999 11.39V3.17a3.002 3.002 0 0 0-1.996 2.654zm3.996-2.653v14.526C27.99 15.387 29 10.4 29 6a3.001 3.001 0 0 0-2-2.829z"
      ></path>
    </svg>
  );
};

export const HeatingIcon = ({ fill = 'black' }: BaseIconProps): JSX.Element => {
  return (
    <svg display="block" width="100%" height="auto" viewBox="0 0 32 32">
      <path
        fill={fill}
        d="M16 0a5 5 0 0 1 4.995 4.783L21 5l.001 12.756.26.217a7.984 7.984 0 0 1 2.717 5.43l.017.304L24 24a8 8 0 1 1-13.251-6.036l.25-.209L11 5A5 5 0 0 1 15.563.019l.22-.014zm0 2a3 3 0 0 0-2.995 2.824L13 5v13.777l-.428.298a6 6 0 1 0 7.062.15l-.205-.15-.428-.298L19 11h-4V9h4V7h-4V5h4a3 3 0 0 0-3-3zm1 11v7.126A4.002 4.002 0 0 1 16 28a4 4 0 0 1-1-7.874V13zm-1 9a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"
      ></path>
    </svg>
  );
};

export const PrivateEntranceIcon = ({
  fill = 'black',
}: BaseIconProps): JSX.Element => {
  return (
    <svg display="block" width="100%" height="auto" viewBox="0 0 32 32">
      <path
        fill={fill}
        d="M25 1a2 2 0 0 1 1.995 1.85L27 3l-.001 26H29v2H3v-2h1.999L5 3a2 2 0 0 1 1.85-1.995L7 1zm0 2H7l-.001 26h18zm-3 12a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
      ></path>
    </svg>
  );
};

export const CarbonMonoxideAlarmIcon = ({
  fill = 'black',
}: BaseIconProps): JSX.Element => {
  return (
    <svg display="block" width="100%" height="auto" viewBox="0 0 32 32">
      <path
        fill={fill}
        d="M25 2a5 5 0 0 1 4.995 4.783L30 7v18a5 5 0 0 1-4.783 4.995L25 30H7a5 5 0 0 1-4.995-4.783L2 25V7a5 5 0 0 1 4.783-4.995L7 2zm0 2H7a3 3 0 0 0-2.995 2.824L4 7v18a3 3 0 0 0 2.824 2.995L7 28h18a3 3 0 0 0 2.995-2.824L28 25V7a3 3 0 0 0-2.824-2.995zM11.1 17a5.006 5.006 0 0 0 3.9 3.9v2.03A7.005 7.005 0 0 1 9.071 17zm9.8 0l2.029.001a7.005 7.005 0 0 1-5.928 5.928v-2.03A5.006 5.006 0 0 0 20.9 17zM16 13a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm1.001-5.929A7.005 7.005 0 0 1 22.929 15H20.9A5.006 5.006 0 0 0 17 11.1zm-2.001 0v2.03A5.006 5.006 0 0 0 11.1 15H9.07A7.005 7.005 0 0 1 15 9.07zM23 8a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
      ></path>
    </svg>
  );
};
