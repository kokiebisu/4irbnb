import { Bullet, GeneralTypeVariants, Icon } from "@atoms";

export interface HelpSegmentTemplateProps {
  helps: {
    icon: GeneralTypeVariants;
    title: string;
    description: string;
  }[];
}

/**
 * Renders the help section
 */
export const HelpSegmentTemplate: React.FC<HelpSegmentTemplateProps> = ({
  helps,
}) => {
  return (
    <div className="sm:flex">
      <div className="w-full sm:w-1/2 mb-6">
        <h1 className="text-xl">We're here to help</h1>
      </div>
      <div className="w-full sm:w-1/2">
        <div>
          {helps.map(({ icon, title, description }, index) => {
            return (
              <div key={index} className="mb-5">
                <Bullet
                  variant="tertiary"
                  icon={
                    <Icon
                      variant="fill"
                      fillType={icon}
                      width={28}
                      height={28}
                      fill="black"
                    />
                  }
                  title={title}
                  description={description}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
