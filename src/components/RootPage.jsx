import React  from 'react';
import PageContainer from './PageContainer';
import Grid from '@mui/material/Grid';

const RootPage = () => {
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <PageContainer />
      </Grid>
    </>
  );
};

export default RootPage;