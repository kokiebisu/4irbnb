import React, { useState } from 'react';
import { css } from 'styled-components';
import { Box, Button, Text, List } from 'atoms';

import { AnimateSharedLayout, AnimatePresence, motion } from 'framer-motion';
import { search } from 'atoms/stories/button.stories';

const Content = ({ title, description, styles }: any) => {
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
  const extend = {
    title: css`
      font-weight: 300;
      font-size: 15.5px;
      &:hover {
        color: ${category};
      }
    `,
  };
  const spring = {
    type: 'spring',
    stiffness: 500,
    damping: 30,
  };
  return (
    <List onClick={onClick}>
      {isSelected && (
        <motion.div
          // layoutId='outline'
          className='outline'
          animate={{ borderBottom: '2px solid black' }}
          transition={spring}>
          {category}
        </motion.div>
      )}
    </List>
  );
};

export default ({ styles }: any) => {
  const extend = {
    search: css`
      position: relative;
      z-index: 10;
    `,
  };
  return (
    <Box>
      {/* <Categories /> */}
      <Box styles={styles.inputs}>
        <Box styles={styles.options}>
          <Box styles={styles.section} className='first'>
            <Button
              styles={styles.select}
              className='first'
              onPress={() => console.log('pressed')}>
              <Content title='Location' description='Where are you going?' />
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
              <Content title='Check out' description='Add dates' />
            </Button>
          </Box>
          <Box styles={styles.section}>
            <Button
              styles={styles.select}
              className='last'
              onPress={() => console.log('pressed')}>
              <Content title='Guests' description='Add guests' />
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
