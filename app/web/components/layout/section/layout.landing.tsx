export type LandingLayoutProps = {
  title?: string;
  subtitle?: string;
  children?: React.ReactNode;
  dark?: boolean;
  spread?: boolean;
};

export const LandingLayout = ({
  title,
  subtitle,
  children,
  dark = false,
  spread = false,
}: LandingLayoutProps): JSX.Element => {
  return (
    <div className={`py-4 ${dark ? "bg-black" : ""}`}>
      <div className={`px-8 md:px-20 max-w-11xl ${dark ? "bg-black" : ""}`}>
        <div className="py-6">
          {title && (
            <h3
              className={`text-md sm:text-lg md:text-3xl font-bold ${
                dark ? "text-white" : ""
              }`}
            >
              {title}
            </h3>
          )}
          {subtitle && (
            <div style={{ width: 450 }}>
              <p className={`text-sm md:text-md ${dark ? "text-white" : ""}`}>
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
