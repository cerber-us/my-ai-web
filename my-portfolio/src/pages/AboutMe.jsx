import { Box, Container, Typography, Card, CardContent } from '@mui/material';

function AboutMe() {
  return (
    <Box sx={{ minHeight: '80vh', py: 8 }}>
      <Container maxWidth="lg">
        <Card
          sx={{
            backgroundColor: '#FFFFFF',
            borderTop: '4px solid #FFB84D',
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
              About Me
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
              About Me 페이지가 개발될 공간입니다. 상세한 자기소개가 들어갈 예정입니다.
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}

export default AboutMe;
