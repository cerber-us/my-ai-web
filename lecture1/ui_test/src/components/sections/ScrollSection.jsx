import { useState, useRef } from 'react';
import { Box, Typography, Paper, Button, LinearProgress, Card, CardContent } from '@mui/material';
import Grid from '@mui/material/Grid';

/**
 * ScrollSection 컴포넌트
 *
 * 고정 높이 스크롤 컨테이너
 * 스크롤 이벤트 처리 및 스크롤 위치 실시간 표시
 */
function ScrollSection() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const scrollRef = useRef(null);

  // 파스텔톤 색상 배열 (15개)
  const pastelColors = [
    '#FFE4E1', // 파스텔 핑크
    '#E6E6FA', // 라벤더
    '#E0F2F7', // 파스텔 블루
    '#E8F5E9', // 파스텔 그린
    '#FFF9C4', // 파스텔 옐로우
    '#FFE0B2', // 파스텔 오렌지
    '#F3E5F5', // 파스텔 퍼플
    '#E1F5FE', // 파스텔 스카이블루
    '#F1F8E9', // 파스텔 라임
    '#FCE4EC', // 파스텔 로즈
    '#FFF3E0', // 파스텔 피치
    '#E0F7FA', // 파스텔 시안
    '#F9FBE7', // 파스텔 옐로우그린
    '#EDE7F6', // 파스텔 인디고
    '#FFEBEE'  // 파스텔 레드
  ];

  const handleScroll = (e) => {
    const { scrollTop, scrollHeight, clientHeight } = e.target;
    setScrollPosition(Math.round(scrollTop));
    const percentage = Math.round((scrollTop / (scrollHeight - clientHeight)) * 100);
    setScrollPercentage(percentage);
  };

  const scrollToPercentage = (percentage) => {
    if (scrollRef.current) {
      const { scrollHeight, clientHeight } = scrollRef.current;
      const targetPosition = ((scrollHeight - clientHeight) * percentage) / 100;
      scrollRef.current.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

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
          Scroll Section
        </Typography>
        <Typography
          variant='body2'
          sx={{
            textAlign: 'center',
            color: 'text.secondary',
            fontSize: { xs: '0.875rem', md: '1rem' }
          }}
        >
          스크롤 컨테이너를 스크롤하면서 위치 정보를 실시간으로 확인해보세요
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {/* 왼쪽: 스크롤 컨테이너 */}
        <Grid size={{ xs: 12, md: 8 }}>
          <Paper
            ref={scrollRef}
            onScroll={handleScroll}
            sx={{
              height: 750,
              overflow: 'auto',
              p: 3,
              backgroundColor: 'background.paper',
              border: '2px solid',
              borderColor: 'divider'
            }}
          >
          <Typography variant='h6' gutterBottom sx={{ fontWeight: 'bold' }}>
            스크롤 가능한 컨텐츠
          </Typography>

          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((num) => (
            <Box
              key={num}
              sx={{
                mb: 3,
                p: 3,
                backgroundColor: pastelColors[num - 1],
                borderRadius: 2,
                border: '2px solid',
                borderColor: 'rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.2s, box-shadow 0.2s',
                '&:hover': {
                  transform: 'translateX(8px)',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
                }
              }}
            >
              <Typography
                variant='h6'
                gutterBottom
                sx={{
                  color: 'primary.main',
                  fontWeight: 'bold',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1
                }}
              >
                <Box
                  component='span'
                  sx={{
                    backgroundColor: 'primary.main',
                    color: 'white',
                    borderRadius: '50%',
                    width: 32,
                    height: 32,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.9rem',
                    fontWeight: 'bold'
                  }}
                >
                  {num}
                </Box>
                섹션 {num}
              </Typography>
              <Typography variant='body1' paragraph sx={{ mb: 1 }}>
                이것은 스크롤 테스트를 위한 긴 콘텐츠입니다. 스크롤을 내리면서 위의 스크롤 위치와
                진행률이 실시간으로 업데이트되는 것을 확인할 수 있습니다.
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                React를 사용하면 스크롤 이벤트를 쉽게 처리하고 사용자 인터페이스에 반영할 수
                있습니다. onScroll 이벤트 핸들러를 통해 스크롤 위치, 높이 등의 정보를 실시간으로
                추적할 수 있습니다.
              </Typography>
            </Box>
          ))}

          <Box
            sx={{
              p: 3,
              mt: 4,
              backgroundColor: 'success.light',
              borderRadius: 1,
              textAlign: 'center'
            }}
          >
            <Typography variant='h6' sx={{ fontWeight: 'bold' }}>
              🎉 끝까지 스크롤하셨습니다!
            </Typography>
          </Box>
        </Paper>
        </Grid>

        {/* 오른쪽: 스크롤 정보 및 컨트롤 */}
        <Grid size={{ xs: 12, md: 4 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            {/* 스크롤 위치 표시 */}
            <Card sx={{ boxShadow: 3 }}>
              <CardContent>
                <Typography variant='h6' sx={{ mb: 2, fontWeight: 'bold', color: 'primary.main' }}>
                  📍 스크롤 위치
                </Typography>
                <Box sx={{ mb: 2 }}>
                  <Typography variant='caption' sx={{ display: 'block', color: 'text.secondary', mb: 0.5 }}>
                    픽셀 위치
                  </Typography>
                  <Typography variant='h4' sx={{ fontWeight: 'bold', color: 'primary.dark' }}>
                    {scrollPosition}<Typography component='span' variant='h6'>px</Typography>
                  </Typography>
                </Box>
                <Box>
                  <Typography variant='caption' sx={{ display: 'block', color: 'text.secondary', mb: 0.5 }}>
                    진행률
                  </Typography>
                  <Typography variant='h4' sx={{ fontWeight: 'bold', color: 'success.main' }}>
                    {scrollPercentage}<Typography component='span' variant='h6'>%</Typography>
                  </Typography>
                </Box>
              </CardContent>
            </Card>

            {/* 진행률 바 */}
            <Card sx={{ boxShadow: 3 }}>
              <CardContent>
                <Typography variant='h6' sx={{ mb: 2, fontWeight: 'bold', color: 'primary.main' }}>
                  📊 진행률 바
                </Typography>
                <Box sx={{ mb: 1 }}>
                  <LinearProgress
                    variant='determinate'
                    value={scrollPercentage}
                    sx={{
                      height: 20,
                      borderRadius: 1,
                      backgroundColor: 'rgba(0, 0, 0, 0.1)',
                      '& .MuiLinearProgress-bar': {
                        backgroundColor: scrollPercentage === 100 ? 'success.main' : 'primary.main',
                        borderRadius: 1
                      }
                    }}
                  />
                  <Box
                    sx={{
                      mt: 1,
                      display: 'flex',
                      justifyContent: 'space-between',
                      fontSize: '0.75rem',
                      color: 'text.secondary'
                    }}
                  >
                    <span>0%</span>
                    <span>50%</span>
                    <span>100%</span>
                  </Box>
                </Box>
              </CardContent>
            </Card>

            {/* 빠른 이동 버튼 */}
            <Card sx={{ boxShadow: 3 }}>
              <CardContent>
                <Typography variant='h6' sx={{ mb: 2, fontWeight: 'bold', color: 'primary.main' }}>
                  ⚡ 빠른 이동
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  {[0, 20, 40, 60, 80, 100].map((percent) => (
                    <Button
                      key={percent}
                      variant={scrollPercentage >= percent - 5 && scrollPercentage <= percent + 5 ? 'contained' : 'outlined'}
                      color='primary'
                      onClick={() => scrollToPercentage(percent)}
                      fullWidth
                      sx={{
                        justifyContent: 'space-between',
                        fontWeight: 'bold'
                      }}
                    >
                      <span>{percent}% 위치로 이동</span>
                      <span>{percent === 0 ? '⬆️' : percent === 100 ? '⬇️' : '↕️'}</span>
                    </Button>
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ScrollSection;
