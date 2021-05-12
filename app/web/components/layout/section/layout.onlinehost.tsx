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
              className={`text-lg md:text-xl lg:text-2xl ${
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
              className={`text-sm sm:text-md text-center leading-8 ${
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
