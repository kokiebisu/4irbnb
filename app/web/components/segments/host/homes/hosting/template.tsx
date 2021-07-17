import { Layout } from "@layout";
import { Card } from "@card";

export interface HostingSegmentTemplateProps {}

/**
 * Renders the priority section
 * @param {string[]} priorities - The priorities
 */
export const HostingSegmentTemplate: React.FC<HostingSegmentTemplateProps> = () => {
  return (
    <Layout variant="homes" title="How hosting works">
      <div className="mt-3">
        <div
          style={{ scrollSnapType: "x mandatory" }}
          className="w-full flex overflow-x-auto"
        >
          {["requirements", "decide", "prices", "help"].map((type, index) => {
            return (
              <div
                key={index}
                className="mb-6 min-w-screen lg:w-full"
                style={{ scrollSnapAlign: "start" }}
              >
                <Card variant="hosting" type={type} />
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};
