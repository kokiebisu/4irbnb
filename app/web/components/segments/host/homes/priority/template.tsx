import { Layout } from "@layout";
import { Bullet, Icon } from "@atoms";

export interface PrioritySegmentTemplateProps {
  priorities: {
    icon: any;
    title: string;
    description: string;
    link: string;
    onClick: () => void;
  }[];
}

/**
 * Renders the priority section
 * @param {string[]} priorities - The priorities
 */
export const PrioritySegmentTemplate: React.FC<PrioritySegmentTemplateProps> = ({
  priorities,
}) => {
  return (
    <Layout variant="homes" title="Safety is our priority">
      <div className="mt-4">
        <div className="sm:grid grid-cols-3 gap-x-3">
          {priorities.map(({ icon, title, link, onClick }, index) => {
            return (
              <div key={index} className="mb-6">
                <Bullet
                  variant="quaternary"
                  icon={
                    <Icon
                      variant="fill"
                      fillType={icon}
                      width={40}
                      height={40}
                      fill="black"
                    />
                  }
                  title={title}
                  link={link}
                  onClick={onClick}
                />
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};
