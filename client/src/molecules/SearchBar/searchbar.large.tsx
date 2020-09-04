import React, { useState } from 'react';
import { css } from 'styled-components';
import { Box, Button, Text, List } from 'atoms';

import { AnimateSharedLayout, AnimatePresence, motion } from 'framer-motion';
import { search } from 'atoms/stories/button.stories';

interface Props {
  styles?: any;
}

interface ContentProps {
  title: string;
  description: string;
  styles?: any;
}

const Content: React.FC<ContentProps> = ({ title, description, styles }) => {
  return (
    <>
      <Box styles={styles.title}>
        <Text>{title}</Text>
      </Box>
      <Box styles={styles.description}>
        <Text>{description}</Text>
      </Box>
    </>
  );
};

const Categories = () => {
  const categories = ['places', 'monthly', 'experiences', 'online'];
  const [selected, setSelected] = useState(categories[0]);
  return (
    <AnimateSharedLayout>
      <ul>
        {categories.map((category) => (
          <Category
            key={category}
            category={category}
            isSelected={selected === category}
            onClick={() => setSelected(category)}
          />
        ))}
      </ul>
    </AnimateSharedLayout>
  );
};

const Category = ({ category, onClick, isSelected }: any) => {
  return (
    <List>
      {isSelected && (
        <motion.div
          // layoutId='outline'
          className='outline'
          animate={{ borderBottom: '2px solid black' }}>
          {category}
        </motion.div>
      )}
    </List>
  );
};

export const SearchbarLarge: React.FC<Props> = ({ styles }) => {
  return (
    <Box>
      <Box styles={styles.inputs}>
        <Box styles={styles.options}>
          <Box styles={styles.section} className='first'>
            <Button
              styles={styles.select}
              className='first'
              onPress={() => console.log('pressed')}>
              <Content
                title='Location'
                description='Where are you going?'
                styles={styles}
              />
            </Button>
          </Box>
          <Box styles={styles.section} className='second'>
            <Button
              styles={styles.select}
              onPress={() => console.log('pressed')}>
              <Content
                title='Check in'
                description='Add dates'
                styles={styles}
              />
            </Button>
          </Box>
          <Box styles={styles.section} className='third'>
            <Button
              styles={styles.select}
              onPress={() => console.log('pressed')}>
              <Content
                title='Check out'
                description='Add dates'
                styles={styles}
              />
            </Button>
          </Box>
          <Box styles={styles.section}>
            <Button
              styles={styles.select}
              className='last'
              onPress={() => console.log('pressed')}>
              <Content
                title='Guests'
                description='Add guests'
                styles={styles}
              />
            </Button>
            <Button {...search.args} onPress={() => console.log('pressed')} />
          </Box>
          <Box styles={styles.seperator} className='first' />
          <Box styles={styles.seperator} className='second' />
          <Box styles={styles.seperator} className='third' />
        </Box>
      </Box>
    </Box>
  );
};
