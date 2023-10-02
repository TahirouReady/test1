import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { Grid, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    boilerPlate: {
        textAlign: 'center',
        '& .templateTitle': {
            color: theme.palette.secondary.main
        }
    }
}));

export default function App() {
    const classes = useStyles();
    const BoilerPlate = () => {
        return (
            <div className={classes.boilerPlate}>
                <Typography variant="h4">Hello CodeSandbox</Typography>
                <Typography variant="overline" className="templateTitle">
                    Material UI - Template
                </Typography>
                <Typography variant="h5">Start editing to see some magic happen!</Typography>
            </div>
        );
    };

    return (
        <BrowserRouter>
            <Paper elevation={5}>
                <Grid container direction="row" justify="center" alignItems="center">
                    <Grid container direction="column" justify="center" alignItems="center">
                        <Route path="/" exact component={BoilerPlate} />
                    </Grid>
                </Grid>
            </Paper>
        </BrowserRouter>
    );
}
