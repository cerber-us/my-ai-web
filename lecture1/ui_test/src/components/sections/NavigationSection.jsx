import { useState } from 'react';
import {
  Box,
  Typography,
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
  useTheme
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

/**
 * NavigationSection 컴포넌트
 *
 * MUI AppBar와 Toolbar를 사용한 네비게이션 바
 * 모바일에서는 햄버거 메뉴, 데스크톱에서는 가로 메뉴 표시
 */
function NavigationSection() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const menuItems = ['홈', '소개', '서비스', '연락처'];

  const handleMenuClick = (menuName) => {
    alert(`${menuName} 메뉴가 클릭되었습니다!`);
    if (isMobile) {
      setMobileOpen(false);
    }
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // 모바일 Drawer 내용
  const drawer = (
    <Box sx={{ width: 250 }}>
      <List>
        {menuItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton onClick={() => handleMenuClick(item)}>
              <ListItemText
                primary={item}
                sx={{
                  textAlign: 'center',
                  '& .MuiTypography-root': {
                    fontSize: '1.1rem',
                    fontWeight: 'medium'
                  }
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ mb: 8 }}>
      <Box
        sx={{
          py: 3,
          my: 4,
          borderTop: '2px solid',
          borderBottom: '2px solid',
          borderColor: 'primary.main',
          mb: 4
        }}
      >
        <Typography
          variant='h4'
          component='h2'
          sx={{
            fontSize: { xs: '1.5rem', md: '2rem' },
            fontWeight: 'bold',
            textAlign: 'center',
            mb: 1
          }}
        >
          Navigation Section
        </Typography>
        <Typography
          variant='body2'
          sx={{
            textAlign: 'center',
            color: 'text.secondary',
            fontSize: { xs: '0.875rem', md: '1rem' }
          }}
        >
          데스크톱과 모바일 환경에서 반응형 네비게이션 메뉴를 체험해보세요
        </Typography>
      </Box>

      <Box sx={{ flexGrow: 1 }}>
        <AppBar position='static'>
          <Toolbar>
            <Typography
              variant='h6'
              component='div'
              sx={{
                flexGrow: 1,
                fontSize: { xs: '1rem', md: '1.25rem' }
              }}
            >
              Logo
            </Typography>

            {isMobile ? (
              <IconButton
                color='inherit'
                aria-label='open drawer'
                edge='end'
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
            ) : (
              <Box sx={{ display: 'flex', gap: 2 }}>
                {menuItems.map((item) => (
                  <Button
                    key={item}
                    color='inherit'
                    onClick={() => handleMenuClick(item)}
                    sx={{
                      fontSize: '1rem',
                      fontWeight: 'medium'
                    }}
                  >
                    {item}
                  </Button>
                ))}
              </Box>
            )}
          </Toolbar>
        </AppBar>

        <Drawer
          anchor='right'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true
          }}
        >
          {drawer}
        </Drawer>
      </Box>

      <Box
        sx={{
          mt: 3,
          p: 2,
          backgroundColor: 'rgba(0, 0, 0, 0.04)',
          borderRadius: 1,
          textAlign: 'center'
        }}
      >
        <Typography
          variant='body2'
          sx={{
            color: 'text.secondary',
            fontSize: { xs: '0.875rem', md: '1rem' }
          }}
        >
          {isMobile
            ? '모바일 화면: 햄버거 메뉴를 클릭하세요'
            : '데스크톱 화면: 메뉴 항목을 클릭하세요'}
        </Typography>
      </Box>
    </Box>
  );
}

export default NavigationSection;
