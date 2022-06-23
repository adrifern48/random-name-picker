import React from 'react';
import Grid from '@mui/material/Grid';
import NameCard from './NameCard';
import PickNameButton from './PickNameButton';
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
        justifyContent="center"
        alignItems="center"
        style={{ marginTop: '1em' }}
      >
        {choices.map(name =>
          <NameCard text={name} picked={name === pickedName} />
        )}
      </Grid>
      <PickNameButton />
    </>
  );
}

export default NamesContainer;