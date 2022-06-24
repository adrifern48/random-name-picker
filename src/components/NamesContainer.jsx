import React from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import NameCard from './NameCard';
import { getRandomName, names } from '../helpers/get-random-name';

const NamesContainer = () => {
  const [choices, setChoices] = React.useState(names);

  const [pickedName, setPickedName] = React.useState('');
  const [namePicked, setNamePicked] = React.useState(false);

  const handlePickName = (_name) => {
    setPickedName(_name);
    setNamePicked(true);
  }

  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="left"
        alignItems="center"
        style={{ marginTop: '1em' }}
      >
        {choices.map(name =>
          <NameCard text={name} picked={name === pickedName} />
        )}
      </Grid>
      <Button
        variant="contained"
        size="large"
        sx={{backgroundColor: '#6202EE', marginTop: '3em'}}
      onClick={() => { handlePickName(getRandomName(names)) }} 
      >
        Pick Name
      </Button>
      
    </>
  );
}

export default NamesContainer;