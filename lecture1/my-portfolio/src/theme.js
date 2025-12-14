import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#00BCD4',
      light: '#00E5FF',
      dark: '#0097A7',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#FFD700',
      light: '#FFEB3B',
      dark: '#FFA000',
      contrastText: '#000000',
    },
    accent: {
      pink: '#FF69B4',
      pinkDark: '#FF1493',
      purple: '#9370DB',
      purpleDark: '#BA55D3',
      orange: '#FFA500',
      mint: '#40E0D0',
    },
    background: {
      default: '#FFF9E6',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#000000',
      secondary: '#333333',
      disabled: '#666666',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '3rem',
      fontWeight: 'bold',
      color: '#000000',
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      color: '#000000',
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 'bold',
      color: '#000000',
    },
    h4: {
      fontSize: '1.75rem',
      fontWeight: 600,
      color: '#000000',
    },
    h5: {
      fontSize: '1.5rem',
      fontWeight: 600,
      color: '#000000',
    },
    h6: {
      fontSize: '1.25rem',
      fontWeight: 600,
      color: '#000000',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
      color: '#333333',
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.6,
      color: '#666666',
    },
  },
  spacing: 8,
  shape: {
    borderRadius: 12,
  },
  shadows: [
    'none',
    '0 2px 8px rgba(0, 0, 0, 0.1)',
    '0 4px 16px rgba(0, 0, 0, 0.1)',
    '0 8px 32px rgba(0, 0, 0, 0.1)',
    '0 12px 48px rgba(0, 0, 0, 0.15)',
    '0 16px 64px rgba(0, 0, 0, 0.2)',
    '0 2px 8px rgba(0, 188, 212, 0.2)',
    '0 4px 16px rgba(0, 188, 212, 0.3)',
    '0 8px 32px rgba(0, 188, 212, 0.4)',
    '0 2px 8px rgba(255, 215, 0, 0.2)',
    '0 4px 16px rgba(255, 215, 0, 0.3)',
    '0 2px 8px rgba(255, 105, 180, 0.2)',
    '0 4px 16px rgba(255, 105, 180, 0.3)',
    '0 2px 8px rgba(147, 112, 219, 0.2)',
    '0 4px 16px rgba(147, 112, 219, 0.3)',
    '0 2px 4px rgba(0, 0, 0, 0.05)',
    '0 4px 8px rgba(0, 0, 0, 0.1)',
    '0 8px 16px rgba(0, 0, 0, 0.1)',
    '0 12px 24px rgba(0, 0, 0, 0.15)',
    '0 16px 32px rgba(0, 0, 0, 0.2)',
    '0 20px 40px rgba(0, 0, 0, 0.25)',
    '0 24px 48px rgba(0, 0, 0, 0.3)',
    '0 28px 56px rgba(0, 0, 0, 0.35)',
    '0 32px 64px rgba(0, 0, 0, 0.4)',
    '0 36px 72px rgba(0, 0, 0, 0.45)',
  ],
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 8,
          padding: '10px 24px',
          fontSize: '1rem',
          fontWeight: 500,
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-2px)',
          },
        },
        contained: {
          boxShadow: '0 4px 12px rgba(0, 188, 212, 0.3)',
          '&:hover': {
            boxShadow: '0 8px 24px rgba(0, 188, 212, 0.4)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          '&:hover': {
            transform: 'translateY(-8px)',
            boxShadow: '0 12px 32px rgba(0, 188, 212, 0.2)',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
        },
      },
    },
  },
});

export default theme;
