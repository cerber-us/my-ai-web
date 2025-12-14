/**
 * Projects 페이지 컴포넌트
 *
 * Props: 없음
 *
 * Example usage:
 * <Projects />
 */

import { Box, Container, Card, CardContent, Typography } from '@mui/material';

function Projects() {
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
            borderColor: 'secondary.main',
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
              Projects
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: '1rem', md: '1.2rem' },
                textAlign: 'center',
                lineHeight: 1.8,
              }}
            >
              Projects 페이지가 개발될 공간입니다. 포트폴리오 작품들이 들어갈 예정입니다.
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}

export default Projects;
