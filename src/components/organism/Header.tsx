"use client";

import React, { useState } from "react";
import Box from "@mui/material/Box";
import Banner from "@/components/atoms/Banner";
import MenuButton from "@/components/atoms/MenuButton";
import MenuList from "@/components/molecules/MenuList";

const Header: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuOptions = [
    { text: "option 1", onClick: () => alert("Option 1 selected") },
  ];

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
        <MenuButton onClick={handleMenuOpen} />
        <MenuList
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          options={menuOptions}
        />
      </Box>
    </>
  );
};

export default Header;
