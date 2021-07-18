export type InputLayoutProps = {
  title?: string;
  children: JSX.Element;
};

/**
 * Renders the Input which appears in the /become-a-host
 * @param {string} title - Title of the group
 */
export const InputLayout = ({
  title = "Title here",
  children,
}: InputLayoutProps): JSX.Element => {
  return (
    <div>
      <div className="mb-2">
        <h3 className="text-md text-gray-500">{title}</h3>
      </div>
      <div>{children}</div>
    </div>
  );
};
