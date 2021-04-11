import shape from '@styles/shape.module.scss';
import space from '@styles/space.module.scss';

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
            extendsTo={[shape['w--full']].join(' ')}
            bold={bold}
            onClick={options[kind].handleClick}
            name={options[kind].name}
          />
        </div>
      ))}
    </>
  );
};

export interface MenuModalProps {
  authenticated?: boolean;
}

/**
 * Renders the menu modal
 */
export const MenuModal: React.FC<MenuModalProps> = ({
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
        <div
          style={{
            width: '100%',
            height: 1,
            backgroundColor: 'lightgray',
            margin: '6px 0',
          }}
        ></div>
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
