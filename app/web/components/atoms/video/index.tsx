import { AnimatePresence, motion } from 'framer-motion';
import React, { useRef, useState } from 'react';
import { Animation } from '@animation';
import { Button } from '@button';
import { useTimeout } from '@hooks/useTimeout';

export const Video: React.FC<{ videoUrl?: string }> = ({ videoUrl }) => {
  const videoRef = useRef<HTMLVideoElement>();
  const isLoading = useTimeout(1000);
  const [play, setPlay] = useState(true);

  return (
    <motion.div className="absolute h-full w-full cursor-pointer rounded-lg">
      <motion.div className="relative h-full w-full">
        <AnimatePresence>
          {!isLoading ? (
            <motion.div
              key="loading"
              exit={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              className="absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            >
              <Animation variant="loading" />
            </motion.div>
          ) : (
            <motion.video
              key="loaded"
              className="w-full h-auto absolute z-10 rounded-lg transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
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
          className="absolute z-40"
          style={{
            bottom: '2%',
            left: '2%',
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
              variant="video"
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
