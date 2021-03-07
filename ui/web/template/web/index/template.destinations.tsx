/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button, $BUTTON } from '@nextbnb/atoms/dist/bundle.esm';

export const DestinationsTemplate: React.FC<{
  items?: { [type: string]: { city: String; location: String } };
  navigate?: any;
}> = ({
  items = {
    artsCulture: [{ city: 'City', location: 'Location' }],
    outdoor: [{ city: 'City', location: 'Location' }],
    cabins: [{ city: 'City', location: 'Location' }],
    beach: [{ city: 'City', location: 'Location' }],
    popular: [{ city: 'City', location: 'Location' }],
  },
  navigate,
}) => {
  const [selected, setSelected] = useState('artsCulture');

  const categories = [
    { name: 'Desinations for arts & culture', value: 'artsCulture' },
    { name: 'Destinations for outdoor adventure', value: 'outdoor' },
    { name: 'Mountain cabins', value: 'cabins' },
    { name: 'Beach destinations', value: 'beach' },
    { name: 'Popular destinations', value: 'popular' },
  ];
  return (
    <div>
      <div css={{ overflowX: 'auto', display: 'flex' }}>
        {categories.map(({ name, value }, index) => {
          return (
            <div key={index}>
              <CategoryButton
                title={name}
                selected={selected === value}
                onClick={() => setSelected(value)}
              />
            </div>
          );
        })}
      </div>
      <div
        css={{
          bg: 'grey.300',
          width: '100%',
          height: 1,
        }}
      />
      <div css={{ display: 'flex', flexWrap: 'wrap' }}>
        {items[selected].map(({ city, location }, index) => {
          return (
            <div
              key={index}
              sx={{
                width: ['50%', '50%', '33.33%', '33.33%', '33.33%', '25%'],
              }}
            >
              <Button
                variant={$BUTTON.destination}
                city={city}
                location={location}
                onClick={() =>
                  navigate(`/${city.toLowerCase().split(' ').join('-')}/stays`)
                }
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
        css={{
          padding: '14px 12px',
          borderRadius: 8,
        }}
        // className={`${[animation["hover-background--white__1"]].join(" ")}`}
      >
        <div>
          <h3
            css={{
              whiteSpace: 'nowrap',
              fontSize: 14,
            }}
          >
            {title}
          </h3>
        </div>
      </motion.button>
      <div
        css={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <div
          css={{
            width: '80%',
            height: 2,
            backgroundColor: selected ? 'black' : 'transparent',
          }}
        />
      </div>
    </div>
  );
};
