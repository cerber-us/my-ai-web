import { Box, Typography, Button } from '@mui/material';
import Grid from '@mui/material/Grid';

/**
 * ButtonSection 컴포넌트
 *
 * MUI Button의 다양한 variant와 color 조합을 보여주는 섹션
 * 각 버튼 클릭 시 알림창 표시
 */
function ButtonSection() {
  const handleClick = (variant, color) => {
    alert(`${variant.toUpperCase()} - ${color.toUpperCase()} 버튼이 클릭되었습니다!`);
  };

  const variants = ['contained', 'outlined', 'text', 'soft'];
  const colors = ['primary', 'secondary', 'error', 'success'];

  // soft variant를 위한 스타일 생성 함수
  const getSoftStyle = (color) => {
    const softColors = {
      primary: {
        backgroundColor: 'rgba(25, 118, 210, 0.12)',
        color: 'primary.main',
        '&:hover': {
          backgroundColor: 'rgba(25, 118, 210, 0.24)',
        }
      },
      secondary: {
        backgroundColor: 'rgba(220, 0, 78, 0.12)',
        color: 'secondary.main',
        '&:hover': {
          backgroundColor: 'rgba(220, 0, 78, 0.24)',
        }
      },
      error: {
        backgroundColor: 'rgba(211, 47, 47, 0.12)',
        color: 'error.main',
        '&:hover': {
          backgroundColor: 'rgba(211, 47, 47, 0.24)',
        }
      },
      success: {
        backgroundColor: 'rgba(46, 125, 50, 0.12)',
        color: 'success.main',
        '&:hover': {
          backgroundColor: 'rgba(46, 125, 50, 0.24)',
        }
      }
    };
    return softColors[color];
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
          Button Section
        </Typography>
        <Typography
          variant='body2'
          sx={{
            textAlign: 'center',
            color: 'text.secondary',
            fontSize: { xs: '0.875rem', md: '1rem' }
          }}
        >
          다양한 버튼 스타일과 색상 조합을 확인하고 클릭 이벤트를 테스트해보세요
        </Typography>
      </Box>

      <Box sx={{ mb: 4 }}>
        {variants.map((variant) => (
          <Box key={variant} sx={{ mb: 4 }}>
            <Typography
              variant='h6'
              sx={{
                fontSize: { xs: '1rem', md: '1.2rem' },
                fontWeight: 'medium',
                mb: 2,
                textTransform: 'capitalize'
              }}
            >
              {variant} Buttons
            </Typography>

            <Grid container spacing={2}>
              {colors.map((color) => (
                <Grid key={color} size={{ xs: 12, sm: 6, md: 3 }}>
                  <Button
                    variant={variant === 'soft' ? 'text' : variant}
                    color={variant === 'soft' ? undefined : color}
                    onClick={() => handleClick(variant, color)}
                    fullWidth
                    sx={{
                      py: 1.5,
                      fontSize: { xs: '0.9rem', md: '1rem' },
                      ...(variant === 'soft' ? getSoftStyle(color) : {})
                    }}
                  >
                    {color.toUpperCase()}
                  </Button>
                </Grid>
              ))}
            </Grid>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default ButtonSection;
