import { useState } from 'react';
import { Box, Typography, Button, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider, Card, CardContent } from '@mui/material';
import Grid from '@mui/material/Grid';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import InfoIcon from '@mui/icons-material/Info';
import MailIcon from '@mui/icons-material/Mail';
import InboxIcon from '@mui/icons-material/Inbox';
import StarIcon from '@mui/icons-material/Star';
import DraftsIcon from '@mui/icons-material/Drafts';

/**
 * SidebarSection 컴포넌트
 *
 * MUI Drawer 컴포넌트를 사용한 다양한 사이드바
 * 토글 버튼으로 열기/닫기 및 메뉴 클릭 기능 제공
 */
function SidebarSection() {
  const [leftDrawerOpen, setLeftDrawerOpen] = useState(false);
  const [rightDrawerOpen, setRightDrawerOpen] = useState(false);
  const [bottomDrawerOpen, setBottomDrawerOpen] = useState(false);

  const [selectedLeft, setSelectedLeft] = useState('');
  const [selectedRight, setSelectedRight] = useState('');
  const [selectedBottom, setSelectedBottom] = useState('');

  const drawers = [
    {
      id: 'left',
      title: '왼쪽 사이드바',
      icon: '◀️',
      color: 'primary',
      description: '왼쪽에서 열리는 사이드바',
      anchor: 'left',
      open: leftDrawerOpen,
      setOpen: setLeftDrawerOpen,
      selected: selectedLeft,
      setSelected: setSelectedLeft,
      items: [
        { value: 'home', label: '홈', icon: <HomeIcon /> },
        { value: 'profile', label: '프로필', icon: <PersonIcon /> },
        { value: 'settings', label: '설정', icon: <SettingsIcon /> },
        { value: 'info', label: '정보', icon: <InfoIcon /> }
      ]
    },
    {
      id: 'right',
      title: '오른쪽 사이드바',
      icon: '▶️',
      color: 'secondary',
      description: '오른쪽에서 열리는 사이드바',
      anchor: 'right',
      open: rightDrawerOpen,
      setOpen: setRightDrawerOpen,
      selected: selectedRight,
      setSelected: setSelectedRight,
      items: [
        { value: 'inbox', label: '받은 편지함', icon: <InboxIcon /> },
        { value: 'starred', label: '중요', icon: <StarIcon /> },
        { value: 'drafts', label: '임시 보관함', icon: <DraftsIcon /> },
        { value: 'mail', label: '메일', icon: <MailIcon /> }
      ]
    },
    {
      id: 'bottom',
      title: '하단 사이드바',
      icon: '🔽',
      color: 'success',
      description: '하단에서 열리는 사이드바',
      anchor: 'bottom',
      open: bottomDrawerOpen,
      setOpen: setBottomDrawerOpen,
      selected: selectedBottom,
      setSelected: setSelectedBottom,
      items: [
        { value: 'home', label: '홈', icon: <HomeIcon /> },
        { value: 'profile', label: '프로필', icon: <PersonIcon /> },
        { value: 'settings', label: '설정', icon: <SettingsIcon /> },
        { value: 'info', label: '정보', icon: <InfoIcon /> }
      ]
    }
  ];

  const toggleDrawer = (drawer, open) => {
    drawer.setOpen(open);
  };

  const handleItemClick = (drawer, value, label) => {
    drawer.setSelected(label);
    alert(`선택된 메뉴: ${label}`);
    drawer.setOpen(false);
  };

  const renderDrawerContent = (drawer) => (
    <Box
      sx={{
        width: drawer.anchor === 'bottom' ? 'auto' : 280,
        height: drawer.anchor === 'bottom' ? 'auto' : '100%',
        p: 2
      }}
      role='presentation'
    >
      <Typography variant='h6' sx={{ mb: 2, fontWeight: 'bold', color: `${drawer.color}.main` }}>
        {drawer.title}
      </Typography>
      <Divider sx={{ mb: 2 }} />
      <List>
        {drawer.items.map((item) => (
          <ListItem key={item.value} disablePadding>
            <ListItemButton
              onClick={() => handleItemClick(drawer, item.value, item.label)}
              sx={{
                borderRadius: 1,
                mb: 0.5,
                '&:hover': {
                  backgroundColor: `${drawer.color}.light`
                }
              }}
            >
              <ListItemIcon sx={{ color: `${drawer.color}.main` }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{
                  fontWeight: drawer.selected === item.label ? 'bold' : 'normal'
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider sx={{ my: 2 }} />
      <Box sx={{ px: 2 }}>
        <Button
          variant='outlined'
          color={drawer.color}
          fullWidth
          onClick={() => toggleDrawer(drawer, false)}
        >
          닫기
        </Button>
      </Box>
    </Box>
  );

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
          Sidebar Section
        </Typography>
        <Typography
          variant='body2'
          sx={{
            textAlign: 'center',
            color: 'text.secondary',
            fontSize: { xs: '0.875rem', md: '1rem' }
          }}
        >
          세 가지 방향의 사이드바를 열어보고 메뉴를 선택해보세요
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {drawers.map((drawer) => (
          <Grid key={drawer.id} size={{ xs: 12, md: 4 }}>
            <Card
              sx={{
                height: '100%',
                boxShadow: 3,
                transition: 'transform 0.2s, box-shadow 0.2s',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: 6
                }
              }}
            >
              <CardContent sx={{ p: 3 }}>
                {/* 카드 헤더 */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                  <Typography component='span' sx={{ fontSize: '2rem' }}>
                    {drawer.icon}
                  </Typography>
                  <Typography
                    variant='h6'
                    sx={{
                      fontWeight: 'bold',
                      color: `${drawer.color}.main`
                    }}
                  >
                    {drawer.title}
                  </Typography>
                </Box>

                {/* 설명 */}
                <Typography
                  variant='body2'
                  color='text.secondary'
                  sx={{ mb: 3, minHeight: 40 }}
                >
                  {drawer.description}
                </Typography>

                {/* 사이드바 열기 버튼 */}
                <Button
                  variant='contained'
                  color={drawer.color}
                  fullWidth
                  onClick={() => toggleDrawer(drawer, true)}
                  startIcon={<MenuIcon />}
                  sx={{ mb: 2, fontWeight: 'bold' }}
                >
                  사이드바 열기
                </Button>

                {/* Drawer 컴포넌트 */}
                <Drawer
                  anchor={drawer.anchor}
                  open={drawer.open}
                  onClose={() => toggleDrawer(drawer, false)}
                >
                  {renderDrawerContent(drawer)}
                </Drawer>

                {/* 선택된 메뉴 표시 */}
                <Box
                  sx={{
                    p: 2,
                    backgroundColor: drawer.selected ? `${drawer.color}.light` : 'rgba(0, 0, 0, 0.04)',
                    borderRadius: 1,
                    border: '1px solid',
                    borderColor: drawer.selected ? `${drawer.color}.main` : 'transparent',
                    minHeight: 60
                  }}
                >
                  <Typography
                    variant='caption'
                    sx={{
                      display: 'block',
                      mb: 0.5,
                      color: drawer.selected ? `${drawer.color}.dark` : 'text.secondary',
                      fontWeight: 'bold'
                    }}
                  >
                    최근 선택:
                  </Typography>
                  <Typography
                    variant='body1'
                    sx={{
                      fontSize: { xs: '0.9rem', md: '1rem' },
                      fontWeight: 'medium',
                      color: drawer.selected ? `${drawer.color}.dark` : 'text.disabled'
                    }}
                  >
                    {drawer.selected || '(선택 안 함)'}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default SidebarSection;
