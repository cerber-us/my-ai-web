import { useState } from 'react';
import { Box, Typography, Paper } from '@mui/material';
import Grid from '@mui/material/Grid';

/**
 * DragDropSection 컴포넌트
 *
 * HTML5 드래그 API를 사용한 드래그 앤 드롭 인터페이스
 * 드래그 시 시각적 피드백 제공
 */
function DragDropSection() {
  const [droppedItems, setDroppedItems] = useState([]);
  const [draggedItem, setDraggedItem] = useState(null);

  const items = [
    { id: 1, name: 'React', icon: '⚛️' },
    { id: 2, name: 'JavaScript', icon: '📜' },
    { id: 3, name: 'TypeScript', icon: '📘' }
  ];

  const handleDragStart = (e, item) => {
    setDraggedItem(item);
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', e.target.innerHTML);
  };

  const handleDragEnd = () => {
    setDraggedItem(null);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDrop = (e) => {
    e.preventDefault();
    if (draggedItem && !droppedItems.find((item) => item.id === draggedItem.id)) {
      setDroppedItems([...droppedItems, draggedItem]);
    }
    setDraggedItem(null);
  };

  const handleRemoveFromDropZone = (itemId) => {
    setDroppedItems(droppedItems.filter((item) => item.id !== itemId));
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
          Drag & Drop Section
        </Typography>
        <Typography
          variant='body2'
          sx={{
            textAlign: 'center',
            color: 'text.secondary',
            fontSize: { xs: '0.875rem', md: '1rem' }
          }}
        >
          아이템을 드래그하여 드롭 영역으로 이동시키고 시각적 피드백을 확인해보세요
        </Typography>
      </Box>

      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography variant='h6' gutterBottom sx={{ fontWeight: 'medium' }}>
            드래그 가능한 아이템
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {items.map((item) => (
              <Paper
                key={item.id}
                draggable
                onDragStart={(e) => handleDragStart(e, item)}
                onDragEnd={handleDragEnd}
                sx={{
                  p: 2,
                  cursor: 'move',
                  opacity: droppedItems.find((i) => i.id === item.id) ? 0.4 : 1,
                  backgroundColor: draggedItem?.id === item.id ? 'primary.light' : 'background.paper',
                  border: '2px solid',
                  borderColor: draggedItem?.id === item.id ? 'primary.main' : 'divider',
                  transition: 'all 0.3s',
                  '&:hover': {
                    borderColor: 'primary.main',
                    boxShadow: 2
                  }
                }}
              >
                <Typography variant='body1'>
                  {item.icon} {item.name}
                </Typography>
              </Paper>
            ))}
          </Box>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Typography variant='h6' gutterBottom sx={{ fontWeight: 'medium' }}>
            드롭 영역
          </Typography>
          <Paper
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            sx={{
              p: 3,
              minHeight: 200,
              backgroundColor: draggedItem ? 'primary.light' : 'grey.100',
              border: '2px dashed',
              borderColor: draggedItem ? 'primary.main' : 'grey.400',
              transition: 'all 0.3s',
              display: 'flex',
              flexDirection: 'column',
              gap: 2
            }}
          >
            {droppedItems.length === 0 ? (
              <Typography
                variant='body2'
                sx={{
                  textAlign: 'center',
                  color: 'text.secondary',
                  mt: 8
                }}
              >
                여기로 아이템을 드래그하세요
              </Typography>
            ) : (
              droppedItems.map((item) => (
                <Paper
                  key={item.id}
                  onClick={() => handleRemoveFromDropZone(item.id)}
                  sx={{
                    p: 2,
                    cursor: 'pointer',
                    backgroundColor: 'success.light',
                    '&:hover': {
                      backgroundColor: 'error.light'
                    }
                  }}
                >
                  <Typography variant='body1'>
                    {item.icon} {item.name} (클릭하여 제거)
                  </Typography>
                </Paper>
              ))
            )}
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default DragDropSection;
