import React, { useState }  from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
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
}));

function CardList(props) {
    const classes = useStyles();
    const cards = props.result;

    const [disabledState, setDisabledState] = useState({ isDisabled: false});

    function sendData(title, year) {
        console.log("Hello! " + title + " " + year);
        props.passToParent(title, year);
    }

    const nominate = (title, year) => {
        console.log("Hello! " + title + " " + year);
        // setDisabledState({...disabledState, isDisabled: true});
    }

    return (
        <Grid container spacing={4}>
            {/* Movie Cards */}
            {cards.map((card) => (
                <Grid item key={card.imbdID} xs={12} sm={6} md={4}>
                    <Card className={classes.card}>
                        <CardMedia
                            className={classes.cardMedia}
                            image={card.Poster}
                            title={card.Title}
                        />
                        <CardContent className={classes.cardContent}>
                            <Typography gutterBottom variant="h5" component="h2">
                                {card.Title}
                            </Typography>
                            <Typography>
                                {card.Year}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" color="primary"
                                    disabled={disabledState.isDisabled} 
                                    className={classes.buttonCenter} onClick={() => sendData(card.Title, card.Year)}>
                                Nominate!
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            ))}
            {/* End Movie Cards */}
        </Grid>
    )
}

export default CardList;