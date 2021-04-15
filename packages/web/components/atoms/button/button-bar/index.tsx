import { Icon } from '@icons';

export interface BarButtonProps {
  barType?: 'menu' | 'saved' | 'login';
  selected?: boolean;
}

export const BarButton: React.FC<BarButtonProps> = ({ barType, selected }) => {
  const types = {
    menu: {
      component: (
        <Icon
          variant="general"
          generalType="explore"
          width={25}
          stroke={selected ? 'red' : '#737373'}
        />
      ),
      name: 'Explore',
    },
    saved: {
      component: (
        <Icon
          variant="semantic"
          semanticType="saved"
          width={25}
          fill={selected ? 'red' : '#737373'}
        />
      ),
      name: 'Saved',
    },
    login: {
      component: (
        <Icon
          variant="general"
          generalType="login"
          width={25}
          fill={selected ? 'red' : '#737373'}
        />
      ),
      name: 'Log in',
    },
  };

  return (
    <div className="inline-flex flex-col items-center">
      <div>{types[barType].component}</div>
      <div>
        <p className={`text-xs ${selected ? 'text-black' : 'text-gray-500'}`}>
          {types[barType].name}
        </p>
      </div>
    </div>
  );
};

export const bar = (props) => {
  return {
    bar: <BarButton {...props} />,
  };
};
