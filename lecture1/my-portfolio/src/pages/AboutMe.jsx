/**
 * AboutMe 페이지 컴포넌트
 *
 * Props: 없음
 *
 * Example usage:
 * <AboutMe />
 */

import { Box, Container, Card, CardContent, Typography } from '@mui/material';

function AboutMe() {
  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        py: { xs: 4, md: 8 },
      }}
    >
      <Container maxWidth="md">
        <Card
          sx={{
            borderLeft: 4,
            borderColor: 'primary.main',
          }}
        >
          <CardContent sx={{ p: { xs: 4, md: 6 } }}>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2rem', md: '3rem' },
                mb: 4,
                textAlign: 'center',
              }}
            >
              About Me
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: '1rem', md: '1.2rem' },
                textAlign: 'center',
                lineHeight: 1.8,
              }}
            >
              About Me 페이지가 개발될 공간입니다. 상세한 자기소개가 들어갈 예정입니다.
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}

export default AboutMe;
