/**
 * Home 페이지 컴포넌트
 *
 * Props: 없음
 *
 * Example usage:
 * <Home />
 */

import { Box, Container, Card, CardContent, Typography, Button } from '@mui/material';
import Grid from '@mui/material/Grid';

function Home() {
  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '100vh',
        py: { xs: 2, md: 4 },
      }}
    >
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #FFF9E6 0%, #FFFFFF 100%)',
          py: { xs: 8, md: 12 },
          textAlign: 'center',
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2rem', md: '3rem' },
              mb: 2,
            }}
          >
            여기는 Hero 섹션입니다
          </Typography>
          <Typography variant="body1" sx={{ mb: 4 }}>
            메인 비주얼, 이름, 간단 소개가 들어갈 예정입니다.
          </Typography>
        </Container>
      </Box>

      {/* About Me Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        <Card
          sx={{
            borderLeft: 4,
            borderColor: 'primary.main',
          }}
        >
          <CardContent sx={{ p: { xs: 3, md: 5 } }}>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '1.75rem', md: '2.5rem' },
                mb: 3,
              }}
            >
              여기는 About Me 섹션입니다
            </Typography>
            <Typography variant="body1" sx={{ mb: 3 }}>
              간단한 자기소개와 '더 알아보기' 버튼이 들어갈 예정입니다.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              sx={{ mt: 2 }}
            >
              더 알아보기
            </Button>
          </CardContent>
        </Card>
      </Container>

      {/* Skill Tree Section */}
      <Box
        sx={{
          backgroundColor: 'background.paper',
          py: { xs: 6, md: 10 },
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '1.75rem', md: '2.5rem' },
              mb: 5,
              textAlign: 'center',
            }}
          >
            여기는 Skill Tree 섹션입니다
          </Typography>
          <Typography variant="body1" sx={{ textAlign: 'center', mb: 4 }}>
            기술 스택을 트리나 프로그레스바로 시각화할 예정입니다.
          </Typography>
          <Grid container spacing={3}>
            <Grid size={{ xs: 12, md: 4 }}>
              <Card>
                <CardContent sx={{ textAlign: 'center', p: 4 }}>
                  <Typography variant="h5" sx={{ mb: 2 }}>
                    Frontend
                  </Typography>
                  <Typography variant="body2">
                    스킬 내용 예정
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Card>
                <CardContent sx={{ textAlign: 'center', p: 4 }}>
                  <Typography variant="h5" sx={{ mb: 2 }}>
                    Backend
                  </Typography>
                  <Typography variant="body2">
                    스킬 내용 예정
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Card>
                <CardContent sx={{ textAlign: 'center', p: 4 }}>
                  <Typography variant="h5" sx={{ mb: 2 }}>
                    Tools
                  </Typography>
                  <Typography variant="body2">
                    스킬 내용 예정
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Projects Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: '1.75rem', md: '2.5rem' },
            mb: 5,
            textAlign: 'center',
          }}
        >
          여기는 Projects 섹션입니다
        </Typography>
        <Typography variant="body1" sx={{ textAlign: 'center', mb: 4 }}>
          대표작 썸네일 3-4개와 '더 보기' 버튼이 들어갈 예정입니다.
        </Typography>
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Card
              sx={{
                borderLeft: 4,
                borderColor: 'secondary.main',
              }}
            >
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h5" sx={{ mb: 2 }}>
                  프로젝트 1
                </Typography>
                <Typography variant="body2">
                  프로젝트 설명이 들어갈 예정입니다.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Card
              sx={{
                borderLeft: 4,
                borderColor: 'secondary.main',
              }}
            >
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h5" sx={{ mb: 2 }}>
                  프로젝트 2
                </Typography>
                <Typography variant="body2">
                  프로젝트 설명이 들어갈 예정입니다.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Button variant="outlined" color="secondary">
            더 보기
          </Button>
        </Box>
      </Container>

      {/* Contact Section */}
      <Box
        sx={{
          backgroundColor: 'background.paper',
          py: { xs: 6, md: 10 },
        }}
      >
        <Container maxWidth="md">
          <Card
            sx={{
              borderLeft: 4,
              borderColor: '#FF69B4',
            }}
          >
            <CardContent sx={{ p: { xs: 3, md: 5 } }}>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '1.75rem', md: '2.5rem' },
                  mb: 3,
                  textAlign: 'center',
                }}
              >
                여기는 Contact 섹션입니다
              </Typography>
              <Typography variant="body1" sx={{ textAlign: 'center' }}>
                연락처, SNS, 간단한 메시지 폼이 들어갈 예정입니다.
              </Typography>
            </CardContent>
          </Card>
        </Container>
      </Box>
    </Box>
  );
}

export default Home;
