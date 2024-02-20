import { AppBar, Box, Button, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { DrawerContentProps } from "../interfaces/Interfaces";
import { Link } from "react-router-dom";


const NavBar: React.FC<DrawerContentProps> = ({ navTitle, navItems, onDrawerToggle }) => {
  return (
    <AppBar component='nav' position="static">
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open-drawer"
          onClick={onDrawerToggle}
          sx={{
            mr: 2,
            display: { sm: 'none' },
          }}
        >
          <MenuIcon />
        </IconButton>

        <Typography
          variant="h6"
          component='div'
          sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
        >
          {navTitle}
        </Typography>
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          {navItems.map((item, index) => (
            <Button
              key={index}
              sx={{ color: '#FFF' }}
              component={Link}
              to={item.path}
            >
              {item.label}
            </Button>
          ))}
        </Box>

      </Toolbar>
    </AppBar>
  );
}

export default NavBar;