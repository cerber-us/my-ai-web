import { useState } from 'react';
import { Box, Typography, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Card, CardContent } from '@mui/material';
import Grid from '@mui/material/Grid';

/**
 * RadioSection 컴포넌트
 *
 * MUI RadioGroup과 FormControlLabel을 사용한 라디오 버튼 그룹
 * 선택값을 실시간으로 표시
 */
function RadioSection() {
  const [level, setLevel] = useState('');
  const [time, setTime] = useState('');
  const [environment, setEnvironment] = useState('');

  const radioGroups = [
    {
      id: 'level',
      title: '프로그래밍 숙련도',
      value: level,
      onChange: (e) => setLevel(e.target.value),
      options: [
        { value: 'beginner', label: '초급', icon: '🌱' },
        { value: 'intermediate', label: '중급', icon: '🌿' },
        { value: 'advanced', label: '고급', icon: '🌳' },
        { value: 'expert', label: '전문가', icon: '🏆' }
      ]
    },
    {
      id: 'time',
      title: '선호하는 작업 시간대',
      value: time,
      onChange: (e) => setTime(e.target.value),
      options: [
        { value: 'morning', label: '아침형', icon: '🌅' },
        { value: 'afternoon', label: '오후형', icon: '☀️' },
        { value: 'evening', label: '저녁형', icon: '🌆' },
        { value: 'night', label: '올빼미형', icon: '🌙' }
      ]
    },
    {
      id: 'environment',
      title: '선호하는 개발 환경',
      value: environment,
      onChange: (e) => setEnvironment(e.target.value),
      options: [
        { value: 'vscode', label: 'VS Code', icon: '💻' },
        { value: 'intellij', label: 'IntelliJ', icon: '🧠' },
        { value: 'vim', label: 'Vim', icon: '⚡' },
        { value: 'webstorm', label: 'WebStorm', icon: '🚀' }
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
          Radio Section
        </Typography>
        <Typography
          variant='body2'
          sx={{
            textAlign: 'center',
            color: 'text.secondary',
            fontSize: { xs: '0.875rem', md: '1rem' }
          }}
        >
          세 가지 카테고리에서 자신에게 맞는 옵션을 선택해보세요
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {radioGroups.map((group) => (
          <Grid key={group.id} size={{ xs: 12, md: 4 }}>
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
                <FormControl component='fieldset' fullWidth>
                  <FormLabel
                    component='legend'
                    sx={{
                      mb: 3,
                      fontWeight: 'bold',
                      fontSize: '1.1rem',
                      textAlign: 'center',
                      color: 'primary.main'
                    }}
                  >
                    {group.title}
                  </FormLabel>
                  <RadioGroup
                    aria-label={group.id}
                    name={group.id}
                    value={group.value}
                    onChange={group.onChange}
                  >
                    {group.options.map((option) => (
                      <FormControlLabel
                        key={option.value}
                        value={option.value}
                        control={<Radio />}
                        label={
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <Typography component='span' sx={{ fontSize: '1.2rem' }}>
                              {option.icon}
                            </Typography>
                            <Typography component='span'>{option.label}</Typography>
                          </Box>
                        }
                        sx={{
                          mb: 1,
                          p: 1,
                          borderRadius: 1,
                          transition: 'background-color 0.2s',
                          '&:hover': {
                            backgroundColor: 'rgba(0, 0, 0, 0.04)'
                          }
                        }}
                      />
                    ))}
                  </RadioGroup>
                </FormControl>

                <Box
                  sx={{
                    mt: 3,
                    p: 2,
                    backgroundColor: 'primary.light',
                    borderRadius: 1,
                    minHeight: '60px',
                    border: '1px solid',
                    borderColor: 'primary.main'
                  }}
                >
                  <Typography
                    variant='caption'
                    sx={{
                      display: 'block',
                      mb: 0.5,
                      color: 'primary.dark',
                      fontWeight: 'bold'
                    }}
                  >
                    선택된 값:
                  </Typography>
                  <Typography
                    variant='body1'
                    sx={{
                      fontSize: { xs: '0.9rem', md: '1rem' },
                      fontWeight: 'medium',
                      color: group.value ? 'primary.dark' : 'text.disabled'
                    }}
                  >
                    {group.value ? (
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Typography component='span' sx={{ fontSize: '1.2rem' }}>
                          {group.options.find((opt) => opt.value === group.value)?.icon}
                        </Typography>
                        <Typography component='span'>
                          {group.options.find((opt) => opt.value === group.value)?.label}
                        </Typography>
                      </Box>
                    ) : (
                      '(선택 안 함)'
                    )}
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

export default RadioSection;
