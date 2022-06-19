import React  from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Card from './Card';

const PageContainer = () => {
  return (
    <>
      <CssBaseline />
      <Container fixed>
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }}>
          <Card />
        </Box>
      </Container>
    </>
  );
};

export default PageContainer;