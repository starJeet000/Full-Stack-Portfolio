import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ffffff', // Pure white for primary accents
    },
    background: {
      default: '#000000', 
      paper: 'rgba(255, 255, 255, 0.02)', // Barely there base for cards
    },
    text: {
      primary: '#ffffff',
      secondary: '#9e9e9e', // Sleek silver/grey
    },
    divider: 'rgba(255, 255, 255, 0.05)',
  },
  typography: {
    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },
});