import React from "react";
import { Menu } from "@mui/material";
import MenuListItem from "@/components/atoms/MenuListItem";

interface MenuListProps {
  anchorEl: HTMLElement | null;
  open: boolean;
  onClose: () => void;
  options: { text: string, onClick: () => void }[];
}

const MenuList: React.FC<MenuListProps> = ({ anchorEl, open, onClose, options }) => {
  return (
    <Menu anchorEl={anchorEl} open={open} onClose={onClose}>
      {options.map((option, index) => (
        <MenuListItem key={index} text={option.text} onClick={option.onClick} />
      ))}
    </Menu>
  );
};

export default MenuList;
