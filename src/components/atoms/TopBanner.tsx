import Box from "@mui/material/Box";
import Image from "next/image";

interface TopBannerProps {
  src: string;
  alt: string;
}

const TopBanner: React.FC<TopBannerProps> = ({ src, alt }) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        position: "relative",
      }}
    >
      <img
        src={src}
        alt={alt}
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    </Box>
  );
};

export default TopBanner;
