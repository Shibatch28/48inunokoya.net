import { Toolbar, Button, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

interface MenuButtonProps {
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
}

const MenuButton: React.FC<MenuButtonProps> = ({ onClick }) => {
  return (
    <Toolbar>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ ml: 2 }}
      >
        <MenuIcon />
      </IconButton>
    </Toolbar>
  );
};

export default MenuButton;
