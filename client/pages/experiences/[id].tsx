import React, { useEffect, useState } from 'react';
import { Header } from 'components/organisms/header/header.component';
import { Section } from 'components/organisms/section/section.component';
import layout from '../../styles/layout.module.scss';
import details from '../../styles/details.module.scss';
import color from '../../styles/color.module.scss';
import space from '../../styles/space.module.scss';
import shape from '../../styles/shape.module.scss';
import staysDetail from '../../styles/staysDetail.module.scss';
import { Card } from '../../components/atoms/card/card.component';
import { Modal } from '../../components/organisms/modal/modal.component';
import { Footer } from '../../components/organisms/footer/footer.component';
import { useToggleState } from 'context/toggle';
import responsive from '../../styles/responsive.module.scss';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';

const id: () => string | JSX.Element = () => {
  const router = useRouter();
  const { id: experienceID }: { id?: string } = router.query;
  console.log('experienceID', experienceID);
  const experiences = {
    1715106: {
      title: 'Making & Eating Soup Dumplings vegan Ok',
      ratings: 5.0,
      numberOfReviews: 174,
      location: 'Shanghai',
      country: 'China',
      layoutType: 'experience',
      images: [
        'https://a0.muscache.com/im/pictures/lombard/MtTemplate-1715106-active_media/original/fb488b57-a64f-4bdc-86f2-a3324937f2e3.jpg?im_w=320',
        'https://a0.muscache.com/im/pictures/lombard/MtTemplate-1715106-active_media/original/7d50d37f-69c2-4410-943b-4937a6c36f2e.jpg?im_w=240',
        'https://a0.muscache.com/im/pictures/lombard/MtTemplate-1715106-active_media/original/e209bc04-77ab-4a90-bf6b-e8a3880801da.jpg?im_w=240',
        'https://a0.muscache.com/im/pictures/lombard/MtTemplate-1715106-active_media/original/0b0037b3-e4e2-4f66-9863-f549aae0e2e0.jpg?im_w=320',
        'https://a0.muscache.com/im/pictures/lombard/MtTemplate-1715106-active_media/original/501aae7d-d881-4d64-be3b-67c81ab14bc1.jpeg?im_w=1200',
      ],
      characteristics: ['time', 'devices', 'people', 'language'],
      hostImgUrl:
        'https://a0.muscache.com/im/pictures/user/aab93790-0a1a-4131-a5fc-e794b394fe18.jpg?im_w=240',
      host: 'Cici',
      mainDescription:
        'Join us in a class to learn how to make famous Shanghainese xiǎolóngbāo soup dumplings from start to finish. You’ll learn how to knead a dough, how to roll wrappers and how to pinch a dumpling by your hands! Of cause I’ll even reveal how the soup gets wrapped up inside the dumpling! You will also learn how to make a yummy dipping sauce that complements the dumplings. Finally, we will enjoy our handmade xiǎolóngbāo together. You will also get to take home an easy-to-follow recipe so you can recreate the cooking experience in your own kitchen. This experience will live broadcast on zoom, you will get all the information and details after your booking. This Experience is GOOD for Team Building & Family Party!Other things to notePlease prepare all the ingredients that I listed.This experience is a live broadcast, please ensure your networking device connect with network!',
    },
  };
  const toggleState = useToggleState();
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div>
        <div style={{ position: 'relative', zIndex: 9000 }}>
          <Header type='white' />
        </div>
        <AnimatePresence>
          {scrollPosition > 470 && (
            <motion.div
              exit={{ opacity: 0 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              style={{
                position: 'fixed',
                top: 0,
                zIndex: 99999,
                width: '100%',
              }}>
              <Header type='details' />
            </motion.div>
          )}
        </AnimatePresence>
        <div className={[].join(' ')}>
          {experiences[experienceID] ? (
            <Section
              layoutType='experience'
              extendsTo={[staysDetail['flex__panel']].join(' ')}
              type='panel'
              {...experiences[experienceID]}
            />
          ) : null}
        </div>
        <div
          className={[layout['container'], staysDetail['m__content']].join(
            ' '
          )}>
          <div className={[details['flex__details']].join(' ')}>
            <div className={[details['w__details--left']].join(' ')}>
              <div className={[staysDetail['b__characteristics']].join(' ')}>
                {experiences[experienceID] ? (
                  <Section
                    layoutType='experience'
                    type='characteristics'
                    {...experiences[experienceID]}
                  />
                ) : null}
              </div>
              <div
                className={[color['b-t--white__2'], space['p-v--32']].join(
                  ' '
                )}>
                <Section
                  layoutType='experience'
                  type='description'
                  {...experiences[experienceID]}
                />
              </div>
              <div
                className={[color['b-t--white__2'], space['p-v--32']].join(
                  ' '
                )}>
                <Section type='participate' />
              </div>
              <div
                className={[color['b-t--white__2'], space['p-v--32']].join(
                  ' '
                )}>
                <Section type='bring' />
              </div>
            </div>
            <div
              style={{ paddingTop: 20, paddingBottom: 56, width: '36%' }}
              className={[responsive['n_to_b--sm']].join(' ')}>
              <div
                style={{ top: 82 }}
                className={[
                  layout['flex'],
                  layout['justify-end'],
                  layout['sticky'],
                ].join(' ')}>
                <Modal
                  type='booking'
                  extendsTo={[shape['w--full']].join(' ')}
                />
              </div>
            </div>
          </div>
          <div className={[color['b-t--white__2'], space['p-v--32']].join(' ')}>
            <Section layoutType='experience' type='host' />
          </div>
          <div className={[color['b-t--white__2'], space['p-v--32']].join(' ')}>
            <Section type='experiences' />
          </div>
          <div className={[color['b-t--white__2'], space['p-v--32']].join(' ')}>
            <Section layoutType='experience' type='reviews' />
          </div>
          <div className={[color['b-t--white__2'], space['p-v--32']].join(' ')}>
            <Section layoutType='experience' type='available' />
          </div>
          <div className={[color['b-t--white__2'], space['p-v--32']].join(' ')}>
            <Section layoutType='experience' type='know' />
          </div>
        </div>
        <Footer />
        <div
          className={[
            staysDetail['display__availability'],
            shape['w--full'],
          ].join(' ')}
          style={{ position: 'fixed', bottom: 0, zIndex: 9999 }}>
          <Modal type='availability' />
        </div>
      </div>
      {toggleState.auth && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            zIndex: 9999,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
          }}>
          <Modal
            extendsTo={[
              layout['flex'],
              layout['justify-center'],
              layout['items-center'],
              shape['h--100v'],
            ].join(' ')}
            type='auth'
          />
        </div>
      )}
    </>
  );
};

export default id;
