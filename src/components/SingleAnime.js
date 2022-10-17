import React from 'react'
// import { useEffect } from 'react';
import { Grid, Typography, Paper } from '@mui/material';
import './SingleAnime.scss';

const SingleAnime = (props) => {
    const {
        title,
        images,
        episodes,
        rating,
        airing,
        broadcast,
        score,
        url
    } = props.info;

    // useEffect(() => {
    //     console.log(title);
    // }, [props.info]);

    return (
        <Grid container spacing={10} direction="row" justifyContent="center" alignItems="center" alignContent="center" className="singleAnime-container">
            <Grid item>
                <img src={images.jpg.image_url} alt={title} className="singleAnime-image" />
            </Grid>
            <Grid item>
                <Paper elevation={3} className="singleAnime-desc">
                    <Typography variant="h4" component="h2">{title}</Typography>
                    <Typography variant="h5" component="h2">Airing: {{ airing } === true ? "Yes" : "No"}</Typography>
                    <Typography variant="h5" component="h2">Score: {score}</Typography>
                    <Typography variant="h5" component="h2">Broadcast: {broadcast.string}</Typography>
                    <Typography variant="h5" component="h2">Rating: {rating}</Typography>
                    <Typography variant="h5" component="h2">Episodes: {episodes}</Typography>
                    <Typography variant="h5" component="h2">
                        <a href={url} target="_blank">MAL</a>
                    </Typography>
                </Paper>
            </Grid>
        </Grid>
    )
}

export default SingleAnime