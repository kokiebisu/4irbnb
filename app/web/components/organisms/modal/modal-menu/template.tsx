import { Button } from '@button';

const Options: React.FC<{
  params: {
    kind: string;
    bold?: boolean;
  }[];
  options: {
    [option: string]: {
      name: string;
      handleClick: () => void;
    };
  };
}> = ({ params }) => {
  return (
    <>
      {params.map(({ kind, bold }, index) => (
        <div key={index}>
          <Button
            variant="option"
            name={kind}
            bold={bold}
            onClick={() => alert('selected')}
          />
        </div>
      ))}
    </>
  );
};

export interface MenuModalTemplateProps {
  authenticated?: boolean;
  options: {
    [option: string]: {
      name: string;
      handleClick: () => void;
    };
  };
}

/**
 * Renders the menu modal
 */
export const MenuModalTemplate: React.FC<MenuModalTemplateProps> = ({
  authenticated = false,
  options,
}) => {
  return (
    <div className="w-full py-4">
      <div className="w-full">
        {authenticated ? (
          <Options
            options={options}
            params={[
              // { kind: "messages", bold: true },
              // { kind: "notifications", bold: false },
              { kind: 'trips', bold: false },
              { kind: 'saved', bold: false },
            ]}
          />
        ) : (
          <Options
            options={options}
            params={[
              { kind: 'signup', bold: true },
              { kind: 'login', bold: false },
            ]}
          />
        )}
        <div style={{ height: 1 }} className="w-full bg-gray-400 my-2"></div>
        {authenticated ? (
          <Options
            options={options}
            params={[
              { kind: 'home', bold: false },
              // { kind: "experience", bold: false },
              // { kind: "refer", bold: false },
              // { kind: "account", bold: false },
            ]}
          />
        ) : (
          <Options
            options={options}
            params={[
              { kind: 'home', bold: false },
              // { kind: "experience", bold: false },
              // { kind: "help", bold: false },
            ]}
          />
        )}
        {authenticated && (
          <>
            <div className="w-full bg-gray-600 my-2"></div>
            <Options
              options={options}
              params={[
                // { kind: "help", bold: false },
                { kind: 'logout', bold: false },
              ]}
            />
          </>
        )}
      </div>
    </div>
  );
};
