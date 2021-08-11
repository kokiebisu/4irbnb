export type LandingLayoutProps = {
  title?: string;
  subtitle?: string;
  children?: React.ReactNode;
  dark?: boolean;
  spread?: boolean;
  carousel?: boolean;
};

export const LandingLayout = ({
  title,
  subtitle,
  children,
  dark = false,
  carousel,
}: LandingLayoutProps): JSX.Element => {
  return (
    <div className={`py-4 ${dark ? "bg-black" : ""}`}>
      <div
        className={`${dark ? "bg-black" : ""} ${
          carousel ? "" : "px-8"
        } md:px-10 lg:px-20 max-w-11xl`}
      >
        <div className={`py-6`}>
          {title && (
            <h3
              className={`text-xl md:text-3xl font-bold ${
                dark ? "text-white" : ""
              }`}
            >
              {title}
            </h3>
          )}
          {subtitle && (
            <div>
              <p className={`text-lg md:text-2xl ${dark ? "text-white" : ""}`}>
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
