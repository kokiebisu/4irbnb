import Link from 'next/link';

export const Button = ({ onPress, children, to, ...props }) => {
  if (to) {
    return (
      <Link href='/' passHref>
        {children}
      </Link>
    );
  } else {
    return <button onClick={onPress}>{children}</button>;
  }
};
