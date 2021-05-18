export type AuthTypeVariants = 'email' | 'facebook' | 'google' | 'apple';

type Props = {
  name: string;
  icon: {
    variant: 'general' | 'logo';
    generalType?: 'email';
    logoType?: 'facebook' | 'google' | 'apple';
  };
};

export const useAuthButtonTemplate = ({
  authType,
}: {
  authType: AuthTypeVariants;
}) => {
  const authTypes = {
    email: {
      name: 'Email',
      icon: {
        variant: 'general' as const,
        generalType: 'email' as const,
        width: 17,
      },
    },
    facebook: {
      name: 'Facebook',
      icon: {
        variant: 'logo' as const,
        logoType: 'facebook' as const,
        width: 19,
      },
    },
    google: {
      name: 'Google',
      icon: {
        variant: 'logo' as const,
        logoType: 'google' as const,
        width: 17,
      },
    },
    apple: {
      name: 'Apple',
      icon: {
        variant: 'logo' as const,
        logoType: 'apple' as const,
        width: 17,
      },
    },
  };

  return { ...authTypes[authType] } as Props;
};
