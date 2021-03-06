import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
  button: {
      flexGrow: 1
  },
});

export default function SimpleCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
          Movie Name
        </Typography>
        <Typography color="textSecondary">
          Year
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" className={classes.button}>Remove Nominee</Button>
      </CardActions>
    </Card>
  );
}
