/**
 * Navigation 컴포넌트
 *
 * Props: 없음
 *
 * Example usage:
 * <Navigation />
 */

import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

function Navigation() {
  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: 'background.paper',
        color: 'text.primary',
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography
          variant="h6"
          component={RouterLink}
          to="/"
          sx={{
            textDecoration: 'none',
            color: 'primary.main',
            fontWeight: 'bold',
          }}
        >
          My Portfolio
        </Typography>

        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button
            component={RouterLink}
            to="/"
            sx={{
              color: 'text.primary',
              '&:hover': {
                color: 'primary.main',
              },
            }}
          >
            Home
          </Button>
          <Button
            component={RouterLink}
            to="/about"
            sx={{
              color: 'text.primary',
              '&:hover': {
                color: 'primary.main',
              },
            }}
          >
            About Me
          </Button>
          <Button
            component={RouterLink}
            to="/projects"
            sx={{
              color: 'text.primary',
              '&:hover': {
                color: 'primary.main',
              },
            }}
          >
            Projects
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navigation;
