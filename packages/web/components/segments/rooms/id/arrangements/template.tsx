import { Card, $Card } from '@card';

import space from '@styles/space.module.scss';
import color from '@styles/color.module.scss';
import font from '@styles/font.module.scss';
import layout from '@styles/layout.module.scss';

export interface ArrangementsTemplateProps {
  title?: string;
  arrangements?: { type: string; beds: { type: string; count: number }[] }[];
}

/**
 * Renders the arrangement section
 * @param {string} title - Title of the section
 * @param {Object[]} arrangements - List of amenities
 */
export const ArrangementsTemplate: React.FC<ArrangementsTemplateProps> = ({
  title,
  arrangements,
}) => {
  return (
    <div>
      <div>
        <h3 className="font-medium mb-5 text-gray-700 text-2xl">{title}</h3>
      </div>
      <div style={{ marginLeft: -8, marginRight: -8 }}>
        <div className="flex mx-2">
          {arrangements.map((arrangement, index) => {
            return (
              <div key={index} className="mr-3">
                <Card variant={$Card.ARRANGEMENTS} card={arrangement} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};