import { AppBar, IconButton, List, Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  boxShadow: 'none',
}));

export const NavLinks = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '1.5rem',
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

export const HamburgerMenu = styled(IconButton)(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.down('md')]: {
    display: 'block',
  },
}));

export const DrawerList = styled(List)(({ theme }) => ({
  width: '250px',
  backgroundColor: theme.palette.background.default,
  height: '100%',
}));

export const NavLink = styled(Typography)(({ theme }) => ({
  cursor: 'pointer',
  color: theme.palette.text.primary,
  '&:hover': {
    textDecoration: 'underline',
  },
}));

export const DrawerNavLink = styled(Typography)(({ theme }) => ({
  cursor: 'pointer',
  '&:hover': {
    color: theme.palette.primary.main,
  },
}));
