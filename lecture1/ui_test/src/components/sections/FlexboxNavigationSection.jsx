import { useState } from 'react';
import { Box, Typography, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

/**
 * FlexboxNavigationSection 컴포넌트
 *
 * Flexbox를 활용한 네비게이션 바 데모
 * 4가지 색상 테마로 다양한 스타일 제공
 */
function FlexboxNavigationSection() {
  const [selectedMenus, setSelectedMenus] = useState({});
  const [drawerOpen, setDrawerOpen] = useState({});
  const isMobile = useMediaQuery('(max-width:800px)');

  const themes = [
    {
      id: 'dark',
      title: 'Dark Theme',
      backgroundColor: '#2d3748',
      logoColor: 'white',
      logoHoverColor: '#63b3ed',
      menuColor: '#cbd5e0',
      menuHoverColor: 'white',
      menuItems: ['Home', 'About', 'Services', 'Contact', 'Blog']
    },
    {
      id: 'light',
      title: 'Light Theme',
      backgroundColor: '#f7fafc',
      logoColor: '#2d3748',
      logoHoverColor: '#4299e1',
      menuColor: '#718096',
      menuHoverColor: '#2d3748',
      menuItems: ['Dashboard', 'Profile', 'Settings', 'Logout', 'Help']
    },
    {
      id: 'blue',
      title: 'Ocean Blue',
      backgroundColor: '#1e3a8a',
      logoColor: '#93c5fd',
      logoHoverColor: 'white',
      menuColor: '#bfdbfe',
      menuHoverColor: 'white',
      menuItems: ['Products', 'Features', 'Pricing', 'Support', 'Docs']
    },
    {
      id: 'green',
      title: 'Forest Green',
      backgroundColor: '#065f46',
      logoColor: '#6ee7b7',
      logoHoverColor: 'white',
      menuColor: '#a7f3d0',
      menuHoverColor: 'white',
      menuItems: ['Gallery', 'Portfolio', 'Team', 'Careers', 'News']
    }
  ];

  const handleMenuClick = (themeId, menu) => {
    setSelectedMenus({ ...selectedMenus, [themeId]: menu });
    setDrawerOpen({ ...drawerOpen, [themeId]: false });
  };

  const toggleDrawer = (themeId, open) => {
    setDrawerOpen({ ...drawerOpen, [themeId]: open });
  };

  return (
    <Box sx={{ mb: 8 }}>
      {/* 섹션 제목 */}
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
          Flexbox Navigation Section
        </Typography>
        <Typography
          variant='body2'
          sx={{
            textAlign: 'center',
            color: 'text.secondary',
            fontSize: { xs: '0.875rem', md: '1rem' }
          }}
        >
          Flexbox를 활용한 모던한 네비게이션 바 - 메뉴를 클릭해보세요
        </Typography>
      </Box>

      {/* 4가지 테마 네비게이션 바 - 1x4 세로 배치 */}
      <Box sx={{ mb: 4 }}>
        {themes.map((theme, index) => (
          <Box key={theme.id} sx={{ mb: 3 }}>
            {/* 네비게이션 바 */}
            <Box
              sx={{
                width: '100%',
                height: '60px',
                backgroundColor: theme.backgroundColor,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                px: 3,
                borderRadius: 2,
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                mb: 2
              }}
            >
              {/* 로고 박스 (테마 제목) */}
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                <Typography
                  variant='h6'
                  sx={{
                    color: theme.logoColor,
                    fontWeight: 'bold',
                    fontSize: '20px',
                    cursor: 'pointer',
                    userSelect: 'none',
                    transition: 'color 0.3s ease',
                    '&:hover': {
                      color: theme.logoHoverColor
                    }
                  }}
                  onClick={() => handleMenuClick(theme.id, theme.title)}
                >
                  {theme.title}
                </Typography>
              </Box>

              {/* 메뉴들 박스 - 800px 이상에서만 표시 */}
              {!isMobile && (
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '15px'
                  }}
                >
                  {theme.menuItems.map((menu) => (
                    <Box
                      key={menu}
                      sx={{
                        fontSize: '16px',
                        color: theme.menuColor,
                        cursor: 'pointer',
                        userSelect: 'none',
                        transition: 'all 0.3s ease',
                        padding: '8px 12px',
                        borderRadius: 1,
                        '&:hover': {
                          color: theme.menuHoverColor,
                          backgroundColor: 'rgba(255, 255, 255, 0.1)'
                        }
                      }}
                      onClick={() => handleMenuClick(theme.id, menu)}
                    >
                      {menu}
                    </Box>
                  ))}
                </Box>
              )}

              {/* 햄버거 버튼 - 800px 이하에서만 표시 */}
              {isMobile && (
                <IconButton
                  onClick={() => toggleDrawer(theme.id, true)}
                  sx={{
                    color: theme.logoColor,
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.1)'
                    }
                  }}
                >
                  <MenuIcon />
                </IconButton>
              )}
            </Box>

            {/* Drawer - 모바일용 메뉴 */}
            <Drawer
              anchor='right'
              open={drawerOpen[theme.id] || false}
              onClose={() => toggleDrawer(theme.id, false)}
            >
              <Box
                sx={{
                  width: 280,
                  backgroundColor: theme.backgroundColor,
                  height: '100%',
                  p: 2
                }}
              >
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                  <Typography
                    variant='h6'
                    sx={{
                      color: theme.logoColor,
                      fontWeight: 'bold'
                    }}
                  >
                    {theme.title}
                  </Typography>
                  <IconButton
                    onClick={() => toggleDrawer(theme.id, false)}
                    sx={{ color: theme.logoColor }}
                  >
                    <CloseIcon />
                  </IconButton>
                </Box>
                <List>
                  {theme.menuItems.map((menu) => (
                    <ListItem key={menu} disablePadding>
                      <ListItemButton
                        onClick={() => handleMenuClick(theme.id, menu)}
                        sx={{
                          borderRadius: 1,
                          mb: 0.5,
                          '&:hover': {
                            backgroundColor: 'rgba(255, 255, 255, 0.1)'
                          }
                        }}
                      >
                        <ListItemText
                          primary={menu}
                          primaryTypographyProps={{
                            style: {
                              color: theme.menuColor,
                              fontWeight: selectedMenus[theme.id] === menu ? 'bold' : 'normal'
                            }
                          }}
                        />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Drawer>

            {/* 선택된 메뉴 표시 */}
            {selectedMenus[theme.id] && (
              <Box
                sx={{
                  p: 2,
                  backgroundColor: 'rgba(0, 0, 0, 0.04)',
                  borderRadius: 1,
                  textAlign: 'center',
                  border: '1px solid',
                  borderColor: 'divider'
                }}
              >
                <Typography variant='body2' sx={{ fontWeight: 'bold' }}>
                  선택: {selectedMenus[theme.id]}
                </Typography>
              </Box>
            )}
          </Box>
        ))}
      </Box>

      {/* Flexbox 설명 */}
      <Box
        sx={{
          p: 3,
          backgroundColor: 'rgba(0, 0, 0, 0.04)',
          borderRadius: 2,
          border: '1px solid',
          borderColor: 'divider'
        }}
      >
        <Typography variant='h6' sx={{ mb: 2, fontWeight: 'bold', color: 'secondary.main' }}>
          📐 Flexbox 핵심 속성
        </Typography>

        <Box sx={{ mb: 2 }}>
          <Typography variant='body2' sx={{ fontWeight: 'bold', mb: 1 }}>
            • display: flex
          </Typography>
          <Typography variant='body2' color='text.secondary' sx={{ ml: 2, mb: 2 }}>
            → 컨테이너를 flexbox로 설정하여 내부 요소들을 유연하게 배치
          </Typography>

          <Typography variant='body2' sx={{ fontWeight: 'bold', mb: 1 }}>
            • justify-content: space-between
          </Typography>
          <Typography variant='body2' color='text.secondary' sx={{ ml: 2, mb: 2 }}>
            → 로고와 메뉴를 양 끝으로 정렬 (왼쪽 끝 / 오른쪽 끝)
          </Typography>

          <Typography variant='body2' sx={{ fontWeight: 'bold', mb: 1 }}>
            • align-items: center
          </Typography>
          <Typography variant='body2' color='text.secondary' sx={{ ml: 2, mb: 2 }}>
            → 세로축 중앙 정렬로 모든 요소를 수직 가운데 배치
          </Typography>

          <Typography variant='body2' sx={{ fontWeight: 'bold', mb: 1 }}>
            • gap: 15px
          </Typography>
          <Typography variant='body2' color='text.secondary' sx={{ ml: 2 }}>
            → 메뉴 항목들 사이에 15px 간격을 자동으로 추가
          </Typography>
        </Box>

        <Box
          sx={{
            mt: 3,
            p: 2,
            backgroundColor: 'info.light',
            borderRadius: 1
          }}
        >
          <Typography variant='caption' sx={{ fontWeight: 'bold', color: 'info.dark', display: 'block', mb: 1 }}>
            💡 TIP: Flexbox는 반응형 레이아웃을 만들 때 가장 많이 사용되는 CSS 레이아웃 방식입니다!
          </Typography>
          <Typography variant='caption' sx={{ fontWeight: 'bold', color: 'info.dark' }}>
            📱 반응형: 브라우저 너비를 800px 이하로 줄이면 햄버거 메뉴로 전환됩니다!
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default FlexboxNavigationSection;
