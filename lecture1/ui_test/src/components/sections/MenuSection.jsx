import { useState } from 'react';
import { Box, Typography, Button, Menu, MenuItem, Card, CardContent, Divider, ListItemIcon, ListItemText } from '@mui/material';
import Grid from '@mui/material/Grid';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import FolderIcon from '@mui/icons-material/Folder';
import CloudIcon from '@mui/icons-material/Cloud';
import ContentCutIcon from '@mui/icons-material/ContentCut';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import MoreVertIcon from '@mui/icons-material/MoreVert';

/**
 * MenuSection 컴포넌트
 *
 * MUI Menu 컴포넌트를 사용한 다양한 메뉴 예시
 * 버튼 클릭으로 메뉴 열기/닫기 및 선택 알림 기능
 */
function MenuSection() {
  // 각 메뉴별 anchorEl 상태
  const [basicMenuAnchor, setBasicMenuAnchor] = useState(null);
  const [iconMenuAnchor, setIconMenuAnchor] = useState(null);
  const [actionMenuAnchor, setActionMenuAnchor] = useState(null);

  // 선택된 메뉴 아이템 상태
  const [selectedBasic, setSelectedBasic] = useState('');
  const [selectedIcon, setSelectedIcon] = useState('');
  const [selectedAction, setSelectedAction] = useState('');

  const menus = [
    {
      id: 'basic',
      title: '기본 메뉴',
      icon: '📋',
      color: 'primary',
      description: '간단한 텍스트 메뉴',
      anchor: basicMenuAnchor,
      setAnchor: setBasicMenuAnchor,
      selected: selectedBasic,
      setSelected: setSelectedBasic,
      items: [
        { value: 'profile', label: '프로필' },
        { value: 'account', label: '계정' },
        { value: 'dashboard', label: '대시보드' },
        { value: 'settings', label: '설정' }
      ]
    },
    {
      id: 'icon',
      title: '아이콘 메뉴',
      icon: '🎨',
      color: 'secondary',
      description: '아이콘과 함께 표시되는 메뉴',
      anchor: iconMenuAnchor,
      setAnchor: setIconMenuAnchor,
      selected: selectedIcon,
      setSelected: setSelectedIcon,
      items: [
        { value: 'profile', label: '프로필', icon: <AccountCircleIcon /> },
        { value: 'settings', label: '설정', icon: <SettingsIcon /> },
        { value: 'logout', label: '로그아웃', icon: <LogoutIcon /> }
      ]
    },
    {
      id: 'action',
      title: '액션 메뉴',
      icon: '⚡',
      color: 'success',
      description: '편집 작업을 위한 메뉴',
      anchor: actionMenuAnchor,
      setAnchor: setActionMenuAnchor,
      selected: selectedAction,
      setSelected: setSelectedAction,
      items: [
        { value: 'cut', label: '잘라내기', icon: <ContentCutIcon /> },
        { value: 'copy', label: '복사', icon: <ContentCopyIcon /> },
        { value: 'paste', label: '붙여넣기', icon: <ContentPasteIcon /> }
      ]
    }
  ];

  const handleMenuOpen = (menu, event) => {
    menu.setAnchor(event.currentTarget);
  };

  const handleMenuClose = (menu) => {
    menu.setAnchor(null);
  };

  const handleMenuItemClick = (menu, value, label) => {
    menu.setSelected(label);
    menu.setAnchor(null);
    alert(`선택된 메뉴: ${label}`);
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
          Menu Section
        </Typography>
        <Typography
          variant='body2'
          sx={{
            textAlign: 'center',
            color: 'text.secondary',
            fontSize: { xs: '0.875rem', md: '1rem' }
          }}
        >
          세 가지 유형의 메뉴를 열어보고 메뉴 아이템을 선택해보세요
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {menus.map((menu) => (
          <Grid key={menu.id} size={{ xs: 12, md: 4 }}>
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
                    {menu.icon}
                  </Typography>
                  <Typography
                    variant='h6'
                    sx={{
                      fontWeight: 'bold',
                      color: `${menu.color}.main`
                    }}
                  >
                    {menu.title}
                  </Typography>
                </Box>

                {/* 설명 */}
                <Typography
                  variant='body2'
                  color='text.secondary'
                  sx={{ mb: 3, minHeight: 40 }}
                >
                  {menu.description}
                </Typography>

                {/* 메뉴 열기 버튼 */}
                <Button
                  variant='contained'
                  color={menu.color}
                  fullWidth
                  onClick={(e) => handleMenuOpen(menu, e)}
                  endIcon={<MoreVertIcon />}
                  sx={{ mb: 2, fontWeight: 'bold' }}
                >
                  메뉴 열기
                </Button>

                {/* 메뉴 컴포넌트 - 드롭다운 형태 */}
                <Menu
                  anchorEl={menu.anchor}
                  open={Boolean(menu.anchor)}
                  onClose={() => handleMenuClose(menu)}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left'
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left'
                  }}
                  slotProps={{
                    paper: {
                      sx: {
                        mt: 1,
                        width: menu.anchor?.offsetWidth || 200,
                        boxShadow: 3
                      }
                    }
                  }}
                >
                  {menu.items.map((item, index) => (
                    <Box key={item.value}>
                      <MenuItem
                        onClick={() => handleMenuItemClick(menu, item.value, item.label)}
                        sx={{
                          '&:hover': {
                            backgroundColor: `${menu.color}.light`
                          }
                        }}
                      >
                        {item.icon && (
                          <ListItemIcon sx={{ color: `${menu.color}.main` }}>
                            {item.icon}
                          </ListItemIcon>
                        )}
                        <ListItemText>{item.label}</ListItemText>
                      </MenuItem>
                      {index < menu.items.length - 1 && <Divider />}
                    </Box>
                  ))}
                </Menu>

                {/* 선택된 메뉴 표시 */}
                <Box
                  sx={{
                    p: 2,
                    backgroundColor: menu.selected ? `${menu.color}.light` : 'rgba(0, 0, 0, 0.04)',
                    borderRadius: 1,
                    border: '1px solid',
                    borderColor: menu.selected ? `${menu.color}.main` : 'transparent',
                    minHeight: 60
                  }}
                >
                  <Typography
                    variant='caption'
                    sx={{
                      display: 'block',
                      mb: 0.5,
                      color: menu.selected ? `${menu.color}.dark` : 'text.secondary',
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
                      color: menu.selected ? `${menu.color}.dark` : 'text.disabled'
                    }}
                  >
                    {menu.selected || '(선택 안 함)'}
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

export default MenuSection;
