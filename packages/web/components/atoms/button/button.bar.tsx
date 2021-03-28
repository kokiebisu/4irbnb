import { MenuBarLogo } from '@svg/logo';
import { Login, Saved } from '@svg/regular';

const BarButton = ({ type = 'menu', selected = 'menu' }) => {
  const types = {
    menu: {
      component: <MenuBarLogo width={25} />,
      name: 'Explore',
      selected: selected === 'menu',
    },
    saved: {
      component: <Saved width={25} />,
      name: 'Saved',
      selected: selected === 'saved',
    },
    login: {
      component: <Login width={25} />,
      name: 'Log in',
      selected: selected === 'login',
    },
  };

  return (
    <div className="flex flex-col items-center mx-6">
      <div>{types['menu'].component}</div>
      <div>
        <p className="text-xs">{types['menu'].name}</p>
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
