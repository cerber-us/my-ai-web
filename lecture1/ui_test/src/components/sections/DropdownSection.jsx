import { useState } from 'react';
import { Box, Typography, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import Grid from '@mui/material/Grid';

/**
 * DropdownSection 컴포넌트
 *
 * MUI Select와 MenuItem을 사용한 드롭다운 메뉴
 * 선택값을 실시간으로 표시
 */
function DropdownSection() {
  const [framework, setFramework] = useState('');
  const [language, setLanguage] = useState('');
  const [category, setCategory] = useState('');

  const dropdowns = [
    {
      id: 'framework',
      label: '프레임워크 선택',
      value: framework,
      onChange: (e) => setFramework(e.target.value),
      options: [
        { value: 'react', label: 'React' },
        { value: 'vue', label: 'Vue.js' },
        { value: 'angular', label: 'Angular' },
        { value: 'svelte', label: 'Svelte' },
        { value: 'next', label: 'Next.js' }
      ]
    },
    {
      id: 'language',
      label: '프로그래밍 언어',
      value: language,
      onChange: (e) => setLanguage(e.target.value),
      options: [
        { value: 'javascript', label: 'JavaScript' },
        { value: 'typescript', label: 'TypeScript' },
        { value: 'python', label: 'Python' },
        { value: 'java', label: 'Java' },
        { value: 'cpp', label: 'C++' }
      ]
    },
    {
      id: 'category',
      label: '카테고리',
      value: category,
      onChange: (e) => setCategory(e.target.value),
      options: [
        { value: 'frontend', label: '프론트엔드' },
        { value: 'backend', label: '백엔드' },
        { value: 'mobile', label: '모바일' },
        { value: 'devops', label: 'DevOps' },
        { value: 'database', label: '데이터베이스' }
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
          Dropdown Section
        </Typography>
        <Typography
          variant='body2'
          sx={{
            textAlign: 'center',
            color: 'text.secondary',
            fontSize: { xs: '0.875rem', md: '1rem' }
          }}
        >
          세 가지 드롭다운 메뉴에서 원하는 항목을 선택하고 결과를 확인해보세요
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {dropdowns.map((dropdown) => (
          <Grid key={dropdown.id} size={{ xs: 12, md: 4 }}>
            <Box>
              <FormControl fullWidth>
                <InputLabel id={`${dropdown.id}-select-label`}>
                  {dropdown.label}
                </InputLabel>
                <Select
                  labelId={`${dropdown.id}-select-label`}
                  id={`${dropdown.id}-select`}
                  value={dropdown.value}
                  label={dropdown.label}
                  onChange={dropdown.onChange}
                >
                  <MenuItem value=''>
                    <em>선택 안 함</em>
                  </MenuItem>
                  {dropdown.options.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <Box
                sx={{
                  mt: 2,
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
                  선택된 값:
                </Typography>
                <Typography
                  variant='body1'
                  sx={{
                    fontSize: { xs: '0.9rem', md: '1rem' },
                    color: dropdown.value ? 'text.primary' : 'text.disabled'
                  }}
                >
                  {dropdown.value
                    ? dropdown.options.find((opt) => opt.value === dropdown.value)?.label
                    : '(선택 안 함)'}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default DropdownSection;
