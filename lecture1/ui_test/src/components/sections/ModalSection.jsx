import { useState } from 'react';
import { Box, Typography, Button, Dialog, DialogTitle, DialogContent, DialogActions, DialogContentText, TextField, Card, CardContent } from '@mui/material';
import Grid from '@mui/material/Grid';

/**
 * ModalSection 컴포넌트
 *
 * MUI Dialog 컴포넌트를 사용한 다양한 유형의 모달 창
 * 기본, 폼, 확인, 전체화면 모달 제공
 */
function ModalSection() {
  // 기본 모달
  const [basicOpen, setBasicOpen] = useState(false);

  // 폼 모달
  const [formOpen, setFormOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [submittedData, setSubmittedData] = useState(null);

  // 확인 모달
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [confirmResult, setConfirmResult] = useState('');

  // 전체화면 모달
  const [fullscreenOpen, setFullscreenOpen] = useState(false);

  // 기본 모달 핸들러
  const handleBasicOpen = () => setBasicOpen(true);
  const handleBasicClose = () => setBasicOpen(false);

  // 폼 모달 핸들러
  const handleFormOpen = () => {
    setFormOpen(true);
    setFormData({ name: '', email: '' });
  };
  const handleFormClose = () => setFormOpen(false);
  const handleFormSubmit = () => {
    setSubmittedData({ ...formData });
    setFormOpen(false);
  };
  const handleFormChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  // 확인 모달 핸들러
  const handleConfirmOpen = () => setConfirmOpen(true);
  const handleConfirmClose = () => setConfirmOpen(false);
  const handleConfirm = () => {
    setConfirmResult('확인을 선택했습니다! ✅');
    setConfirmOpen(false);
  };
  const handleCancel = () => {
    setConfirmResult('취소를 선택했습니다! ❌');
    setConfirmOpen(false);
  };

  // 전체화면 모달 핸들러
  const handleFullscreenOpen = () => setFullscreenOpen(true);
  const handleFullscreenClose = () => setFullscreenOpen(false);

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
          Modal Section
        </Typography>
        <Typography
          variant='body2'
          sx={{
            textAlign: 'center',
            color: 'text.secondary',
            fontSize: { xs: '0.875rem', md: '1rem' }
          }}
        >
          네 가지 유형의 모달을 열어보고 각각의 기능을 테스트해보세요
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {/* 기본 모달 */}
        <Grid size={{ xs: 12, sm: 6 }}>
          <Card sx={{ height: '100%', boxShadow: 2 }}>
            <CardContent sx={{ p: 3, textAlign: 'center' }}>
              <Typography variant='h6' sx={{ mb: 2, fontWeight: 'bold' }}>
                📄 기본 모달
              </Typography>
              <Typography variant='body2' color='text.secondary' sx={{ mb: 3 }}>
                일반적인 정보 전달용 모달입니다
              </Typography>
              <Button variant='contained' onClick={handleBasicOpen} fullWidth>
                열기
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* 폼 모달 */}
        <Grid size={{ xs: 12, sm: 6 }}>
          <Card sx={{ height: '100%', boxShadow: 2 }}>
            <CardContent sx={{ p: 3, textAlign: 'center' }}>
              <Typography variant='h6' sx={{ mb: 2, fontWeight: 'bold' }}>
                📝 폼 모달
              </Typography>
              <Typography variant='body2' color='text.secondary' sx={{ mb: 3 }}>
                이름과 이메일을 입력하는 폼 모달입니다
              </Typography>
              <Button variant='contained' color='success' onClick={handleFormOpen} fullWidth>
                열기
              </Button>
              {submittedData && (
                <Box sx={{ mt: 2, p: 1, backgroundColor: 'success.light', borderRadius: 1 }}>
                  <Typography variant='caption' sx={{ fontSize: '0.75rem' }}>
                    제출: {submittedData.name} ({submittedData.email})
                  </Typography>
                </Box>
              )}
            </CardContent>
          </Card>
        </Grid>

        {/* 확인 모달 */}
        <Grid size={{ xs: 12, sm: 6 }}>
          <Card sx={{ height: '100%', boxShadow: 2 }}>
            <CardContent sx={{ p: 3, textAlign: 'center' }}>
              <Typography variant='h6' sx={{ mb: 2, fontWeight: 'bold' }}>
                ✅ 확인 모달
              </Typography>
              <Typography variant='body2' color='text.secondary' sx={{ mb: 3 }}>
                확인/취소를 선택하는 모달입니다
              </Typography>
              <Button variant='contained' color='warning' onClick={handleConfirmOpen} fullWidth>
                열기
              </Button>
              {confirmResult && (
                <Box sx={{ mt: 2, p: 1, backgroundColor: 'warning.light', borderRadius: 1 }}>
                  <Typography variant='caption' sx={{ fontSize: '0.75rem' }}>
                    {confirmResult}
                  </Typography>
                </Box>
              )}
            </CardContent>
          </Card>
        </Grid>

        {/* 전체화면 모달 */}
        <Grid size={{ xs: 12, sm: 6 }}>
          <Card sx={{ height: '100%', boxShadow: 2 }}>
            <CardContent sx={{ p: 3, textAlign: 'center' }}>
              <Typography variant='h6' sx={{ mb: 2, fontWeight: 'bold' }}>
                🖥️ 전체화면 모달
              </Typography>
              <Typography variant='body2' color='text.secondary' sx={{ mb: 3 }}>
                화면 전체를 차지하는 모달입니다
              </Typography>
              <Button variant='contained' color='error' onClick={handleFullscreenOpen} fullWidth>
                열기
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* 기본 모달 */}
      <Dialog
        open={basicOpen}
        onClose={handleBasicClose}
        maxWidth='sm'
        fullWidth
      >
        <DialogTitle>📄 기본 모달</DialogTitle>
        <DialogContent>
          <DialogContentText>
            이것은 기본적인 정보 전달용 모달입니다.
            <br /><br />
            모달 창 밖의 배경을 클릭하거나 '닫기' 버튼을 클릭하여 모달을 닫을 수 있습니다.
            <br /><br />
            모달은 사용자의 주의를 집중시키고 중요한 정보를 표시하는 데 사용됩니다.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleBasicClose} variant='contained'>
            닫기
          </Button>
        </DialogActions>
      </Dialog>

      {/* 폼 모달 */}
      <Dialog
        open={formOpen}
        onClose={handleFormClose}
        maxWidth='sm'
        fullWidth
      >
        <DialogTitle>📝 폼 모달</DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ mb: 2 }}>
            아래 정보를 입력해주세요.
          </DialogContentText>
          <TextField
            autoFocus
            margin='dense'
            label='이름'
            type='text'
            fullWidth
            variant='outlined'
            value={formData.name}
            onChange={(e) => handleFormChange('name', e.target.value)}
            sx={{ mb: 2 }}
          />
          <TextField
            margin='dense'
            label='이메일'
            type='email'
            fullWidth
            variant='outlined'
            value={formData.email}
            onChange={(e) => handleFormChange('email', e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleFormClose}>
            취소
          </Button>
          <Button onClick={handleFormSubmit} variant='contained' color='success'>
            제출
          </Button>
        </DialogActions>
      </Dialog>

      {/* 확인 모달 */}
      <Dialog
        open={confirmOpen}
        onClose={handleConfirmClose}
        maxWidth='xs'
        fullWidth
      >
        <DialogTitle>✅ 확인 모달</DialogTitle>
        <DialogContent>
          <DialogContentText>
            정말로 이 작업을 수행하시겠습니까?
            <br /><br />
            확인을 누르면 작업이 진행되고, 취소를 누르면 작업이 취소됩니다.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel} variant='outlined'>
            취소
          </Button>
          <Button onClick={handleConfirm} variant='contained' color='warning' autoFocus>
            확인
          </Button>
        </DialogActions>
      </Dialog>

      {/* 전체화면 모달 */}
      <Dialog
        open={fullscreenOpen}
        onClose={handleFullscreenClose}
        fullScreen
      >
        <DialogTitle>🖥️ 전체화면 모달</DialogTitle>
        <DialogContent>
          <DialogContentText>
            이것은 화면 전체를 차지하는 전체화면 모달입니다.
            <br /><br />
            모바일 기기나 복잡한 콘텐츠를 표시할 때 유용합니다.
          </DialogContentText>
          <Box sx={{ mt: 4, p: 3, backgroundColor: 'rgba(0, 0, 0, 0.04)', borderRadius: 2 }}>
            <Typography variant='h6' gutterBottom>
              전체화면 모달의 장점
            </Typography>
            <Typography variant='body2' paragraph>
              • 화면 전체를 활용하여 더 많은 정보를 표시할 수 있습니다
            </Typography>
            <Typography variant='body2' paragraph>
              • 모바일 기기에서 앱과 같은 경험을 제공합니다
            </Typography>
            <Typography variant='body2' paragraph>
              • 복잡한 폼이나 상세한 콘텐츠에 적합합니다
            </Typography>
            <Typography variant='body2'>
              • 사용자의 완전한 집중을 유도할 수 있습니다
            </Typography>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleFullscreenClose} variant='contained' color='error'>
            닫기
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default ModalSection;
