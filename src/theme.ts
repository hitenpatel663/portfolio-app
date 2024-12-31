import { createTheme, ThemeOptions, Theme } from '@mui/material/styles';

declare module "@mui/material/styles" {
  interface Palette {
    tertiary: Palette["primary"];
    textColor: {
      primary: string
      secondary: string
      white: string
    };
    socialMedia: {
      instagram: string,
      facebook: string,
      twitter: string,
      linkdin: string
    };
    serviceCard: {
      red: string
      yellow: string
      pink: string
      green: string
      blue: string
      purple: string
      darkRed: string
      darkYellow: string
      darkPink: string
      darkGreen: string
      darkBlue: string
      darkPurple: string
    }
  }
  interface PaletteOptions {
    tertiary?: PaletteOptions["primary"];
    textColor?: {
      primary: string
      secondary: string
      white: string
    };
    socialMedia?: {
      instagram: string
      facebook: string
      twitter: string
      linkdin: string
    };
    serviceCard?: {
      red: string
      yellow: string
      pink: string
      green: string
      blue: string
      purple: string
      darkRed: string
      darkYellow: string
      darkPink: string
      darkGreen: string
      darkBlue: string
      darkPurple: string
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
    serviceCard: {
      red: '#f6d5d3',
      yellow: '#fff4d7',
      pink: '#f2d7e5',
      green: '#daefef',
      blue: '#d4ddee',
      purple: '#e6dff6',
      darkRed: '#c92728',
      darkYellow: '#ffcd00',
      darkPink: '#b6317a',
      darkGreen: '#8ed2ce',
      darkBlue: '#2658aa',
      darkPurple: '#8060ce'
    }
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
