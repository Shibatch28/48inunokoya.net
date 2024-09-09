import { Toolbar, Button, IconButton } from "@mui/material";
import { MenuIcon } from "@mui/icons-material";

const MenuButton: React.FC = () => {
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
