import { motion } from 'framer-motion';

import layout from '@styles/layout.module.scss';
import animation from '@styles/animation.module.scss';
import color from '@styles/color.module.scss';
import font from '@styles/font.module.scss';
import space from '@styles/space.module.scss';
import shape from '@styles/shape.module.scss';
import template from './index.module.scss';

import { Button, $Button } from '@button';

export interface DestinationsTemplateProps {
  items?: { [destinationType: string]: { city: string; location: string }[] };
  categories?: { name: string; value: string }[];
  destinationType?: string;
  handleDestinationTypeChange?: (destinationType: string) => void;
  handleDestinationRedirect?: (city: string) => void;
}

export const DestinationsTemplate: React.FC<DestinationsTemplateProps> = ({
  items,
  categories,
  handleDestinationTypeChange,
  handleDestinationRedirect,
  destinationType,
}) => {
  return (
    <div>
      <div style={{ overflowX: 'auto' }} className={[layout['flex']].join(' ')}>
        {categories.map(({ name, value }, index) => {
          return (
            <div key={index}>
              <CategoryButton
                title={name}
                selected={destinationType === value}
                onClick={() => handleDestinationTypeChange(value)}
              />
            </div>
          );
        })}
      </div>
      <div
        className={[color['bg--white__2'], shape['w--full']].join(' ')}
        style={{ height: 1 }}
      />
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {items[destinationType].map(({ city, location }, index) => {
          return (
            <div key={index} className={[template['destination__w']].join(' ')}>
              <Button
                variant={$Button.DESTINATION}
                city={city}
                location={location}
                onClick={() => handleDestinationRedirect(city)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

const CategoryButton: React.FC<{
  title: String;
  selected?: Boolean;
  onClick: () => void;
}> = ({ title, selected, onClick }) => {
  return (
    <div>
      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={onClick}
        className={`${[
          space['p-v--14'],
          space['p-h--12'],
          shape['br--8'],
          animation['hover-background--white__1'],
        ].join(' ')}`}
      >
        <div>
          <h3 className={[font['no-wrap'], font['size--14']].join(' ')}>
            {title}
          </h3>
        </div>
      </motion.button>
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            width: '80%',
            height: 2,
            backgroundColor: selected ? 'black' : 'transparent',
          }}
        />
      </div>
    </div>
  );
};
