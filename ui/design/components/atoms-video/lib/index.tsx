/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';

import { AnimatePresence, motion } from 'framer-motion';
import React, { useRef, useState } from 'react';
import { Animation } from '@nextbnb/animation';
import { Button, $BUTTON } from '@nextbnb/atoms-button';

export const Video: React.FC<{ videoUrl?: string; isLoading?: boolean }> = ({
  videoUrl,
  isLoading,
}) => {
  const videoRef = useRef<any>();
  const [play, setPlay] = useState(true);

  return (
    <motion.div
      style={{
        position: 'absolute',
        height: '100%',
        width: '100%',
        cursor: 'pointer',
        borderRadius: 10,
      }}
    >
      <motion.div
        css={{
          position: 'relative',
          height: '100%',
          width: '100%',
        }}
      >
        <AnimatePresence>
          {!isLoading ? (
            <motion.div
              key="loading"
              exit={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              css={{
                position: 'absolute',
                zIndex: 20,
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
              }}
            >
              <Animation variant="loading" />
            </motion.div>
          ) : (
            <motion.video
              key="loaded"
              css={{
                width: '100%',
                height: 'auto',
                position: 'absolute',
                zIndex: 10,
                borderRadius: 10,
                transform: 'translateX(-50%) translateY(-50%)',
                top: '50%',
                left: '50%',
              }}
              exit={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              ref={videoRef}
              muted
              playsInline
              autoPlay
              loop
            >
              <source src={videoUrl} type="video/mp4"></source>
            </motion.video>
          )}
        </AnimatePresence>
        <div
          css={{
            position: 'absolute',
            bottom: '2%',
            left: '2%',
            zIndex: 40,
          }}
        >
          <motion.div
            key="play"
            transition={{ duration: 0.3 }}
            exit={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
          >
            <Button
              variant={$BUTTON.VIDEO}
              play={!play}
              onClick={() => {
                if (!play) {
                  videoRef.current.play();
                } else {
                  videoRef.current.pause();
                }
                setPlay(!play);
              }}
            />
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};
