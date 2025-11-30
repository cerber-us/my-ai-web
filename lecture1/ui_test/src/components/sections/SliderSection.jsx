import { useState } from 'react';
import { Box, Typography, Slider, Card, CardContent } from '@mui/material';
import Grid from '@mui/material/Grid';

/**
 * SliderSection 컴포넌트
 *
 * MUI Slider 컴포넌트를 사용한 값 조절 인터페이스
 * 현재값을 실시간으로 표시
 */
function SliderSection() {
  const [volume, setVolume] = useState(50);
  const [brightness, setBrightness] = useState(75);
  const [progress, setProgress] = useState(30);
  const [temperature, setTemperature] = useState(22);

  const sliders = [
    {
      id: 'volume',
      title: '볼륨',
      icon: '🔊',
      value: volume,
      onChange: (e, val) => setVolume(val),
      min: 0,
      max: 100,
      step: 1,
      unit: '%',
      color: 'primary',
      marks: [
        { value: 0, label: '0' },
        { value: 50, label: '50' },
        { value: 100, label: '100' }
      ]
    },
    {
      id: 'brightness',
      title: '화면 밝기',
      icon: '💡',
      value: brightness,
      onChange: (e, val) => setBrightness(val),
      min: 0,
      max: 100,
      step: 1,
      unit: '%',
      color: 'warning',
      marks: [
        { value: 0, label: '0' },
        { value: 50, label: '50' },
        { value: 100, label: '100' }
      ]
    },
    {
      id: 'progress',
      title: '작업 진행률',
      icon: '📊',
      value: progress,
      onChange: (e, val) => setProgress(val),
      min: 0,
      max: 100,
      step: 5,
      unit: '%',
      color: 'success',
      marks: [
        { value: 0, label: '0%' },
        { value: 25, label: '25%' },
        { value: 50, label: '50%' },
        { value: 75, label: '75%' },
        { value: 100, label: '100%' }
      ]
    },
    {
      id: 'temperature',
      title: '온도',
      icon: '🌡️',
      value: temperature,
      onChange: (e, val) => setTemperature(val),
      min: 0,
      max: 40,
      step: 1,
      unit: '°C',
      color: 'error',
      marks: [
        { value: 0, label: '0°C' },
        { value: 20, label: '20°C' },
        { value: 40, label: '40°C' }
      ]
    }
  ];

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
          Slider Section
        </Typography>
        <Typography
          variant='body2'
          sx={{
            textAlign: 'center',
            color: 'text.secondary',
            fontSize: { xs: '0.875rem', md: '1rem' }
          }}
        >
          네 가지 슬라이더를 조절하여 값의 변화를 실시간으로 확인해보세요
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {sliders.map((slider) => (
          <Grid key={slider.id} size={{ xs: 12, sm: 6 }}>
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
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                  <Typography component='span' sx={{ fontSize: '2rem' }}>
                    {slider.icon}
                  </Typography>
                  <Typography
                    variant='h6'
                    sx={{
                      fontWeight: 'bold',
                      color: `${slider.color}.main`
                    }}
                  >
                    {slider.title}
                  </Typography>
                </Box>

                <Box sx={{ px: 1, mb: 3 }}>
                  <Slider
                    value={slider.value}
                    onChange={slider.onChange}
                    aria-labelledby={`${slider.id}-slider`}
                    valueLabelDisplay='auto'
                    marks={slider.marks}
                    min={slider.min}
                    max={slider.max}
                    step={slider.step}
                    color={slider.color}
                  />
                </Box>

                <Box
                  sx={{
                    p: 2,
                    backgroundColor: `${slider.color}.light`,
                    borderRadius: 2,
                    border: '2px solid',
                    borderColor: `${slider.color}.main`,
                    textAlign: 'center'
                  }}
                >
                  <Typography
                    variant='h3'
                    sx={{
                      fontSize: { xs: '2.5rem', md: '3rem' },
                      fontWeight: 'bold',
                      color: `${slider.color}.dark`
                    }}
                  >
                    {slider.value}
                    <Typography
                      component='span'
                      sx={{
                        fontSize: { xs: '1.2rem', md: '1.5rem' },
                        ml: 1,
                        color: `${slider.color}.dark`
                      }}
                    >
                      {slider.unit}
                    </Typography>
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

export default SliderSection;
