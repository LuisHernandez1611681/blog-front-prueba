import { Box, CssBaseline, Drawer } from "@mui/material";
import React from "react";
import NavBar from "./NavBar";
import DrawerContent from "./DrawerContent";
import { DrawerAppBarProps } from "../interfaces/Interfaces";
import { DRAWER_WIDTH, NAV_ITEMS, TITLE } from "../constants/constants";

const DrawerAppBar: React.FC<DrawerAppBarProps> = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState)
  }

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box>
      <CssBaseline />
      <NavBar
        navTitle={TITLE}
        navItems={NAV_ITEMS}
        onDrawerToggle={handleDrawerToggle}
      />
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { sx: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: DRAWER_WIDTH }
          }}
        >
          <DrawerContent
            navTitle={TITLE}
            navItems={NAV_ITEMS}
            onDrawerToggle={handleDrawerToggle}
          />
        </Drawer>
      </nav>
    </Box>
  )
}

export default DrawerAppBar;