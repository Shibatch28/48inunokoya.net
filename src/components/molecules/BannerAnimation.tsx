import React from "react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Box } from "@mui/material";
import TopBanner from "../atoms/TopBanner";

interface BannerAnimationProps {
  bannerImages: string[];
}

const BannerAnimation: React.FC<BannerAnimationProps> = ({ bannerImages }) => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((currentImage + 1) % bannerImages.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [currentImage]);

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <AnimatePresence>
        <motion.div
          key={currentImage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <TopBanner
            src={bannerImages[currentImage]}
            alt={`Banner ${currentImage + 1}`}
          />
        </motion.div>
      </AnimatePresence>
    </Box>
  );
};

export default BannerAnimation;
