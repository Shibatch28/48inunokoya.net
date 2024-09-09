import { Box, Typography } from "@mui/material";
import BannerAnimation from "../molecules/BannerAnimation";

interface TopBannerSectionProps {
  bannerImages: string[];
}

const TopBannerSection: React.FC<TopBannerSectionProps> = ({
  bannerImages,
}) => {
  return (
    <Box sx={{ width: "100%", height: "100", position: "relative" }}>
      {bannerImages.length > 0 ? (
        <BannerAnimation bannerImages={bannerImages} />
      ) : (
        <Typography variant="h5">Loading...</Typography>
      )}
    </Box>
  );
};

export default TopBannerSection;
