import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import '../App.css';
import TextField from '@mui/material/TextField';

const NameCard = (props) => {
  const [text, setText] = React.useState(props.text);
  const [editName, setEditName ] = React.useState(false);

  const handleNameChange = (e) => { 
    setText(e.target.value); 
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      setEditName(false);
    }
  };

  return (
    <Card sx={{ minWidth: '8em', margin: '0.5em' }} variant={props.picked && 'outlined'} className={props.picked ? "CardStyle-Picked" : "CardStyle"}>
      <CardContent>
      <TextField
          disabled={!editName}
          defaultValue={text}
          onChange={handleNameChange}
          onKeyDown={handleKeyPress}
      />
      </CardContent>
      <CardActions>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Button size="small" onClick={() => setEditName(true)} variant="outlined">Edit Name</Button>
          <Button size="small" variant="outlined">Remove</Button>
        </Grid>
      </CardActions>
    </Card>
  );
};

export default NameCard;