import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import MovieCreationTwoToneIcon from '@material-ui/icons/MovieCreationTwoTone';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

import CardList from "../CardList";
import NomineeCard from "../NomineeCard";
// import { ContactlessOutlined } from '@material-ui/icons';

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
  buttonCenter: {
    flexGrow: 1,
  },
  buttonSpacing: {
    margin: theme.spacing(2, 0, 1),
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  paperStyle: {
    padding: theme.spacing(2),
  }
}));

export default function Main() {
    const classes = useStyles();
    const [formState, setFormState] = useState({ searchQuery: '' });
    const { searchQuery } = formState;

    const [resultState, setResultState] = useState({
        result: []
    });

    const [nomState, setNomState] = useState({
        noms: []
    });

    function handleChange(e) {
        setFormState({...formState, searchQuery: e.target.value })
    };

    function sendToNominees(title, year) {
        console.log("I received " + title + " " + year + " !");
        const nominee = title + "- " + year;

        setNomState({...nomState, noms: nominee});
        console.log(nomState);
    };

    function searchForMovies(e) {
        e.preventDefault();
        const apiUrl = "http://www.omdbapi.com/?s=" + formState.searchQuery + "&type=movie&apikey=bf93edb6";

        fetch(apiUrl).then(function (response) {
            if (response.ok) {
                response.json().then(function (data) {
                    setResultState({...resultState, result: data.Search })
                });
            } else {
                alert("Error: " + response.statusText);
            };
        });
    };

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
            {/* Hero unit */}            
            <main>
                <div className={classes.heroContent}>
                <Container maxWidth="md">
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
                                <form className={classes.root} noValidate autoComplete="off" onSubmit={searchForMovies}>
                                    <Grid>
                                        <Grid item xs={12}>
                                            <TextField id="outlined-basic" label="Search" variant="outlined" 
                                                name="searchQuery" defaultValue={searchQuery} onChange={handleChange}/>                               
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Button variant="contained" color="primary" type="submit" className={classes.buttonSpacing}>
                                                Search
                                            </Button>                                  
                                        </Grid>
                                    </Grid>
                                </form>                    
                            </Grid>
                        </Grid>                           
                        {/* Nomination Box */}
                        <Grid container spacing={2} justify="center">
                            <Grid item xs={12}>
                                <Paper maxwidth="lg" variant="outlined" className={classes.paperStyle}>

                                    <Grid container spacing={2} justify="center">
                                        <Grid item xs={12}>
                                            <Typography variant="h3">
                                                Nominated Movies
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <NomineeCard />                                            
                                        </Grid>
                                        <Grid item>
                                            <NomineeCard />                                            
                                        </Grid>
                                        <Grid item>
                                            <NomineeCard />                                            
                                        </Grid>
                                        <Grid item>
                                            <NomineeCard />                                            
                                        </Grid>
                                        <Grid item>
                                            <NomineeCard />                                            
                                        </Grid>

                                    </Grid>
                                </Paper>
                            </Grid>   
                            <Grid item xs={12}>
                                <Button variant="outlined" color="primary">
                                    Submit Nominations
                                </Button>
                            </Grid>
                        </Grid>
                        {/* End Nomination Box */}
                    </div>
                </Container>
                </div>
        <Container className={classes.cardGrid} maxWidth="md">
            <CardList result={resultState.result} passToParent={sendToNominees}/>
        </Container>
            </main>
            {/* End hero unit */}
            {/* Footer */}
            <footer className={classes.footer}>
                <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                Like my work? Check out my profiles!
                <div>
                    <a className="btn btn-outline-dark btn-social mx-1" 
                        href="https://github.com/adamkeyser45" target="_blank" rel="noreferrer">
                            <i className="fab fa-fw fa-github fa-lg"></i></a>
                    <a className="btn btn-outline-dark btn-social mx-1" 
                        href="https://www.linkedin.com/in/adam-keyser-693741107/" target="_blank" rel="noreferrer">
                            <i className="fab fa-fw fa-linkedin-in fa-lg"></i></a>
                </div>
                </Typography>
                <Copyright />
            </footer>
            {/* End footer */}
        </React.Fragment>
    );
}