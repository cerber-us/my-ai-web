import { Box, Container, Typography } from '@mui/material';
import ButtonSection from './components/sections/ButtonSection.jsx';
import InputSection from './components/sections/InputSection.jsx';
import NavigationSection from './components/sections/NavigationSection.jsx';
import DropdownSection from './components/sections/DropdownSection.jsx';
import CheckboxSection from './components/sections/CheckboxSection.jsx';
import RadioSection from './components/sections/RadioSection.jsx';
import SliderSection from './components/sections/SliderSection.jsx';
import ModalSection from './components/sections/ModalSection.jsx';
import CardSection from './components/sections/CardSection.jsx';
import DragDropSection from './components/sections/DragDropSection.jsx';
import ScrollSection from './components/sections/ScrollSection.jsx';
import AnimationSection from './components/sections/AnimationSection.jsx';
import MenuSection from './components/sections/MenuSection.jsx';
import SidebarSection from './components/sections/SidebarSection.jsx';
import HoverSection from './components/sections/HoverSection.jsx';
import SwipeSection from './components/sections/SwipeSection.jsx';
import FlexboxNavigationSection from './components/sections/FlexboxNavigationSection.jsx';

/**
 * App 컴포넌트
 *
 * 16개 UI 요소를 순차적으로 섹션 단위로 추가할 수 있는 기본 레이아웃
 * 네비게이션 없이 깔끔한 구조로 구성
 */
function App() {
  return (
    <Box sx={{
      width: '100%',
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      py: { xs: 2, md: 4 }
    }}>
      <Container maxWidth='lg' sx={{ py: 4 }}>
        <Typography
          variant='h2'
          component='h1'
          sx={{
            fontSize: { xs: '2rem', md: '3rem' },
            fontWeight: 'bold',
            textAlign: 'center',
            mb: 4
          }}
        >
          UI Test Project
        </Typography>

        <Typography
          variant='body1'
          sx={{
            fontSize: { xs: '1rem', md: '1.2rem' },
            textAlign: 'center',
            color: 'text.secondary',
            mb: 6
          }}
        >
          16개의 UI 요소를 섹션별로 추가할 준비가 완료되었습니다.
        </Typography>

        {/* 여기에 섹션 컴포넌트들을 추가하세요 */}
        <Box sx={{ mt: 4 }}>
          <ButtonSection />
          <InputSection />
          <NavigationSection />
          <DropdownSection />
          <CheckboxSection />
          <RadioSection />
          <SliderSection />
          <ModalSection />
          <CardSection />
          <DragDropSection />
          <ScrollSection />
          <AnimationSection />
          <MenuSection />
          <SidebarSection />
          <HoverSection />
          <SwipeSection />
          <FlexboxNavigationSection />
        </Box>
      </Container>
    </Box>
  );
}

export default App;
