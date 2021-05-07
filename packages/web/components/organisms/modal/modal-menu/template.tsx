import { Button } from '@button';
import { getOptionContents } from '@button/button-option/content.option';

const Options: React.FC<{
  params?: {
    kind: string;
    bold: boolean;
  }[];
}> = ({ params }) => {
  const options = getOptionContents();
  return (
    <>
      {params.map(({ kind, bold }, index) => (
        <div key={index}>
          <Button
            variant="option"
            bold={bold}
            onClick={options[kind].handleClick}
            name={options[kind].name}
          />
        </div>
      ))}
    </>
  );
};

export interface MenuModalTemplateProps {
  authenticated?: boolean;
}

/**
 * Renders the menu modal
 */
export const MenuModalTemplate: React.FC<MenuModalTemplateProps> = ({
  authenticated = false,
}) => {
  return (
    <div className="w-full py-4">
      <div className="w-full">
        {authenticated ? (
          <Options
            params={[
              // { kind: "messages", bold: true },
              // { kind: "notifications", bold: false },
              { kind: 'trips', bold: false },
              { kind: 'saved', bold: false },
            ]}
          />
        ) : (
          <Options
            params={[
              { kind: 'signup', bold: true },
              { kind: 'login', bold: false },
            ]}
          />
        )}
        <div style={{ height: 1 }} className="w-full bg-gray-400 my-2"></div>
        {authenticated ? (
          <Options
            params={[
              { kind: 'home', bold: false },
              // { kind: "experience", bold: false },
              // { kind: "refer", bold: false },
              // { kind: "account", bold: false },
            ]}
          />
        ) : (
          <Options
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
