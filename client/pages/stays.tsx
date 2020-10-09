import React from 'react';
import { Header } from '../components/organisms/header/header.component';
import space from '../styles/space.module.scss';
import layout from '../styles/layout.module.scss';

const StaysPage = () => {
  return (
    <>
      <div style={{ top: 0 }} className={[layout['sticky']].join(' ')}>
        <Header type='white' />
      </div>
      <div>
        <picture>
          <source
            srcSet='https://a0.muscache.com/im/pictures/a4568b94-29ee-49cc-ab9c-5fcc82ca878d.jpg?im_w=320 1x, https://a0.muscache.com/im/pictures/a4568b94-29ee-49cc-ab9c-5fcc82ca878d.jpg?im_w=720 2x'
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
            loading='lazy'
            decoding='async'
            src='https://a0.muscache.com/im/pictures/a4568b94-29ee-49cc-ab9c-5fcc82ca878d.jpg?im_w=720'
          />
        </picture>
        <div
          style={{
            backgroundImage:
              'url("https://a0.muscache.com/im/pictures/a4568b94-29ee-49cc-ab9c-5fcc82ca878d.jpg?im_w=720")',
            backgroundSize: 'cover',
          }}></div>
      </div>
    </>
  );
};

export default StaysPage;
