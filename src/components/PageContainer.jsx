import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import NamesContainer from './NamesContainer';

const PageContainer = () => {
  return (
    <>
      <Container fixed style={{ marginTop: '1em' }}>
        <Typography variant="h2" gutterBottom component="div">
          Random Name Picker
        </Typography>
        <NamesContainer />
      </Container>
    </>
  );
};

export default PageContainer;