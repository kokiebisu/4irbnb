import { AnimatePresence, motion } from "framer-motion";
import React, { useRef, useState } from "react";
import { Animation } from "@animation";
import { Button } from "@button";
import { useTimeout } from "@hooks/useTimeout";

export const Video: React.FC<{ videoUrl?: string }> = ({ videoUrl }) => {
  const videoRef = useRef<HTMLVideoElement>();
  const isLoading = useTimeout(1000);
  const [play, setPlay] = useState(true);

  return (
    <motion.div
      style={{
        position: "absolute",
        height: "100%",
        width: "100%",
        cursor: "pointer",
      }}
    >
      <motion.div
        style={{
          position: "relative",
          height: "100%",
          width: "100%",
        }}
      >
        <AnimatePresence>
          {!isLoading ? (
            <motion.div
              key="loading"
              exit={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              style={{
                position: "absolute",
                zIndex: 20,
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <Animation variant="loading" />
            </motion.div>
          ) : (
            <motion.video
              key="loaded"
              style={{
                height: "100%",
                width: "100%",
                position: "absolute",
                zIndex: 10,
                borderRadius: 10,
              }}
              exit={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              ref={videoRef}
              muted
              playsInline
              autoPlay
              height="fit-content"
              width="100%"
              loop
            >
              <source src={videoUrl} type="video/mp4"></source>
            </motion.video>
          )}
        </AnimatePresence>
        <div
          style={{
            position: "absolute",
            bottom: 10,
            left: 10,
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
