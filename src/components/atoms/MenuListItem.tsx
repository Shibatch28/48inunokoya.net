import React from "react";
import { MenuItem } from "@mui/material";

interface MenuListItemProps {
  text: string;
  onClick: () => void;
}

const MenuListItem: React.FC<MenuListItemProps> = ({ text, onClick }) => {
  return <MenuItem onClick={onClick}>{text}</MenuItem>
};

export default MenuListItem;
