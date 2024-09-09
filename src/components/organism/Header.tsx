import React from "react";
import Box from "@mui/material/Box";
import Banner from "@/components/atoms/Banner";

const Header: React.FC = () => {
  return (
    <>
      <Box
        sx={{
          pt: 1,
          display: "flex",
          flexDirection: "row",
          backgroundColor: "white",
        }}
      >
        <Banner />
      </Box>
    </>
  );
};

export default Header;
