import { Icon } from '@icons';

export interface BarButtonProps {
  barType?: 'menu' | 'saved' | 'login';
  selected?: boolean;
}

export const BarButton: React.FC<BarButtonProps> = ({ barType, selected }) => {
  const types = {
    menu: {
      component: <Icon variant="logo" logoType="menubar" width={25} />,
      name: 'Explore',
    },
    saved: {
      component: <Icon variant="semantic" semanticType="saved" width={25} />,
      name: 'Saved',
    },
    login: {
      component: <Icon variant="general" generalType="login" width={25} />,
      name: 'Log in',
    },
  };

  return (
    <div className="inline-flex flex-col items-center">
      <div>{types[barType].component}</div>
      <div>
        <p className="text-xs">{types[barType].name}</p>
      </div>
    </div>
  );
};

export const bar = (props) => {
  return {
    bar: <BarButton {...props} />,
  };
};
