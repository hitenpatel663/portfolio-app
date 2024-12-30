// src/theme.ts
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#6d6353',
    },
    secondary: {
      main: '#7c7364',
    },
    background: {
      default: '#f5f5f5',
    },
    text: {
      primary: '#ffffff',
    },
  },
});

export default theme;
