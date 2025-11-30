import { useState } from 'react';
import { Box, Typography, FormControlLabel, Checkbox, Button, Card, CardContent } from '@mui/material';
import Grid from '@mui/material/Grid';

/**
 * CheckboxSection 컴포넌트
 *
 * MUI Checkbox와 FormControlLabel을 사용한 체크박스 그룹
 * 체크된 항목들을 실시간으로 표시하고 전체 선택/해제 기능 제공
 */
function CheckboxSection() {
  const [interestChecked, setInterestChecked] = useState({
    html: false,
    css: false,
    javascript: false,
    typescript: false
  });

  const [hobbyChecked, setHobbyChecked] = useState({
    reading: false,
    exercise: false,
    movie: false,
    music: false
  });

  const checkboxGroups = [
    {
      title: '관심 있는 기술',
      icon: '💻',
      color: 'primary',
      checked: interestChecked,
      setChecked: setInterestChecked,
      options: [
        { key: 'html', label: 'HTML', icon: '🔴' },
        { key: 'css', label: 'CSS', icon: '🔵' },
        { key: 'javascript', label: 'JavaScript', icon: '🟡' },
        { key: 'typescript', label: 'TypeScript', icon: '🔷' }
      ]
    },
    {
      title: '취미',
      icon: '🎯',
      color: 'secondary',
      checked: hobbyChecked,
      setChecked: setHobbyChecked,
      options: [
        { key: 'reading', label: '독서', icon: '📚' },
        { key: 'exercise', label: '운동', icon: '🏃' },
        { key: 'movie', label: '영화 감상', icon: '🎬' },
        { key: 'music', label: '음악 감상', icon: '🎵' }
      ]
    }
  ];

  const handleChange = (group, event) => {
    group.setChecked({
      ...group.checked,
      [event.target.name]: event.target.checked
    });
  };

  const handleSelectAll = (group) => {
    const newChecked = {};
    group.options.forEach((option) => {
      newChecked[option.key] = true;
    });
    group.setChecked(newChecked);
  };

  const handleDeselectAll = (group) => {
    const newChecked = {};
    group.options.forEach((option) => {
      newChecked[option.key] = false;
    });
    group.setChecked(newChecked);
  };

  const getCheckedItems = (group) => {
    return group.options
      .filter((option) => group.checked[option.key])
      .map((option) => option.label);
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
          Checkbox Section
        </Typography>
        <Typography
          variant='body2'
          sx={{
            textAlign: 'center',
            color: 'text.secondary',
            fontSize: { xs: '0.875rem', md: '1rem' }
          }}
        >
          관심 기술과 취미를 선택하고 전체 선택/해제 기능을 테스트해보세요
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {checkboxGroups.map((group, index) => (
          <Grid key={index} size={{ xs: 12, md: 6 }}>
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
                    {group.icon}
                  </Typography>
                  <Typography
                    variant='h6'
                    sx={{
                      fontWeight: 'bold',
                      color: `${group.color}.main`
                    }}
                  >
                    {group.title}
                  </Typography>
                </Box>

                <Box sx={{ mb: 3 }}>
                  {group.options.map((option) => (
                    <FormControlLabel
                      key={option.key}
                      control={
                        <Checkbox
                          checked={group.checked[option.key]}
                          onChange={(e) => handleChange(group, e)}
                          name={option.key}
                          color={group.color}
                        />
                      }
                      label={
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <Typography component='span' sx={{ fontSize: '1.2rem' }}>
                            {option.icon}
                          </Typography>
                          <Typography component='span'>{option.label}</Typography>
                        </Box>
                      }
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
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
                </Box>

                <Box sx={{ mb: 3, display: 'flex', gap: 2, justifyContent: 'center' }}>
                  <Button
                    variant='outlined'
                    size='small'
                    color={group.color}
                    onClick={() => handleSelectAll(group)}
                  >
                    전체 선택
                  </Button>
                  <Button
                    variant='outlined'
                    size='small'
                    color={group.color}
                    onClick={() => handleDeselectAll(group)}
                  >
                    전체 해제
                  </Button>
                </Box>

                <Box
                  sx={{
                    p: 2,
                    backgroundColor: `${group.color}.light`,
                    borderRadius: 1,
                    minHeight: '60px',
                    border: '1px solid',
                    borderColor: `${group.color}.main`
                  }}
                >
                  <Typography
                    variant='caption'
                    sx={{
                      display: 'block',
                      mb: 0.5,
                      color: `${group.color}.dark`,
                      fontWeight: 'bold'
                    }}
                  >
                    선택된 항목:
                  </Typography>
                  <Typography
                    variant='body1'
                    sx={{
                      fontSize: { xs: '0.9rem', md: '1rem' },
                      fontWeight: 'medium',
                      color: getCheckedItems(group).length > 0 ? `${group.color}.dark` : 'text.disabled'
                    }}
                  >
                    {getCheckedItems(group).length > 0
                      ? getCheckedItems(group).join(', ')
                      : '(선택 안 함)'}
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

export default CheckboxSection;
