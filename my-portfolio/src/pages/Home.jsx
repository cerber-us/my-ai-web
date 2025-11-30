import { Box, Container, Typography, Button, Card, CardContent } from '@mui/material';

function Home() {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #6ED5E0 0%, #5CBFCC 50%, #4DA9B5 100%)',
          minHeight: '60vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          py: 8,
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h1" sx={{ fontSize: { xs: '2.5rem', md: '4rem' }, mb: 3 }}>
            여기는 Hero 섹션입니다
          </Typography>
          <Typography variant="h4" sx={{ color: '#FFFFFF', fontWeight: 400 }}>
            메인 비주얼, 이름, 간단 소개가 들어갈 예정입니다.
          </Typography>
        </Container>
      </Box>

      {/* About Me Section */}
      <Container maxWidth="lg" sx={{ my: 8 }}>
        <Card
          sx={{
            backgroundColor: '#FFFFFF',
            borderTop: '4px solid #FFB84D',
          }}
        >
          <CardContent sx={{ py: 6, px: 4 }}>
            <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '3rem' }, mb: 3 }}>
              About Me
            </Typography>
            <Typography variant="body1" sx={{ fontSize: '1.1rem', mb: 4, color: '#666666' }}>
              여기는 About Me 섹션입니다. 간단한 자기소개와 '더 알아보기' 버튼이 들어갈 예정입니다.
            </Typography>
            <Button variant="contained" color="primary" size="large">
              더 알아보기
            </Button>
          </CardContent>
        </Card>
      </Container>

      {/* Skill Tree Section */}
      <Box sx={{ backgroundColor: '#F8F9FA', py: 8 }}>
        <Container maxWidth="lg">
          <Card>
            <CardContent sx={{ py: 6, px: 4 }}>
              <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '3rem' }, mb: 3 }}>
                Skill Tree
              </Typography>
              <Typography variant="body1" sx={{ fontSize: '1.1rem', color: '#666666' }}>
                여기는 Skill Tree 섹션입니다. 기술 스택을 트리나 프로그레스바로 시각화할 예정입니다.
              </Typography>
            </CardContent>
          </Card>
        </Container>
      </Box>

      {/* Projects Section */}
      <Container maxWidth="lg" sx={{ my: 8 }}>
        <Card
          sx={{
            backgroundColor: '#FFFFFF',
            borderTop: '4px solid #FF7B8C',
          }}
        >
          <CardContent sx={{ py: 6, px: 4 }}>
            <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '3rem' }, mb: 3 }}>
              Projects
            </Typography>
            <Typography variant="body1" sx={{ fontSize: '1.1rem', mb: 4, color: '#666666' }}>
              여기는 Projects 섹션입니다. 대표작 썸네일 3-4개와 '더 보기' 버튼이 들어갈 예정입니다.
            </Typography>
            <Button variant="contained" color="secondary" size="large">
              더 보기
            </Button>
          </CardContent>
        </Card>
      </Container>

      {/* Contact Section */}
      <Box
        sx={{
          backgroundColor: '#5CBFCC',
          py: 8,
        }}
      >
        <Container maxWidth="lg">
          <Card
            sx={{
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
            }}
          >
            <CardContent sx={{ py: 6, px: 4 }}>
              <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '3rem' }, mb: 3 }}>
                Contact
              </Typography>
              <Typography variant="body1" sx={{ fontSize: '1.1rem', color: '#666666' }}>
                여기는 Contact 섹션입니다. 연락처, SNS, 간단한 메시지 폼이 들어갈 예정입니다.
              </Typography>
            </CardContent>
          </Card>
        </Container>
      </Box>
    </Box>
  );
}

export default Home;
