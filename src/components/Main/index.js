import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import MovieCreationTwoToneIcon from '@material-ui/icons/MovieCreationTwoTone';
import TextField from '@material-ui/core/TextField';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Movie Nominator
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  buttonCenter: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <MovieCreationTwoToneIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            Movie Nominator
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Movie Nominator
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Search for a movie in the bar below to nominate it for an award!
              Be aware that you can only nominate up to 5 movies!
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item xs={12}>
                    <form className={classes.root} noValidate autoComplete="off">
                        <TextField id="outlined-basic" label="Search" variant="outlined" />
                    </form>                    
                </Grid>
                {/* <Grid item>
                  <Button variant="contained" color="primary">
                    Search
                  </Button>
                </Grid> */}
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Submit Nominations
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Movie Title
                    </Typography>
                    <Typography>
                      This is where the movie description will go.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary" className={classes.buttonCenter}>
                      Nominate!
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Like my work? Check out my profiles!
          <div>
            <a className="btn btn-outline-dark btn-social mx-1" 
                href="https://github.com/adamkeyser45">
                    <i className="fab fa-fw fa-github fa-lg" style={{background:"SkyBlue"}}></i></a>
            <a className="btn btn-outline-dark btn-social mx-1" 
                href="https://www.linkedin.com/in/adam-keyser-693741107/">
                    <i className="fab fa-fw fa-linkedin-in fa-lg" style={{background:"SkyBlue"}}></i></a>
          </div>

        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}