import React from "react";
import { DialogActions, Dialog, DialogTitle, DialogContent, DialogContentText, Grid, Card, Typography, CardContent, CardActions, Button } from "@material-ui/core"
import { getMatchDetail } from "../api/Api";
import { useState } from 'react';

const MyCard = ({ match }) => {

    const [detail, setDetail] = useState({});
    const [open, setOpen] = useState(false);

    const handleClick = (id) => {
        getMatchDetail(id)
            .then((data) => {
                console.log("MATCH DATA", data);
                setDetail(data);
                handleOpen();
            })
            .catch((error) => console.log(error));
    }
    const getMatchCart = () => {
        return (
            <Card>
                <CardContent>
                    <Grid container justify="center" spacing={4}>
                        <Grid item >
                            <Typography>{match["team-1"]}</Typography>
                        </Grid>
                        <Grid item >

                            <img style={{ width: 80 }} src={require("../img/vs.jpg")} alt="" />
                        </Grid>
                        <Grid item >
                            <Typography>{match["team-2"]}</Typography>
                        </Grid>
                    </Grid>





                </CardContent>
                <CardActions>
                    <Grid container justify="center" >
                        <Button onClick={() => {
                            handleClick(match.unique_id)
                        }} variant="contained" color="primary" >
                            show Details
                    </Button>
                        <Button variant="contained" color="primary">
                            start Time {new Date(match.dateTimeGMT).toLocaleString()}
                        </Button>
                    </Grid>
                </CardActions>
            </Card>
        )

    }
    const handleClose = () => {
        setOpen(false);

    }
    const handleOpen = () => {
        setOpen(true);

    }
    const getDialogue = () => (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle id="alert-dialog-title">{"Match Detail.."}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    <Typography>{detail.stat}</Typography>
                    <Typography>
                        Match<span style={{ fontStyle: "Bold", fontWeight: "bold" }}>{detail.matchStarted ? "started" : "not Started so Far"}{""}</span>


                        <span style={{ fontStyle: "Bold", fontWeight: "bold" }}>
                            {detail.score}
                        </span>
                    </Typography>
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary" autoFocus>
                    Close
                </Button>



            </DialogActions>
        </Dialog>
    )



    return <fragment>
        {getMatchCart()}
        {getDialogue()}
    </fragment>

};

export default MyCard;

