import React, { useState } from 'react';
import { Toolbar, Typography, Drawer, ListItem, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import {
  StyledAppBar,
  NavLinks,
  HamburgerMenu,
  DrawerList,
  NavLink,
  DrawerNavLink,
} from './index.styles';
import useIsMobile from '../hooks/useIsMobile';

const ResponsiveNavbar: React.FC = () => {
  const isMobile = useIsMobile(); // Custom hook to determine if it's mobile view
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => {
    setDrawerOpen(open);
  };

  return (
    <StyledAppBar position="static">
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {isMobile && (
          <HamburgerMenu edge="start" color="inherit" onClick={() => toggleDrawer(true)}>
            <MenuIcon />
          </HamburgerMenu>
        )}

        <Typography variant="h6" component="div">
          MyApp
        </Typography>

        {!isMobile && (
          <NavLinks>
            <NavLink variant="body1">Home</NavLink>
            <NavLink variant="body1">About Us</NavLink>
            <NavLink variant="body1">Service</NavLink>
            <NavLink variant="body1">Work</NavLink>
            <NavLink variant="body1">Contact Us</NavLink>
          </NavLinks>
        )}
      </Toolbar>

      {isMobile && (
        <Drawer anchor="left" open={drawerOpen} onClose={() => toggleDrawer(false)}>
          <DrawerList>
            <IconButton onClick={() => toggleDrawer(false)}>
              <CloseIcon />
            </IconButton>
            <ListItem>
              <DrawerNavLink variant="body1">Home</DrawerNavLink>
            </ListItem>
            <ListItem>
              <DrawerNavLink variant="body1">About Us</DrawerNavLink>
            </ListItem>
            <ListItem>
              <DrawerNavLink variant="body1">Service</DrawerNavLink>
            </ListItem>
            <ListItem>
              <DrawerNavLink variant="body1">Work</DrawerNavLink>
            </ListItem>
            <ListItem>
              <DrawerNavLink variant="body1">Contact Us</DrawerNavLink>
            </ListItem>
          </DrawerList>
        </Drawer>
      )}
    </StyledAppBar>
  );
};

export default ResponsiveNavbar;
