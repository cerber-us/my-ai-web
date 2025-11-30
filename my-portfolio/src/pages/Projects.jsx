import { Box, Container, Typography, Card, CardContent } from '@mui/material';

function Projects() {
  return (
    <Box sx={{ minHeight: '80vh', py: 8 }}>
      <Container maxWidth="lg">
        <Card
          sx={{
            backgroundColor: '#FFFFFF',
            borderTop: '4px solid #FF7B8C',
            minHeight: '60vh',
          }}
        >
          <CardContent sx={{ py: 8, px: 4 }}>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                mb: 4,
                textAlign: 'center'
              }}
            >
              Projects
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: '1.2rem',
                color: '#666666',
                textAlign: 'center',
                lineHeight: 1.8
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
