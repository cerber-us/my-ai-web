import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import Navigation from './components/common/Navigation';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';

function App() {
  return (
    <Router>
      <Box
        sx={{
          width: '100%',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Navigation />
        <Box sx={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </Box>
      </Box>
    </Router>
  );
}

export default App;
