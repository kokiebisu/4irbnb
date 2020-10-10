import React from 'react';
import { Header } from '../components/organisms/header/header.component';
import space from '../styles/space.module.scss';
import layout from '../styles/layout.module.scss';
import stays from '../styles/stays.module.scss';
import styles from '../styles/index.module.scss';
import { Section } from '../components/organisms/section/section.component';
import { stayTypes } from 'components/organisms/section/section.stories';

const StaysPage = () => {
  return (
    <>
      <div
        style={{ top: 0, zIndex: 10 }}
        className={[layout['sticky']].join(' ')}>
        <Header type='white' />
      </div>
      <div
        style={{
          zIndex: 1,
          position: 'relative',
          width: '100vw',
        }}>
        <div className={[layout['relative'], stays['p__background']].join(' ')}>
          <div className={[layout['all-sides']].join(' ')}>
            <div
              style={{
                display: 'inline-block',
                verticalAlign: 'bottom',
                height: '100%',
                width: '100%',
                minHeight: 1,
              }}>
              <picture>
                <source
                  srcSet='https://a0.muscache.com/im/pictures/a4568b94-29ee-49cc-ab9c-5fcc82ca878d.jpg?im_w=720 1x, https://a0.muscache.com/im/pictures/a4568b94-29ee-49cc-ab9c-5fcc82ca878d.jpg?im_w=720 2x'
                  media='(max-width: 743px)'></source>
                <source
                  srcSet='https://a0.muscache.com/im/pictures/a4568b94-29ee-49cc-ab9c-5fcc82ca878d.jpg?im_w=720 1x, https://a0.muscache.com/im/pictures/a4568b94-29ee-49cc-ab9c-5fcc82ca878d.jpg?im_w=1440 2x'
                  media='(min-width: 743.1px) and (max-width: 1127px)'></source>
                <source
                  srcSet='https://a0.muscache.com/im/pictures/a4568b94-29ee-49cc-ab9c-5fcc82ca878d.jpg?im_w=1200 1x, https://a0.muscache.com/im/pictures/a4568b94-29ee-49cc-ab9c-5fcc82ca878d.jpg?im_w=1920 2x'
                  media='(min-width: 1127.1px) and (max-width: 1439px)'></source>
                <source
                  srcSet='https://a0.muscache.com/im/pictures/a4568b94-29ee-49cc-ab9c-5fcc82ca878d.jpg?im_w=1680 1x, https://a0.muscache.com/im/pictures/a4568b94-29ee-49cc-ab9c-5fcc82ca878d.jpg?im_w=1920 2x'
                  media='(min-width: 1439.1px)'></source>
                <img
                  className={[layout['absolute']].join(' ')}
                  style={{
                    height: '100%',
                    width: '100%',
                    objectFit: 'cover',
                    verticalAlign: 'bottom',
                  }}
                  loading='lazy'
                  decoding='async'
                  src='https://a0.muscache.com/im/pictures/a4568b94-29ee-49cc-ab9c-5fcc82ca878d.jpg?im_w=720'
                />
              </picture>
              <div
                className={stays['support']}
                style={{
                  backgroundImage:
                    'url("https://a0.muscache.com/im/pictures/a4568b94-29ee-49cc-ab9c-5fcc82ca878d.jpg?im_w=720")',
                  backgroundSize: 'cover',
                  height: '100%',
                  width: '100%',
                  verticalAlign: 'bottom',
                  backgroundPositionX: '50%',
                  backgroundPositionY: '50%',
                  backgroundOrigin: 'border-box',
                }}
              />
            </div>
          </div>
        </div>
        <div className={[space['p-v--38']].join(' ')}>
          <div className={[styles['container'], layout['relative']].join(' ')}>
            <Section type='stay' {...stayTypes.args} />
          </div>
        </div>
      </div>
    </>
  );
};

export default StaysPage;
