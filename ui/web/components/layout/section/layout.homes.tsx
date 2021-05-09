export const HomesLayout: React.FC<{
  title?: string;
  children?: React.ReactNode;
  spread?: boolean;
}> = ({ title = 'Title here', children, spread = false }) => {
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
