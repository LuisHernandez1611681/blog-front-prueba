import { Box, Divider, List, ListItem, ListItemButton, ListItemText, Typography } from "@mui/material";
import { DrawerContentProps } from "../interfaces/Interfaces";
import { Link } from "react-router-dom";
import { useNetworkStatus } from "../context/NetworkStatusContext";


const DrawerContent: React.FC<DrawerContentProps> = ({ navTitle, navItems, onDrawerToggle }) => {
  const status = useNetworkStatus();

  return (
    <Box
      onClick={onDrawerToggle}
      sx={{ textAlign: 'center' }}
    >
      <Typography variant='h6' sx={{ my: 2 }}>
        {navTitle}
      </Typography>
      <Divider />
      <List>
        {
          navItems.map((item, index) => (
            <ListItem 
              key={index} 
              disablePadding 
              className="list_item"
            >
              <ListItemButton 
                sx={{ textAlign: 'center' }}
                component={Link} 
                to={item.path} 
                disabled={status == 'Offline' && item.path == '/new-article' ? true : false}>
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          ))
        }
      </List>
    </Box>
  )
}

export default DrawerContent;