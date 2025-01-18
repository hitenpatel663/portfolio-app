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
  backgroundColor: theme.palette.bg.main,
  height: '100%',
}));

export const NavLink = styled(Typography)(({ theme }) => ({
  cursor: 'pointer',
  color: theme.palette.textColor.primary,
  '&:hover': {
    textDecoration: 'underline',
    color: theme.palette.secondary.main,
  },
}));

export const DrawerNavLink = styled(Typography)(({ theme }) => ({
  cursor: 'pointer',
  '&:hover': {
    color: theme.palette.secondary.main,
  },
}));
