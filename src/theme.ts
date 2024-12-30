// src/theme.ts
import { createTheme, ThemeOptions, Theme } from '@mui/material/styles';

declare module "@mui/material/styles" {
  interface Palette {
    tertiary: Palette["primary"];
  }
  interface PaletteOptions {
    tertiary?: PaletteOptions["primary"];
  }

  interface Palette {
    textColor: {
      primary: string
      secondary: string
      white: string
    };
  }
  interface PaletteOptions {
    textColor?: {
      primary: string
      secondary: string
      white: string
    };
  }

  interface Palette {
    socialMedia: {
      instagram: string,
      facebook: string,
      twitter: string,
      linkdin: string
    };
  }
  interface PaletteOptions {
    socialMedia?: {
      instagram: string
      facebook: string
      twitter: string
      linkdin: string
    }
  }
}

const theme: Theme = createTheme({
  palette: {
    primary: {
      main: '#f5f6fa',
    },
    secondary: {
      main: '#2fb3ae',
    },
    tertiary: {
      main: '#1c2e50',
    },
    background: {
      default: '#f5f6fa',
    },
    socialMedia: {
      instagram: '#b7347c',
      facebook: '#2658aa',
      twitter: '#4ac5e4',
      linkdin: '#2658aa'
    },
    textColor: {
      primary: '#49494b',
      secondary: '#989898',
      white: '#fff'
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h1: {
      fontSize: '2rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '1.5rem',
      fontWeight: 600,
    },
  },
});

export default theme;
