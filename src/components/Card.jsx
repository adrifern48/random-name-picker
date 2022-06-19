import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import PickNameButton from './PickNameButton';
import { names } from '../helpers/get-random-name';

const card = (
  <>
    <CardContent>
    <Typography sx={{ fontSize: 32 }} color="text.secondary" gutterBottom>
        Names
    </Typography>
    <TextField
          defaultValue={names.join(', ') }
          InputProps={{
            readOnly: true,
          }}
          variant="filled"
          style={{ width: '50%' }}
      />
    </CardContent>
    <CardActions style={{ justifyContent: 'center' }}>
      <PickNameButton />
    </CardActions>
  </>
);

const OutlinedCard = () => {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}

export default OutlinedCard;