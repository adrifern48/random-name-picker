import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import NamesContainer from './NamesContainer';

const PageContainer = () => {
  return (
    <>
      <Container fixed style={{ marginTop: '2em', textAlign: 'left'}}>
        <Typography variant="h2" gutterBottom component="div" sx={{ fontWeight: '900' }}>
          Random Name Picker
        </Typography>
        <NamesContainer />
      </Container>
    </>
  );
};

export default PageContainer;