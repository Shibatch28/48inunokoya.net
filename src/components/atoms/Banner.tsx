import React from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import bannerImage from "@/assets/images/Banner.png";

const Banner: React.FC = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Link href="/" color="inherit">
        <Box
          component="img"
          sx={{
            maxHeight: 54,
            ml: 2,
          }}
          alt="Logo"
          src={bannerImage.src}
        />
      </Link>
    </Box>
  );
};

export default Banner;
