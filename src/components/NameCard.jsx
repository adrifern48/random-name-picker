import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const NameCard = (props) => {
  return (
    <Card sx={{ minWidth: '8em', margin: '0.5em' }} variant={props.picked && 'outlined'}>
      <CardContent>
        <Typography sx={{ fontSize: 18 }}>
          {props.text}
        </Typography>
      </CardContent>
      <CardActions>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Button size="small">Edit Name</Button>
          <Button size="small">Remove</Button>
        </Grid>
      </CardActions>
    </Card>
  );
};

export default NameCard;