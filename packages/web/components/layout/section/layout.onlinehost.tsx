import layout from '@styles/layout.module.scss';

export const OnlineHostLayout: React.FC<{
  title?: string;
  subtitle?: string;
  children?: React.ReactNode;
  dark?: boolean;
  spread?: boolean;
}> = ({ title, subtitle, children, dark = false, spread = false }) => {
  return (
    <div className="sm:flex flex-col items-center">
      <div className="sm:flex flex-col items-center py-4">
        {title && (
          <div>
            <h3
              className={`${[layout['font__onlinehost--title']].join(' ')} ${
                dark ? 'text-white' : ''
              }`}
            >
              {title}
            </h3>
          </div>
        )}
        {subtitle && (
          <div className="mt-4">
            <p
              className={`${[layout['font__onlinehost--subtitle']].join(' ')} ${
                dark ? 'text-white' : ''
              }`}
            >
              {subtitle}
            </p>
          </div>
        )}
      </div>
      {children}
    </div>
  );
};
