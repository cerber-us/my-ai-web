import { useState } from 'react';
import { Box, Typography, TextField } from '@mui/material';
import Grid from '@mui/material/Grid';

/**
 * InputSection 컴포넌트
 *
 * MUI TextField의 다양한 variant를 보여주는 섹션
 * 입력값을 실시간으로 표시
 */
function InputSection() {
  const [standardValue, setStandardValue] = useState('');
  const [outlinedValue, setOutlinedValue] = useState('');
  const [filledValue, setFilledValue] = useState('');

  const inputs = [
    {
      variant: 'standard',
      label: 'Standard',
      placeholder: 'Standard 입력',
      value: standardValue,
      onChange: (e) => setStandardValue(e.target.value)
    },
    {
      variant: 'outlined',
      label: 'Outlined',
      placeholder: 'Outlined 입력',
      value: outlinedValue,
      onChange: (e) => setOutlinedValue(e.target.value)
    },
    {
      variant: 'filled',
      label: 'Filled',
      placeholder: 'Filled 입력',
      value: filledValue,
      onChange: (e) => setFilledValue(e.target.value)
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
          Input Section
        </Typography>
        <Typography
          variant='body2'
          sx={{
            textAlign: 'center',
            color: 'text.secondary',
            fontSize: { xs: '0.875rem', md: '1rem' }
          }}
        >
          텍스트 입력 필드의 세 가지 스타일을 비교하고 실시간 입력을 확인해보세요
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {inputs.map((input) => (
          <Grid key={input.variant} size={{ xs: 12, md: 4 }}>
            <Box>
              <TextField
                variant={input.variant}
                label={input.label}
                placeholder={input.placeholder}
                value={input.value}
                onChange={input.onChange}
                fullWidth
                sx={{ mb: 2 }}
              />
              <Box
                sx={{
                  p: 2,
                  backgroundColor: 'rgba(0, 0, 0, 0.04)',
                  borderRadius: 1,
                  minHeight: '60px'
                }}
              >
                <Typography
                  variant='caption'
                  sx={{
                    display: 'block',
                    mb: 0.5,
                    color: 'text.secondary',
                    fontWeight: 'medium'
                  }}
                >
                  입력값:
                </Typography>
                <Typography
                  variant='body1'
                  sx={{
                    fontSize: { xs: '0.9rem', md: '1rem' },
                    wordBreak: 'break-word',
                    color: input.value ? 'text.primary' : 'text.disabled'
                  }}
                >
                  {input.value || '(입력된 내용이 없습니다)'}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default InputSection;
