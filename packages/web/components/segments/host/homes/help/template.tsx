import { Bullet } from '@bullet';

export interface HelpTemplateProps {
  helps: string[];
}

/**
 * Renders the help section
 */
export const HelpTemplate: React.FC<HelpTemplateProps> = ({ helps }) => {
  return (
    <div className="sm:flex">
      <div className="w-full sm:w-1/2 mb-6">
        <h1 className="text-xl">We're here to help</h1>
      </div>
      <div className="w-full sm:w-1/2">
        <div>
          {helps.map((help, index) => {
            return (
              <div key={index} className="mb-5">
                <Bullet variant="help" help={help} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
