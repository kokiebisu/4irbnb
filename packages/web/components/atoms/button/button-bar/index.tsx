import { Icon, $Icon } from '@icons';

enum kinds {
  menu = 'menu',
  saved = 'saved',
  login = 'login',
}

export interface BarButtonProps {
  barType?: kinds;
  selected?: string;
}

export const BarButton: React.FC<BarButtonProps> = ({ barType, selected }) => {
  const types = {
    menu: {
      component: <Icon variant={$Icon.LOGO} logoType="menubar" width={25} />,
      name: 'Explore',
      selected: selected === 'menu',
    },
    saved: {
      component: (
        <Icon variant={$Icon.SEMANTIC} semanticType="saved" width={25} />
      ),
      name: 'Saved',
      selected: selected === 'saved',
    },
    login: {
      component: (
        <Icon variant={$Icon.GENERAL} generalType="login" width={25} />
      ),
      name: 'Log in',
      selected: selected === 'login',
    },
  };

  return (
    <div className="flex flex-col items-center mx-6">
      <div>{types[barType].component}</div>
      <div>
        <p className="text-xs">{types[barType].name}</p>
      </div>
    </div>
  );
};

export const bar = (props) => {
  return {
    bar: {
      component: <BarButton {...props} />,
      style: '',
    },
  };
};
