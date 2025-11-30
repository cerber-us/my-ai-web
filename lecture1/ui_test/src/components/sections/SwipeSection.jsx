import { useState } from 'react';
import { Box, Typography, Card, CardContent, Chip } from '@mui/material';
import Grid from '@mui/material/Grid';
import SwipeLeftIcon from '@mui/icons-material/SwipeLeft';
import SwipeRightIcon from '@mui/icons-material/SwipeRight';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

/**
 * SwipeSection 컴포넌트
 *
 * 터치 이벤트를 처리하여 스와이프 제스처를 감지하고 표시
 * 모바일과 데스크톱 모두에서 테스트 가능
 */
function SwipeSection() {
  const [basicSwipe, setBasicSwipe] = useState({ direction: '', count: 0 });
  const [cardSwipe, setCardSwipe] = useState({ position: 0, direction: '' });
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [actionSwipe, setActionSwipe] = useState({ action: '', count: { left: 0, right: 0 } });

  const galleryImages = ['🏔️', '🌊', '🌅', '🌃', '🏖️'];

  // 기본 스와이프 처리
  const handleBasicSwipe = (direction) => {
    setBasicSwipe({ direction, count: basicSwipe.count + 1 });
  };

  // 카드 스와이프 처리
  const handleCardSwipe = (direction) => {
    setCardSwipe({ position: 0, direction });
    setTimeout(() => {
      setCardSwipe({ position: 0, direction: '' });
    }, 500);
  };

  // 갤러리 스와이프 처리
  const handleGallerySwipe = (direction) => {
    if (direction === 'left' && galleryIndex < galleryImages.length - 1) {
      setGalleryIndex(galleryIndex + 1);
    } else if (direction === 'right' && galleryIndex > 0) {
      setGalleryIndex(galleryIndex - 1);
    }
  };

  // 액션 스와이프 처리
  const handleActionSwipe = (direction) => {
    const action = direction === 'left' ? '❌ 삭제' : '✅ 승인';
    const newCount = { ...actionSwipe.count };
    if (direction === 'left') {
      newCount.left += 1;
    } else {
      newCount.right += 1;
    }
    setActionSwipe({ action, count: newCount });
  };

  // 스와이프 감지 Hook
  const useSwipe = (onSwipe) => {
    let touchStartX = 0;
    let touchEndX = 0;
    let currentX = 0;

    const handleTouchStart = (e) => {
      touchStartX = e.touches[0].clientX;
    };

    const handleTouchMove = (e) => {
      currentX = e.touches[0].clientX;
    };

    const handleTouchEnd = (e) => {
      touchEndX = currentX;
      const diff = touchStartX - touchEndX;
      const minSwipeDistance = 50;

      if (Math.abs(diff) > minSwipeDistance) {
        if (diff > 0) {
          onSwipe('left');
        } else {
          onSwipe('right');
        }
      }
    };

    // 마우스 이벤트도 지원
    const handleMouseDown = (e) => {
      touchStartX = e.clientX;
    };

    const handleMouseMove = (e) => {
      if (e.buttons === 1) {
        currentX = e.clientX;
      }
    };

    const handleMouseUp = (e) => {
      touchEndX = e.clientX;
      const diff = touchStartX - touchEndX;
      const minSwipeDistance = 50;

      if (Math.abs(diff) > minSwipeDistance) {
        if (diff > 0) {
          onSwipe('left');
        } else {
          onSwipe('right');
        }
      }
    };

    return {
      onTouchStart: handleTouchStart,
      onTouchMove: handleTouchMove,
      onTouchEnd: handleTouchEnd,
      onMouseDown: handleMouseDown,
      onMouseMove: handleMouseMove,
      onMouseUp: handleMouseUp
    };
  };

  const basicSwipeHandlers = useSwipe(handleBasicSwipe);
  const cardSwipeHandlers = useSwipe(handleCardSwipe);
  const gallerySwipeHandlers = useSwipe(handleGallerySwipe);
  const actionSwipeHandlers = useSwipe(handleActionSwipe);

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
          Swipe Section
        </Typography>
        <Typography
          variant='body2'
          sx={{
            textAlign: 'center',
            color: 'text.secondary',
            fontSize: { xs: '0.875rem', md: '1rem' }
          }}
        >
          카드를 좌우로 드래그하거나 스와이프하여 인터랙션을 테스트해보세요
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {/* 기본 스와이프 감지 */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Card
            sx={{
              height: '100%',
              minHeight: 300,
              boxShadow: 3,
              transition: 'transform 0.2s',
              '&:hover': {
                boxShadow: 6
              }
            }}
          >
            <CardContent sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                <Typography component='span' sx={{ fontSize: '2rem' }}>
                  👆
                </Typography>
                <Typography variant='h6' sx={{ fontWeight: 'bold', color: 'primary.main' }}>
                  기본 스와이프 감지
                </Typography>
              </Box>

              <Typography variant='body2' color='text.secondary' sx={{ mb: 3 }}>
                아래 영역을 좌우로 드래그/스와이프하세요
              </Typography>

              <Box
                {...basicSwipeHandlers}
                sx={{
                  flexGrow: 1,
                  backgroundColor: 'primary.light',
                  borderRadius: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  cursor: 'grab',
                  userSelect: 'none',
                  '&:active': {
                    cursor: 'grabbing'
                  }
                }}
              >
                {basicSwipe.direction ? (
                  <>
                    <Typography variant='h3' sx={{ mb: 2 }}>
                      {basicSwipe.direction === 'left' ? '👈' : '👉'}
                    </Typography>
                    <Typography variant='h5' sx={{ fontWeight: 'bold', color: 'primary.dark' }}>
                      {basicSwipe.direction === 'left' ? '← 왼쪽 스와이프' : '오른쪽 스와이프 →'}
                    </Typography>
                    <Typography variant='body1' sx={{ mt: 2, color: 'primary.dark' }}>
                      총 {basicSwipe.count}회 스와이프
                    </Typography>
                  </>
                ) : (
                  <>
                    <SwipeLeftIcon sx={{ fontSize: 60, mb: 1, color: 'primary.dark' }} />
                    <SwipeRightIcon sx={{ fontSize: 60, mb: 2, color: 'primary.dark' }} />
                    <Typography variant='body1' sx={{ color: 'primary.dark' }}>
                      여기를 스와이프하세요
                    </Typography>
                  </>
                )}
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* 카드 스와이프 */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Card
            sx={{
              height: '100%',
              minHeight: 300,
              boxShadow: 3,
              transition: 'transform 0.2s',
              '&:hover': {
                boxShadow: 6
              }
            }}
          >
            <CardContent sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                <Typography component='span' sx={{ fontSize: '2rem' }}>
                  🎴
                </Typography>
                <Typography variant='h6' sx={{ fontWeight: 'bold', color: 'secondary.main' }}>
                  카드 스와이프
                </Typography>
              </Box>

              <Typography variant='body2' color='text.secondary' sx={{ mb: 3 }}>
                카드를 좌우로 밀어보세요
              </Typography>

              <Box
                {...cardSwipeHandlers}
                sx={{
                  flexGrow: 1,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  overflow: 'hidden',
                  cursor: 'grab',
                  userSelect: 'none',
                  backgroundColor: 'rgba(0, 0, 0, 0.02)',
                  borderRadius: 2,
                  border: '2px dashed',
                  borderColor: 'secondary.light',
                  '&:active': {
                    cursor: 'grabbing'
                  }
                }}
              >
                <Box
                  sx={{
                    width: 200,
                    height: 200,
                    backgroundColor: 'secondary.main',
                    borderRadius: 3,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    userSelect: 'none',
                    transition: 'all 0.3s ease-out',
                    transform: cardSwipe.direction === 'left'
                      ? 'translateX(-300px) rotate(-30deg)'
                      : cardSwipe.direction === 'right'
                        ? 'translateX(300px) rotate(30deg)'
                        : 'translateX(0) rotate(0)',
                    opacity: cardSwipe.direction ? 0 : 1,
                    pointerEvents: 'none'
                  }}
                >
                  <Typography variant='h3' sx={{ color: 'white', mb: 1 }}>
                    🎴
                  </Typography>
                  <Typography variant='h6' sx={{ color: 'white', fontWeight: 'bold' }}>
                    드래그하세요
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* 갤러리 스와이프 */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Card
            sx={{
              height: '100%',
              minHeight: 300,
              boxShadow: 3,
              transition: 'transform 0.2s',
              '&:hover': {
                boxShadow: 6
              }
            }}
          >
            <CardContent sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                <Typography component='span' sx={{ fontSize: '2rem' }}>
                  🖼️
                </Typography>
                <Typography variant='h6' sx={{ fontWeight: 'bold', color: 'success.main' }}>
                  갤러리 스와이프
                </Typography>
              </Box>

              <Typography variant='body2' color='text.secondary' sx={{ mb: 3 }}>
                좌우로 스와이프하여 이미지 넘기기
              </Typography>

              <Box
                {...gallerySwipeHandlers}
                sx={{
                  flexGrow: 1,
                  backgroundColor: 'success.light',
                  borderRadius: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  cursor: 'grab',
                  userSelect: 'none',
                  position: 'relative',
                  '&:active': {
                    cursor: 'grabbing'
                  }
                }}
              >
                <Typography variant='h1' sx={{ fontSize: '8rem', mb: 2 }}>
                  {galleryImages[galleryIndex]}
                </Typography>
                <Typography variant='h6' sx={{ color: 'success.dark', fontWeight: 'bold' }}>
                  {galleryIndex + 1} / {galleryImages.length}
                </Typography>

                <Box sx={{ position: 'absolute', top: '50%', left: 10, transform: 'translateY(-50%)' }}>
                  <ArrowBackIcon sx={{ fontSize: 40, color: galleryIndex === 0 ? 'rgba(0,0,0,0.2)' : 'success.dark' }} />
                </Box>
                <Box sx={{ position: 'absolute', top: '50%', right: 10, transform: 'translateY(-50%)' }}>
                  <ArrowForwardIcon sx={{ fontSize: 40, color: galleryIndex === galleryImages.length - 1 ? 'rgba(0,0,0,0.2)' : 'success.dark' }} />
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* 액션 스와이프 */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Card
            sx={{
              height: '100%',
              minHeight: 300,
              boxShadow: 3,
              transition: 'transform 0.2s',
              '&:hover': {
                boxShadow: 6
              }
            }}
          >
            <CardContent sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                <Typography component='span' sx={{ fontSize: '2rem' }}>
                  ⚡
                </Typography>
                <Typography variant='h6' sx={{ fontWeight: 'bold', color: 'warning.main' }}>
                  액션 스와이프
                </Typography>
              </Box>

              <Typography variant='body2' color='text.secondary' sx={{ mb: 3 }}>
                좌: 삭제, 우: 승인 액션 실행
              </Typography>

              <Box
                {...actionSwipeHandlers}
                sx={{
                  flexGrow: 1,
                  backgroundColor: 'warning.light',
                  borderRadius: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  cursor: 'grab',
                  userSelect: 'none',
                  '&:active': {
                    cursor: 'grabbing'
                  }
                }}
              >
                {actionSwipe.action ? (
                  <>
                    <Typography variant='h3' sx={{ mb: 2 }}>
                      {actionSwipe.action}
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
                      <Chip label={`삭제: ${actionSwipe.count.left}회`} color='error' />
                      <Chip label={`승인: ${actionSwipe.count.right}회`} color='success' />
                    </Box>
                  </>
                ) : (
                  <>
                    <Typography variant='h3' sx={{ mb: 2 }}>
                      📱
                    </Typography>
                    <Typography variant='body1' sx={{ color: 'warning.dark', textAlign: 'center' }}>
                      ← 좌: 삭제 | 우: 승인 →
                    </Typography>
                  </>
                )}
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* 사용 안내 */}
      <Box
        sx={{
          mt: 4,
          p: 3,
          backgroundColor: 'info.light',
          borderRadius: 2,
          border: '2px solid',
          borderColor: 'info.main'
        }}
      >
        <Typography variant='h6' sx={{ mb: 2, fontWeight: 'bold', color: 'info.dark' }}>
          💡 사용 방법
        </Typography>
        <Typography variant='body2' sx={{ mb: 1, color: 'info.dark' }}>
          • <strong>모바일:</strong> 손가락으로 좌우로 스와이프하세요
        </Typography>
        <Typography variant='body2' sx={{ mb: 1, color: 'info.dark' }}>
          • <strong>데스크톱:</strong> 마우스로 클릭하고 드래그하세요
        </Typography>
        <Typography variant='body2' sx={{ color: 'info.dark' }}>
          • 최소 50px 이상 이동해야 스와이프로 감지됩니다
        </Typography>
      </Box>
    </Box>
  );
}

export default SwipeSection;
