import { useRouter } from 'next/router';

const router = useRouter();

export type HandleRedirectProps = () => void;
export type HandleRedirectPropsWithParam = (...param) => void;

export const handleRedirectToHomePage: HandleRedirectProps = () => {
  router.push('/');
};

export const handleRedirectToHostPage: HandleRedirectProps = () => {
  router.push('/host');
};

export const handleDestinationRedirect: HandleRedirectPropsWithParam = (
  city
) => {
  router.push(`/${city.toLowerCase().split(' ').join('-')}/stays`);
};
