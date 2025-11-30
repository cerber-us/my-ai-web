import { Box, Typography, Card, CardContent } from '@mui/material';
import Grid from '@mui/material/Grid';

/**
 * HoverSection 컴포넌트
 *
 * CSS 호버 효과를 데모하는 섹션
 * 6가지 기본 호버 효과 + 2가지 복합 호버 효과
 */
function HoverSection() {
  const basicHovers = [
    {
      id: 'color',
      title: '색상 변경',
      icon: '🎨',
      color: 'primary',
      description: '호버 시 배경색과 텍스트 색상 변경',
      hoverStyle: {
        backgroundColor: 'primary.main',
        color: 'white',
        '& .hover-icon': {
          transform: 'scale(1.2)'
        },
        '& .hover-title': {
          color: 'white'
        }
      }
    },
    {
      id: 'shadow',
      title: '그림자 효과',
      icon: '💫',
      color: 'secondary',
      description: '호버 시 그림자 크기 증가',
      hoverStyle: {
        boxShadow: '0 12px 24px rgba(0, 0, 0, 0.3)',
        transform: 'translateY(-8px)'
      }
    },
    {
      id: 'scale',
      title: '크기 변화',
      icon: '📐',
      color: 'success',
      description: '호버 시 크기 확대',
      hoverStyle: {
        transform: 'scale(1.15)',
        zIndex: 10
      }
    },
    {
      id: 'rotate',
      title: '회전 효과',
      icon: '🔄',
      color: 'warning',
      description: '호버 시 360도 회전',
      hoverStyle: {
        transform: 'rotate(360deg)',
        backgroundColor: 'warning.light'
      }
    },
    {
      id: 'gradient',
      title: '그라데이션',
      icon: '🌈',
      color: 'error',
      description: '호버 시 그라데이션 배경 적용',
      hoverStyle: {
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        '& .hover-icon': {
          filter: 'brightness(1.5)'
        }
      }
    },
    {
      id: 'border',
      title: '테두리 애니메이션',
      icon: '🔲',
      color: 'info',
      description: '호버 시 테두리가 반짝이는 효과',
      hoverStyle: {
        border: '4px solid',
        borderColor: 'info.main',
        borderRadius: 4,
        boxShadow: '0 0 20px rgba(33, 150, 243, 0.6), 0 0 40px rgba(33, 150, 243, 0.4), inset 0 0 20px rgba(33, 150, 243, 0.1)',
        animation: 'borderGlow 1.5s ease-in-out infinite'
      }
    }
  ];

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
          Hover Section
        </Typography>
        <Typography
          variant='body2'
          sx={{
            textAlign: 'center',
            color: 'text.secondary',
            fontSize: { xs: '0.875rem', md: '1rem' }
          }}
        >
          마우스를 올려서 다양한 호버 효과를 확인해보세요
        </Typography>
      </Box>

      {/* 기본 호버 효과 6가지 */}
      <Typography
        variant='h5'
        sx={{
          mb: 3,
          fontWeight: 'bold',
          color: 'primary.main',
          textAlign: 'center'
        }}
      >
        🎯 기본 호버 효과
      </Typography>

      <Grid container spacing={3} sx={{ mb: 6 }}>
        {basicHovers.map((hover) => (
          <Grid key={hover.id} size={{ xs: 12, sm: 6, md: 4 }}>
            <Card
              sx={{
                height: '100%',
                boxShadow: 2,
                border: '2px solid',
                borderColor: 'divider',
                transition: 'all 0.4s ease-in-out',
                cursor: 'pointer',
                '&:hover': hover.hoverStyle
              }}
            >
              <CardContent sx={{ p: 3, textAlign: 'center', minHeight: 200 }}>
                <Typography
                  component='div'
                  className='hover-icon'
                  sx={{
                    fontSize: '4rem',
                    mb: 2,
                    transition: 'all 0.4s ease-in-out'
                  }}
                >
                  {hover.icon}
                </Typography>
                <Typography
                  variant='h6'
                  className='hover-title'
                  sx={{
                    fontWeight: 'bold',
                    mb: 1,
                    color: `${hover.color}.main`,
                    transition: 'color 0.4s ease-in-out'
                  }}
                >
                  {hover.title}
                </Typography>
                <Typography
                  variant='body2'
                  sx={{
                    color: 'text.secondary',
                    transition: 'color 0.4s ease-in-out'
                  }}
                >
                  {hover.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* 복합 호버 효과 */}
      <Typography
        variant='h5'
        sx={{
          mb: 3,
          fontWeight: 'bold',
          color: 'secondary.main',
          textAlign: 'center'
        }}
      >
        ⚡ 복합 호버 효과
      </Typography>

      <Grid container spacing={3}>
        {/* 카드 호버 효과 */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Card
            sx={{
              height: '100%',
              minHeight: 300,
              boxShadow: 3,
              position: 'relative',
              overflow: 'hidden',
              cursor: 'pointer',
              transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
              '&:hover': {
                transform: 'translateY(-12px) scale(1.02)',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
                '&::before': {
                  transform: 'translateX(0)',
                  opacity: 1
                },
                '& .card-content': {
                  transform: 'translateY(-10px)'
                },
                '& .card-icon': {
                  transform: 'rotate(360deg) scale(1.3)',
                  filter: 'brightness(1.3)'
                },
                '& .card-badge': {
                  transform: 'translateX(0)',
                  opacity: 1
                }
              },
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'linear-gradient(135deg, rgba(33, 150, 243, 0.9) 0%, rgba(156, 39, 176, 0.9) 100%)',
                transform: 'translateX(-100%)',
                transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                opacity: 0,
                zIndex: 1
              }
            }}
          >
            <CardContent
              className='card-content'
              sx={{
                p: 4,
                position: 'relative',
                zIndex: 2,
                transition: 'all 0.5s ease-in-out',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}
            >
              <Box
                className='card-badge'
                sx={{
                  position: 'absolute',
                  top: 20,
                  right: 20,
                  backgroundColor: 'primary.main',
                  color: 'white',
                  px: 2,
                  py: 0.5,
                  borderRadius: 2,
                  fontSize: '0.75rem',
                  fontWeight: 'bold',
                  transform: 'translateX(150px)',
                  opacity: 0,
                  transition: 'all 0.5s ease-in-out'
                }}
              >
                PREMIUM
              </Box>
              <Typography
                component='div'
                className='card-icon'
                sx={{
                  fontSize: '5rem',
                  textAlign: 'center',
                  mb: 3,
                  transition: 'all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)'
                }}
              >
                🎴
              </Typography>
              <Typography
                variant='h5'
                sx={{
                  fontWeight: 'bold',
                  mb: 2,
                  textAlign: 'center',
                  color: 'primary.main'
                }}
              >
                카드 호버
              </Typography>
              <Typography
                variant='body1'
                sx={{
                  textAlign: 'center',
                  color: 'text.secondary'
                }}
              >
                여러 효과를 조합한 고급 호버 인터랙션
                <br />
                그라데이션 오버레이 + 크기 변화 + 그림자 효과
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* 네온 호버 효과 */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Card
            sx={{
              height: '100%',
              minHeight: 300,
              boxShadow: 3,
              position: 'relative',
              overflow: 'hidden',
              cursor: 'pointer',
              backgroundColor: '#1a1a2e',
              transition: 'all 0.4s ease-in-out',
              border: '2px solid transparent',
              '&:hover': {
                borderColor: '#00ff88',
                boxShadow: '0 0 30px rgba(0, 255, 136, 0.6), 0 0 60px rgba(0, 255, 136, 0.4), inset 0 0 30px rgba(0, 255, 136, 0.1)',
                transform: 'scale(1.05)',
                '& .neon-icon': {
                  textShadow: '0 0 20px #00ff88, 0 0 40px #00ff88, 0 0 60px #00ff88',
                  transform: 'translateY(-10px) scale(1.2)',
                  filter: 'brightness(1.5)'
                },
                '& .neon-text': {
                  color: '#00ff88',
                  textShadow: '0 0 10px #00ff88, 0 0 20px #00ff88'
                },
                '& .neon-line': {
                  width: '100%',
                  boxShadow: '0 0 10px #00ff88, 0 0 20px #00ff88'
                }
              }
            }}
          >
            <CardContent
              sx={{
                p: 4,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}
            >
              <Typography
                component='div'
                className='neon-icon'
                sx={{
                  fontSize: '5rem',
                  textAlign: 'center',
                  mb: 3,
                  transition: 'all 0.4s ease-in-out',
                  filter: 'brightness(1)'
                }}
              >
                ⚡
              </Typography>
              <Box
                className='neon-line'
                sx={{
                  width: 0,
                  height: '3px',
                  backgroundColor: '#00ff88',
                  margin: '0 auto 20px',
                  transition: 'all 0.6s ease-in-out'
                }}
              />
              <Typography
                variant='h5'
                className='neon-text'
                sx={{
                  fontWeight: 'bold',
                  mb: 2,
                  textAlign: 'center',
                  color: 'white',
                  transition: 'all 0.4s ease-in-out'
                }}
              >
                네온 호버
              </Typography>
              <Typography
                variant='body1'
                sx={{
                  textAlign: 'center',
                  color: '#a0a0a0'
                }}
              >
                네온사인 효과로 빛나는 인터랙션
                <br />
                텍스트 그림자 + 박스 그림자 + 테두리 효과
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* CSS 애니메이션 키프레임 */}
      <style>
        {`
          @keyframes borderGlow {
            0%, 100% {
              box-shadow: 0 0 20px rgba(33, 150, 243, 0.6), 0 0 40px rgba(33, 150, 243, 0.4), inset 0 0 20px rgba(33, 150, 243, 0.1);
            }
            50% {
              box-shadow: 0 0 30px rgba(33, 150, 243, 0.8), 0 0 60px rgba(33, 150, 243, 0.6), inset 0 0 30px rgba(33, 150, 243, 0.2);
            }
          }
        `}
      </style>
    </Box>
  );
}

export default HoverSection;
