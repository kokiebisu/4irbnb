import { Icon, $Icon } from '@icons';

export interface BarButtonProps {
  barType?: 'menu' | 'saved' | 'login';
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
