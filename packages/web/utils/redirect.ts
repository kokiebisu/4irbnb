import { useRouter } from 'next/router';

export type HandleRedirectProps = () => void;
export type HandleRedirectPropsWithParam = (...param) => void;

export const handleRedirectToHomePage: HandleRedirectProps = () => {
  const router = useRouter();
  router.push('/');
};

export const handleRedirectToHostPage: HandleRedirectProps = () => {
  const router = useRouter();
  router.push('/host');
};

export const handleDestinationRedirect: HandleRedirectPropsWithParam = (
  city
) => {
  const router = useRouter();
  router.push(`/${city.toLowerCase().split(' ').join('-')}/stays`);
};
