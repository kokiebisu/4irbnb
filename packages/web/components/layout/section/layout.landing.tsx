import index from '@styles/index.module.scss';

export const LandingLayout: React.FC<{
  title?: string;
  subtitle?: string;
  children?: React.ReactNode;
  dark?: boolean;
  spread?: boolean;
}> = ({ title, subtitle, children, dark = false, spread = false }) => {
  return (
    <div
      className={`py-4 ${[index['p__category']].join(' ')} ${
        dark ? 'bg-black' : ''
      }`}
    >
      <div
        className={`${spread ? 'container--spread' : 'container'}  ${
          dark ? 'bg-black' : ''
        }`}
      >
        <div className="py-3">
          {title && (
            <h3
              className={`text-md sm:text-lg md:text-xl ${
                dark ? 'text-white' : ''
              }`}
            >
              {title}
            </h3>
          )}
          {subtitle && (
            <div style={{ width: 450 }}>
              <p className={`text-sm md:text-md ${dark ? 'text-white' : ''}`}>
                {subtitle}
              </p>
            </div>
          )}
        </div>
        {children}
      </div>
    </div>
  );
};
