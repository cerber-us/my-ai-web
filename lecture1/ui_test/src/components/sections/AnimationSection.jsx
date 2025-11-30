import { useState } from 'react';
import { Box, Typography, Button, Card, CardContent } from '@mui/material';
import Grid from '@mui/material/Grid';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import StopIcon from '@mui/icons-material/Stop';
import RefreshIcon from '@mui/icons-material/Refresh';

/**
 * AnimationSection 컴포넌트
 *
 * CSS 트랜지션 기반 6가지 애니메이션 효과
 * 개별 및 전체 제어 기능 제공
 */
function AnimationSection() {
  const [animations, setAnimations] = useState({
    fade: false,
    scale: false,
    rotate: false,
    slide: false,
    bounce: false,
    pulse: false
  });

  const animationConfigs = [
    {
      id: 'fade',
      title: '페이드 인/아웃',
      icon: '✨',
      color: 'primary',
      description: '투명도가 변화하는 효과'
    },
    {
      id: 'scale',
      title: '크기 변화',
      icon: '📏',
      color: 'secondary',
      description: '크기가 커졌다 작아지는 효과'
    },
    {
      id: 'rotate',
      title: '회전 효과',
      icon: '🔄',
      color: 'success',
      description: '360도 회전하는 효과'
    },
    {
      id: 'slide',
      title: '슬라이드 인',
      icon: '➡️',
      color: 'warning',
      description: '좌측에서 우측으로 이동'
    },
    {
      id: 'bounce',
      title: '바운스',
      icon: '🏀',
      color: 'error',
      description: '튕기는 듯한 효과'
    },
    {
      id: 'pulse',
      title: '펄스',
      icon: '💓',
      color: 'info',
      description: '맥박처럼 뛰는 효과'
    }
  ];

  const toggleAnimation = (id) => {
    setAnimations((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const startAllAnimations = () => {
    const allTrue = {};
    Object.keys(animations).forEach((key) => {
      allTrue[key] = true;
    });
    setAnimations(allTrue);
  };

  const stopAllAnimations = () => {
    const allFalse = {};
    Object.keys(animations).forEach((key) => {
      allFalse[key] = false;
    });
    setAnimations(allFalse);
  };

  const handleRefresh = () => {
    window.location.reload();
  };

  const getAnimationStyle = (id, isActive) => {
    const baseStyle = {
      width: 80,
      height: 80,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '3rem',
      borderRadius: 2,
      backgroundColor: 'rgba(0, 0, 0, 0.05)',
      transition: 'all 0.6s ease-in-out'
    };

    if (!isActive) return baseStyle;

    const animationStyles = {
      fade: {
        ...baseStyle,
        opacity: 0.2,
        animation: 'fadeInOut 1.5s infinite'
      },
      scale: {
        ...baseStyle,
        transform: 'scale(1.5)',
        animation: 'scaleAnimation 1s infinite alternate'
      },
      rotate: {
        ...baseStyle,
        transform: 'rotate(360deg)',
        animation: 'rotateAnimation 2s infinite linear'
      },
      slide: {
        ...baseStyle,
        transform: 'translateX(100px)',
        animation: 'slideAnimation 1.5s infinite alternate'
      },
      bounce: {
        ...baseStyle,
        animation: 'bounceAnimation 0.8s infinite'
      },
      pulse: {
        ...baseStyle,
        animation: 'pulseAnimation 1s infinite'
      }
    };

    return animationStyles[id] || baseStyle;
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
          Animation Section
        </Typography>
        <Typography
          variant='body2'
          sx={{
            textAlign: 'center',
            color: 'text.secondary',
            fontSize: { xs: '0.875rem', md: '1rem' }
          }}
        >
          6가지 CSS 애니메이션 효과를 재생하고 제어해보세요
        </Typography>
      </Box>

      {/* 전체 제어 버튼 */}
      <Box sx={{ mb: 4, display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
        <Button
          variant='contained'
          color='success'
          size='large'
          startIcon={<PlayArrowIcon />}
          onClick={startAllAnimations}
          sx={{ minWidth: 200 }}
        >
          모든 애니메이션 시작
        </Button>
        <Button
          variant='contained'
          color='error'
          size='large'
          startIcon={<StopIcon />}
          onClick={stopAllAnimations}
          sx={{ minWidth: 200 }}
        >
          모든 애니메이션 중지
        </Button>
        <Button
          variant='outlined'
          color='primary'
          size='large'
          startIcon={<RefreshIcon />}
          onClick={handleRefresh}
          sx={{ minWidth: 200 }}
        >
          페이지 새로고침
        </Button>
      </Box>

      {/* 애니메이션 카드들 - 3x2 그리드 */}
      <Grid container spacing={3}>
        {animationConfigs.map((config) => (
          <Grid key={config.id} size={{ xs: 12, sm: 6, md: 4 }}>
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
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                  <Typography component='span' sx={{ fontSize: '1.5rem' }}>
                    {config.icon}
                  </Typography>
                  <Typography
                    variant='h6'
                    sx={{
                      fontWeight: 'bold',
                      color: `${config.color}.main`
                    }}
                  >
                    {config.title}
                  </Typography>
                </Box>

                <Typography
                  variant='body2'
                  color='text.secondary'
                  sx={{ mb: 3, minHeight: 40 }}
                >
                  {config.description}
                </Typography>

                {/* 애니메이션 박스 */}
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minHeight: 150,
                    mb: 3,
                    backgroundColor: 'rgba(0, 0, 0, 0.02)',
                    borderRadius: 2,
                    p: 2
                  }}
                >
                  <Box sx={getAnimationStyle(config.id, animations[config.id])}>
                    {config.icon}
                  </Box>
                </Box>

                {/* 재생/중지 버튼 */}
                <Button
                  variant={animations[config.id] ? 'contained' : 'outlined'}
                  color={config.color}
                  fullWidth
                  size='large'
                  startIcon={animations[config.id] ? <StopIcon /> : <PlayArrowIcon />}
                  onClick={() => toggleAnimation(config.id)}
                  sx={{ fontWeight: 'bold' }}
                >
                  {animations[config.id] ? '중지' : '재생'}
                </Button>

                {/* 상태 표시 */}
                <Box
                  sx={{
                    mt: 2,
                    p: 1,
                    backgroundColor: animations[config.id]
                      ? `${config.color}.light`
                      : 'rgba(0, 0, 0, 0.04)',
                    borderRadius: 1,
                    textAlign: 'center'
                  }}
                >
                  <Typography
                    variant='caption'
                    sx={{
                      fontWeight: 'bold',
                      color: animations[config.id] ? `${config.color}.dark` : 'text.secondary'
                    }}
                  >
                    {animations[config.id] ? '▶ 재생 중' : '⏸ 중지됨'}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* CSS 애니메이션 키프레임 */}
      <style>
        {`
          @keyframes fadeInOut {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.2; }
          }

          @keyframes scaleAnimation {
            0% { transform: scale(1); }
            100% { transform: scale(1.5); }
          }

          @keyframes rotateAnimation {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }

          @keyframes slideAnimation {
            0% { transform: translateX(0); }
            100% { transform: translateX(100px); }
          }

          @keyframes bounceAnimation {
            0%, 100% { transform: translateY(0); }
            25% { transform: translateY(-30px); }
            50% { transform: translateY(0); }
            75% { transform: translateY(-15px); }
          }

          @keyframes pulseAnimation {
            0%, 100% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.3); opacity: 0.7; }
          }
        `}
      </style>
    </Box>
  );
}

export default AnimationSection;
