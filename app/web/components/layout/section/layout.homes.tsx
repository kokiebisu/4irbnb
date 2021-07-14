export type HomesLayoutProps = {
  title?: string;
  children?: React.ReactNode;
  spread?: boolean;
};

export const HomesLayout = ({
  title = "Title here",
  children,
  spread = false,
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
