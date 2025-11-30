import { Box, Typography, Card, CardContent, CardActions, Button } from '@mui/material';
import Grid from '@mui/material/Grid';

/**
 * CardSection 컴포넌트
 *
 * MUI Card 컴포넌트를 사용한 카드 레이아웃
 * 호버 효과와 그림자 포함
 */
function CardSection() {
  const cards = [
    {
      id: 1,
      title: 'React',
      description: '사용자 인터페이스를 구축하기 위한 JavaScript 라이브러리입니다. 컴포넌트 기반 구조로 재사용성이 높습니다.',
      color: '#61dafb'
    },
    {
      id: 2,
      title: 'Material-UI',
      description: 'Google의 Material Design을 구현한 React 컴포넌트 라이브러리입니다. 빠르고 아름다운 UI를 만들 수 있습니다.',
      color: '#007fff'
    },
    {
      id: 3,
      title: 'Vite',
      description: '빠른 개발 서버와 최적화된 빌드를 제공하는 차세대 프론트엔드 빌드 도구입니다.',
      color: '#646cff'
    }
  ];

  const handleLearnMore = (title) => {
    alert(`${title}에 대해 더 알아보기를 클릭했습니다!`);
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
          Card Section
        </Typography>
        <Typography
          variant='body2'
          sx={{
            textAlign: 'center',
            color: 'text.secondary',
            fontSize: { xs: '0.875rem', md: '1rem' }
          }}
        >
          카드에 마우스를 올려 호버 효과를 확인하고 버튼을 클릭해보세요
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {cards.map((card) => (
          <Grid key={card.id} size={{ xs: 12, md: 4 }}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: 6
                }
              }}
            >
              <Box
                sx={{
                  height: 8,
                  backgroundColor: card.color
                }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography
                  variant='h5'
                  component='h3'
                  gutterBottom
                  sx={{ fontWeight: 'bold' }}
                >
                  {card.title}
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  {card.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size='small' onClick={() => handleLearnMore(card.title)}>
                  더 알아보기
                </Button>
                <Button size='small' color='primary'>
                  공유
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default CardSection;
