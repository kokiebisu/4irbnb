export type HomesLayoutProps = {
  title?: string;
  children: React.ReactNode;
};

export const HomesLayout = ({
  title = "Title here",
  children,
}: HomesLayoutProps): JSX.Element => {
  return (
    <div className="py-4">
      <div>
        <div>
          <div className="mb-4">
            {title && <h1 className="text-3xl">{title}</h1>}
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};
