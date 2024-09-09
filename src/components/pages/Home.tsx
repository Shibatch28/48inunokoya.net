"use client";
import { Box } from "@mui/material";
import React from "react";
import TopBannerSection from "../organism/TopBannerSection";

interface HomePageProps {
  bannerImages: string[];
}

const HomePage: React.FC<HomePageProps> = ({ bannerImages }) => {
  return (
    <Box sx={{ padding: 0, margin: 0 }}>
      <TopBannerSection bannerImages={bannerImages} />
    </Box>
  );
};

export default HomePage;
