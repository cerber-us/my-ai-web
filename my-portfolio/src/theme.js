import { createTheme } from '@mui/material/styles';

// 컬러 팔레트 디자인 시스템.md에서 추출한 색상
const theme = createTheme({
  palette: {
    primary: {
      main: '#5CBFCC',
      light: '#6ED5E0',
      dark: '#4DA9B5',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#FFE352',
      light: '#FFF699',
      dark: '#E8D048',
      contrastText: '#2D2D2D',
    },
    accent: {
      green: '#00704A',
      orange: '#FFB84D',
      pink: '#FF7B8C',
      lime: '#E8F15B',
    },
    background: {
      default: '#F8F9FA',
      paper: '#FFFFFF',
      primary: '#5CBFCC',
    },
    text: {
      primary: '#2D2D2D',
      secondary: '#666666',
      disabled: '#999999',
      inverse: '#FFFFFF',
      highlight: '#FFE352',
    },
    border: {
      light: '#E0E0E0',
      medium: '#CCCCCC',
      accent: '#E8F15B',
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
    h1: {
      color: '#FFE352',
      fontWeight: 700,
    },
    h2: {
      color: '#FFE352',
      fontWeight: 600,
    },
    h3: {
      color: '#2D2D2D',
      fontWeight: 600,
    },
    h4: {
      color: '#2D2D2D',
      fontWeight: 500,
    },
    body1: {
      color: '#666666',
    },
    body2: {
      color: '#999999',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          padding: '10px 24px',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-2px)',
          },
        },
        containedPrimary: {
          backgroundColor: '#FFE352',
          color: '#2D2D2D',
          border: '2px solid #E8F15B',
          '&:hover': {
            backgroundColor: '#E8D048',
            boxShadow: '0 4px 12px rgba(45, 45, 45, 0.15)',
          },
        },
        containedSecondary: {
          backgroundColor: '#5CBFCC',
          color: '#FFFFFF',
          '&:hover': {
            backgroundColor: '#4DA9B5',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 8px 24px rgba(45, 45, 45, 0.15)',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 12px 24px rgba(45, 45, 45, 0.2)',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#FFFFFF',
          color: '#2D2D2D',
          boxShadow: '0 2px 8px rgba(45, 45, 45, 0.1)',
        },
      },
    },
  },
});

export default theme;
